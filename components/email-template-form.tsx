import RichTextEditor from "@/components/editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { emailTemplateService } from "@/services/mock-email-template.service";
import {
  CreateEmailTemplateInput,
  EmailTemplate,
  EmailTemplateCategory,
} from "@/types/email-template";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EmailTemplatePreview from "./email-template-preview";

interface EmailTemplateFormProps {
  initialData?: EmailTemplate;
  isEditing?: boolean;
}

const CATEGORY_OPTIONS = [
  { label: "Verification", value: "Verification" },
  { label: "Notification", value: "Notification" },
];

export default function EmailTemplateForm({
  initialData,
  isEditing = false,
}: EmailTemplateFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateEmailTemplateInput>({
    name: "",
    subject: "",
    body: "",
    category: "Notification" as EmailTemplateCategory,
    description: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreateEmailTemplateInput, string>>
  >({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        subject: initialData.subject,
        body: initialData.body,
        category: initialData.category,
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  const validate = () => {
    const newErrors: Partial<Record<keyof CreateEmailTemplateInput, string>> =
      {};
    if (!formData.name.trim()) newErrors.name = "Template name is required";
    if (!formData.subject.trim())
      newErrors.subject = "Subject line is required";
    if (!formData.body.trim() || formData.body === "<p></p>")
      newErrors.body = "Email body is required";
    if (!formData.category) newErrors.category = "Category is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    setIsSaving(true);
    try {
      if (isEditing && initialData) {
        await emailTemplateService.updateTemplate(initialData.id, formData);
      } else {
        await emailTemplateService.saveTemplate(formData);
      }
      router.push("/email-templates");
    } catch (error) {
      console.error("Failed to save template", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-[var(--color-primary-cool-gray-30)]">
      <div className="space-y-4">
        <Input
          label="Template Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          placeholder="e.g. Welcome Email"
          required
        />

        <Select
          label="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value as EmailTemplateCategory,
            })
          }
          options={CATEGORY_OPTIONS}
          error={errors.category}
          required
        />

        <Input
          label="Subject Line"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          error={errors.subject}
          placeholder="e.g. Welcome to FilPass!"
          required
        />

        <div className="space-y-1.5">
          <RichTextEditor
            label="Email Body"
            value={formData.body}
            onChange={(html) => setFormData({ ...formData, body: html })}
            error={errors.body}
            helperText="Use variables like {{name}} for dynamic content."
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[var(--color-primary-cool-gray-20)]">
        <Button
          variant="secondary"
          onClick={() => router.push("/email-templates")}
        >
          Cancel
        </Button>
        <Button variant="outline" onClick={() => setIsPreviewOpen(true)}>
          Preview
        </Button>
        <Button onClick={handleSave} isLoading={isSaving}>
          {isEditing ? "Save Changes" : "Create Template"}
        </Button>
      </div>

      <EmailTemplatePreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        data={formData}
      />
    </div>
  );
}
