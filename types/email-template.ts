export type EmailTemplateCategory = "Verification" | "Notification";

export interface EmailTemplate {
  id: string;
  name: string;
  description?: string;
  category: EmailTemplateCategory;
  subject: string;
  body: string; // HTML content from TipTap
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  tags?: string[];
}

export type CreateEmailTemplateInput = Omit<
  EmailTemplate,
  "id" | "created_at" | "updated_at"
>;

export type UpdateEmailTemplateInput = Partial<CreateEmailTemplateInput>;
