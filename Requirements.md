# Email Template Builder – Requirements

## 1. Purpose

This document defines the **functional, technical, and procedural requirements** for building the Email Template Builder feature using **Vibe Coding**. It serves as a **checklist and execution guide** for both human developers and AI assistants.

This document is **non-negotiable** during implementation and must be followed step by step.

---

## 2. Scope

### In Scope

- Frontend-only Email Template Builder
- Simulated dashboard environment
- CRUD operations using a mock API service
- Strict adherence to Filpass branding and existing system components

### Out of Scope

- Backend integration
- Authentication / authorization logic
- Email sending logic
- Production deployment

---

## 3. Tech & System Constraints

- Framework: **Next.js (Pages Router)**
- Language: **TypeScript + React (TSX)**
- Styling: **Tailwind CSS**
- Design: **Filpass Design System (from README Law)**
- Data Layer: **Frontend-only mock service**

Hard Rules:

- No inline styling
- No custom UI components unless explicitly required
- No deviation from existing system structure

---

## 4. User Roles & Capabilities

### Admin User

Admins must be able to:

- View a list of email templates
- Create a new email template
- Edit an existing email template
- Preview an email template before saving

No other roles are supported.

---

## 5. Functional Requirements (Checklist)

### 5.1 Email Template List Page

**Route**: `/pages/email-templates/index.tsx`

**Purpose**: Display all existing email templates in a table view.

**Requirements**:

- Use the system Table component
- Columns:
  - Template Name
  - Category (Verification | Notification)
  - Last Updated Date

- Actions per row:
  - Edit → navigates to Edit Page
  - Preview → opens Preview Modal

**Logic**:

- Fetch templates using `getTemplates()` from mock service
- Render empty state if no templates exist

---

### 5.2 Email Template Create Page

**Route**: `/pages/email-templates/create.tsx`

**Purpose**: Allow admins to create a new email template.

**Form Fields**:

- Template Name (text input)
- Subject Line (text input)
- Body (rich text editor)

**Buttons**:

- Save → persists template via `saveTemplate()`
- Cancel → navigates back to List Page

**Rules**:

- All inputs must be controlled
- Validation errors must be shown before save

---

### 5.3 Email Template Edit Page

**Route**: `/pages/email-templates/[id].tsx`

**Purpose**: Edit an existing email template.

**Requirements**:

- Pre-fill form fields using template ID
- Reuse the same form component as Create Page
- Save updates using `updateTemplate()`

---

### 5.4 Email Template Preview Modal

**Component**: `email-template-preview.tsx`

**Purpose**: Preview how the email will look.

**Rules**:

- Must use the **official Filpass Modal component**
- Must display:
  - Subject line
  - Styled email body

- No editing allowed in preview mode

---

## 6. Component Requirements

### Required Components

- `EmailTemplateForm`
  - Used for both Create and Edit pages
  - Accepts initial values and submit handlers

- `EmailTemplatePreview`
  - Modal-based
  - Receives template data as props

No duplicate components allowed.

---

## 7. Mock API Service Requirements

**File**: `services/mock-email-template.service.ts`

### Functions

- `getTemplates()`
  - Returns list of templates

- `saveTemplate(template)`
  - Saves new template

- `updateTemplate(id, template)`
  - Updates existing template

### Rules

- Data must persist during session (in-memory)
- IDs must be deterministic
- No async simulation unless explicitly added

---

## 8. Routing & Navigation Rules

- All routes must follow existing Pages Router conventions
- Navigation must use Next.js router
- No hardcoded URLs

---

## 9. Vibe Coding Execution Checklist

### Phase 1 – Audit

- [ ] Review V1 and V2 system structure
- [ ] Identify reusable components
- [ ] Confirm Filpass design tokens

### Phase 2 – Plan

- [ ] Confirm all requirements in this document
- [ ] List required components
- [ ] Define data flow

### Phase 3 – Prompt

- [ ] Prompt AI with **single-purpose tasks**
- [ ] Reference design system by name
- [ ] Avoid multi-feature prompts

### Phase 4 – Build

- [ ] Build List Page
- [ ] Build Form Component
- [ ] Build Create Page
- [ ] Build Edit Page
- [ ] Build Preview Modal
- [ ] Build Mock Service

### Phase 5 – Test

- [ ] CRUD operations work correctly
- [ ] UI matches Filpass branding
- [ ] No console errors
- [ ] Responsive layout verified

---

## 10. Expected Folder Structure

```
pages/email-templates/
├── index.tsx
├── create.tsx
└── [id].tsx

components/
├── email-template-form.tsx
└── email-template-preview.tsx

services/
└── mock-email-template.service.ts
```

---

## 11. Acceptance Criteria

- Feature matches all functional requirements
- No deviation from Filpass design system
- Code is readable, typed, and reusable
- AI-generated code is manually reviewed and refined

---

## 12. Notes

If a requirement is unclear or missing:

- Stop implementation
- Document the gap
- Resolve before proceeding
