import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { EmailTemplate } from "@/types/email-template";
import DOMPurify from "isomorphic-dompurify";

interface EmailTemplatePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  data: Partial<EmailTemplate>;
}

export default function EmailTemplatePreview({
  isOpen,
  onClose,
  data,
}: EmailTemplatePreviewProps) {
  const sanitizedBody = DOMPurify.sanitize(data.body || "");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Email Preview"
      maxWidth="max-w-3xl"
      footer={
        <Button onClick={onClose} variant="secondary">
          Close Preview
        </Button>
      }
    >
      <div className="space-y-4">
        <div className="bg-[var(--color-primary-cool-gray-10)] p-4 rounded-md border border-[var(--color-primary-cool-gray-20)]">
          <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
            <span className="font-semibold text-[var(--color-primary-cool-gray-60)]">
              Subject:
            </span>
            <span className="font-medium text-[var(--color-primary-cool-gray-100)]">
              {data.subject || "(No subject)"}
            </span>

            <span className="font-semibold text-[var(--color-primary-cool-gray-60)]">
              Category:
            </span>
            <span className="font-medium text-[var(--color-primary-cool-gray-100)]">
              {data.category || "-"}
            </span>
          </div>
        </div>

        <div className="border border-[var(--color-primary-cool-gray-30)] rounded-md overflow-hidden">
          <div className="bg-[var(--color-primary-cool-gray-10)] px-4 py-2 border-b border-[var(--color-primary-cool-gray-20)] text-xs font-semibold text-[var(--color-primary-cool-gray-60)] uppercase tracking-wide">
            Email Body
          </div>
          <div
            className="p-6 prose prose-sm max-w-none min-h-[300px] bg-white"
            dangerouslySetInnerHTML={{ __html: sanitizedBody }}
          />
        </div>
      </div>
    </Modal>
  );
}
