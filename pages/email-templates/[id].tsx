import EmailTemplateForm from "@/components/email-template-form";
import DashboardLayout from "@/pages/layout";
import { emailTemplateService } from "@/services/mock-email-template.service";
import { EmailTemplate } from "@/types/email-template";
import { Loader2 } from "lucide-react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditEmailTemplatePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [template, setTemplate] = useState<EmailTemplate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && typeof id === "string") {
      emailTemplateService.getTemplate(id).then((data) => {
        if (!data) {
          // Handle not found
          router.push("/email-templates");
          return;
        }
        setTemplate(data);
        setLoading(false);
      });
    }
  }, [id, router]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-screen items-center justify-center bg-[var(--color-primary-cool-gray-10)]">
          <Loader2 className="h-8 w-8 animate-spin text-[var(--color-primary-indigo-70)]" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[var(--color-primary-cool-gray-10)] pb-10">
        <Head>
          <title>Edit Email Template - FilPass</title>
        </Head>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-[var(--color-primary-cool-gray-60)] mb-2">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => router.push("/email-templates")}
              >
                Email Templates
              </span>
              <span>/</span>
              <span>Edit</span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--color-primary-cool-gray-100)]">
              Edit Template: {template?.name}
            </h1>
          </div>

          {template && <EmailTemplateForm initialData={template} isEditing />}
        </main>
      </div>
    </DashboardLayout>
  );
};

export default EditEmailTemplatePage;
