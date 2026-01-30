import EmailTemplateForm from "@/components/email-template-form";
import DashboardLayout from "@/pages/layout";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const CreateEmailTemplatePage: NextPage = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[var(--color-primary-cool-gray-10)] pb-10">
        <Head>
          <title>Create Email Template - FilPass</title>
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
              <span>Create</span>
            </div>
            <h1 className="text-2xl font-bold text-[var(--color-primary-cool-gray-100)]">
              Create Email Template
            </h1>
            <p className="text-[var(--color-primary-cool-gray-60)]">
              Design a new email template for your notifications.
            </p>
          </div>

          <EmailTemplateForm />
        </main>
      </div>
    </DashboardLayout>
  );
};

export default CreateEmailTemplatePage;
