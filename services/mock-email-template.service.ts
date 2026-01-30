import {
  CreateEmailTemplateInput,
  EmailTemplate,
  UpdateEmailTemplateInput,
} from "@/types/email-template";

// Initial Mock Data
const INITIAL_TEMPLATES: EmailTemplate[] = [
  {
    id: "1",
    name: "Welcome Email",
    description: "Sent to new users upon registration",
    category: "Notification",
    subject: "Welcome to FilPass!",
    body: "<p>Hi {{name}}, welcome to FilPass!</p>",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    tags: ["onboarding", "welcome"],
  },
  {
    id: "2",
    name: "Email Verification",
    description: "Verification code for email address",
    category: "Verification",
    subject: "Verify your email address",
    body: "<p>Your verification code is: <strong>{{code}}</strong></p>",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 86400000).toISOString(),
    tags: ["security", "verification"],
  },
];

class MockEmailTemplateService {
  private templates: EmailTemplate[] = [...INITIAL_TEMPLATES];

  async getTemplates(): Promise<EmailTemplate[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [...this.templates];
  }

  async getTemplate(id: string): Promise<EmailTemplate | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return this.templates.find((t) => t.id === id);
  }

  async saveTemplate(input: CreateEmailTemplateInput): Promise<EmailTemplate> {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newTemplate: EmailTemplate = {
      id: Math.random().toString(36).substr(2, 9),
      ...input,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    this.templates.push(newTemplate);
    return newTemplate;
  }

  async updateTemplate(
    id: string,
    input: UpdateEmailTemplateInput,
  ): Promise<EmailTemplate> {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const index = this.templates.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new Error(`Template with id ${id} not found`);
    }

    const updatedTemplate = {
      ...this.templates[index],
      ...input,
      updated_at: new Date().toISOString(),
    };

    this.templates[index] = updatedTemplate;
    return updatedTemplate;
  }

  async deleteTemplate(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.templates = this.templates.filter((t) => t.id !== id);
  }
}

export const emailTemplateService = new MockEmailTemplateService();
