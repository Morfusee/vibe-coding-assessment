import EmailTemplatePreview from "@/components/email-template-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/pages/layout";
import { emailTemplateService } from "@/services/mock-email-template.service";
import { EmailTemplate } from "@/types/email-template";
import { Edit2, Eye, Loader2, Plus, Search } from "lucide-react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Simple date formatter if date-fns not available
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const EmailTemplatesIndexPage: NextPage = () => {
  const router = useRouter();
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [previewTemplate, setPreviewTemplate] = useState<EmailTemplate | null>(
    null,
  );

  const fetchTemplates = async () => {
    setLoading(true);
    const data = await emailTemplateService.getTemplates();
    setTemplates(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const filteredTemplates = templates.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[var(--color-primary-cool-gray-10)] pb-10">
        <Head>
          <title>Email Templates - FilPass</title>
        </Head>

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-primary-cool-gray-100)]">
                Email Templates
              </h1>
              <p className="text-[var(--color-primary-cool-gray-60)]">
                Manage your email templates for system notifications.
              </p>
            </div>
            <Button
              onClick={() => router.push("/email-templates/create")}
              icon={<Plus className="h-4 w-4" />}
            >
              Create Template
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-primary-cool-gray-30)] overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 border-b border-[var(--color-primary-cool-gray-20)] flex items-center justify-between bg-white">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--color-primary-cool-gray-40)]" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="pl-9 pr-4 py-2 w-full text-sm border border-[var(--color-primary-cool-gray-30)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-indigo-70)]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Could add filters here */}
            </div>

            <div className="bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[var(--color-primary-cool-gray-10)] hover:bg-[var(--color-primary-cool-gray-10)]">
                    <TableHead className="w-[30%]">Template Name</TableHead>
                    <TableHead className="w-[20%]">Category</TableHead>
                    <TableHead className="w-[25%]">Last Updated</TableHead>
                    <TableHead className="w-[15%] text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center">
                        <div className="flex justify-center items-center">
                          <Loader2 className="h-6 w-6 animate-spin text-[var(--color-primary-indigo-70)]" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : filteredTemplates.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="h-32 text-center text-[var(--color-primary-cool-gray-60)]"
                      >
                        {searchQuery
                          ? "No templates found matching your search."
                          : "No templates created yet."}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredTemplates.map((template) => (
                      <TableRow key={template.id}>
                        <TableCell className="font-medium text-[var(--color-primary-cool-gray-90)]">
                          {template.name}
                          <div className="text-xs text-[var(--color-primary-cool-gray-50)] truncate max-w-[200px]">
                            {template.subject}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              template.category === "Verification"
                                ? "secondary"
                                : "default"
                            }
                            className={
                              template.category === "Verification"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-200 border-none"
                                : "bg-purple-100 text-purple-800 hover:bg-purple-200 border-none"
                            }
                          >
                            {template.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-[var(--color-primary-cool-gray-70)]">
                          {formatDate(template.updated_at)}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              title="Preview"
                              onClick={() => setPreviewTemplate(template)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                              title="Edit"
                              onClick={() =>
                                router.push(`/email-templates/${template.id}`)
                              }
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination placeholder */}
            <div className="p-4 border-t border-[var(--color-primary-cool-gray-20)] flex items-center justify-between text-sm text-[var(--color-primary-cool-gray-60)] bg-white">
              <div>Showing {filteredTemplates.length} results</div>
              {/* Add pagination controls if needed */}
            </div>
          </div>
        </main>

        {previewTemplate && (
          <EmailTemplatePreview
            isOpen={!!previewTemplate}
            onClose={() => setPreviewTemplate(null)}
            data={previewTemplate}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default EmailTemplatesIndexPage;
