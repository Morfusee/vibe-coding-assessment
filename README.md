# FilPass Design System

## 1. Overview

### Purpose

This design system serves as the authoritative source of truth for implementing FilPass UI components and interfaces. It has been created with Web Content Accessibility Guidelines (WCAG) Level AAA compliance in mind.

### Scope

- UI components for web applications
- Color systems (primary, neutrals, supporting colors)
- Typography specifications
- Spacing and layout rules
- Text content standards and templates
- Accessibility compliance requirements

### Intended Platforms

- Web (responsive design)
- Desktop, Tablet, and Mobile breakpoints defined

### Design Goals

1. **Reusability**: Ensure components and patterns can be reused across projects, reducing redundancy and maintaining inclusivity
2. **Efficiency**: Streamline design and development by providing predefined components for WCAG-compliant interfaces
3. **Consistency**: Establish uniform accessibility standards across all products for a seamless, predictable experience
4. **Accessibility**: Build a system that meets WCAG Level AAA standards to create inclusive digital products

---

## 2. Design Foundations

### 2.1 Colors

#### Primary Colors

##### Indigo

- **Indigo 100**: `#1921KC` (Token: `color.primary.indigo.indigo-100`, Opacity: 100%)
- **Indigo 90**: `#4D3A8C` (Token: `color.primary.indigo.indigo-90`, Opacity: 100%)
- **Indigo 80**: `#4D468C` (Token: `color.primary.indigo.indigo-80`, Opacity: 100%)
- **Indigo 70**: `#4D55A8` (Token: `color.primary.indigo.indigo-70`, Opacity: 100%)
  - **Usage**: Primary accent color used in FilPass
- **Indigo 60**: `#4D5B88` (Token: `color.primary.indigo.indigo60`, Opacity: 100%)
- **Indigo 50**: `#847AC8` (Token: `color.primary.indigo.indigo-50`, Opacity: 100%)
- **Indigo 40**: `#9D93D1` (Token: `color.primary.indigo.indigo-40`, Opacity: 100%)
- **Indigo 30**: `#A9A1CB` (Token: `color.primary.indigo.indigo-30`, Opacity: 100%)
- **Indigo 20**: `#B5D0E7` (Token: `color.primary.indigo.indigo-20`, Opacity: 100%)
- **Indigo 10**: `#E8E8F9` (Token: `color.primary.indigo.indigo-10`, Opacity: 100%)

##### Blue

- **Blue 100**: `#0A4D8C` (Token: `color.primary.blue.blue-100`, Opacity: 100%)
- **Blue 90**: `#1B5E9C` (Token: `color.primary.blue.blue-90`, Opacity: 100%)
- **Blue 80**: `#2B7BC7` (Token: `color.primary.blue.blue-80`, Opacity: 100%)
- **Blue 70**: `#1B87AF` (Token: `color.primary.blue.blue-70`, Opacity: 100%)
- **Blue 60**: `#2B86C2` (Token: `color.primary.blue.blue-60`, Opacity: 100%)
- **Blue 50**: `#4D98D7` (Token: `color.primary.blue.blue-50`, Opacity: 100%)
- **Blue 40**: `#82B0C8` (Token: `color.primary.blue.blue-40`, Opacity: 100%)
- **Blue 30**: `#84C5F4` (Token: `color.primary.blue.blue-30`, Opacity: 100%)
- **Blue 20**: `#88E0FE` (Token: `color.primary.blue.blue-20`, Opacity: 100%)
- **Blue 10**: `#DCCE7B` (Token: `color.primary.blue.blue-10`, Opacity: 100%)

#### Neutral Colors

##### Cool Gray

- **Cool Gray 100**: `#1F2933` (Token: `color.primary.cool-gray.cool-gray-100`, Opacity: 100%)
  - **Usage**: Page titles
- **Cool Gray 90**: `#323F4B` (Token: `color.primary.cool-gray.cool-gray-90`, Opacity: 100%)
- **Cool Gray 80**: `#3E4C59` (Token: `color.primary.cool-gray.cool-gray-80`, Opacity: 100%)
  - **Usage**: Base color for texts used for small texts that are below 18 pt or 14 pt bold; Icons and texts on sidebars and secondary buttons
- **Cool Gray 70**: `#52606D` (Token: `color.neutral.cool-gray.cool-gray-70`, Opacity: 100%)
- **Cool Gray 60**: `#616E7C` (Token: `color.primary.cool-gray.cool-gray-60`, Opacity: 100%)
- **Cool Gray 50**: `#7B8794` (Token: `color.primary.cool-gray.cool-gray-50`, Opacity: 100%)
  - **Usage**: Borders of components that have white background or are applied onto it (e.g., dropdowns, input fields, secondary buttons, dividers)
- **Cool Gray 40**: `#9AA5B1` (Token: `color.neutral.cool-gray.cool-gray-40`, Opacity: 100%)
- **Cool Gray 30**: `#CBD2D9` (Token: `color.primary.cool-gray.cool-gray-30`, Opacity: 100%)
- **Cool Gray 20**: `#E4E7EB` (Token: `color.primary.cool-gray.cool-gray-20`, Opacity: 100%)
  - **Usage**: Components that are in a disabled state
- **Cool Gray 10**: `#F5F7FA` (Token: `color.neutral.cool-gray.cool-gray-10`, Opacity: 100%)

#### Supporting Colors

##### Red

- **Red 100**: (Token: `color.supporting.red.red-100`, Opacity: 100%)
- **Red 90**: (Token: `color.supporting.red.red-90`, Opacity: 100%)
- **Red 80**: (Token: `color.supporting.red.red-80`, Opacity: 100%)
- **Red 70**: (Token: `color.supporting.red.red-70`, Opacity: 100%)
- **Red 60**: `#E12D39` (Token: `color.supporting.red.red-60`, Opacity: 100%)
  - **Usage**: Input fields that are in an error state; Components that invoke a sense of urgency to the user
- **Red 50**: (Token: `color.supporting.red.red-50`, Opacity: 100%)
- **Red 40**: (Token: `color.supporting.red.red-40`, Opacity: 100%)
- **Red 30**: (Token: `color.supporting.red.red-30`, Opacity: 100%)
- **Red 20**: (Token: `color.supporting.red.red-20`, Opacity: 100%)
- **Red 10**: (Token: `color.supporting.red.red-10`, Opacity: 100%)

##### Light Blue

- **Light Blue 100**: (Token: `color.supporting.light-blue.light-blue-100`, Opacity: 100%)
- **Light Blue 90**: (Token: `color.supporting.light-blue.light-blue-90`, Opacity: 100%)
- **Light Blue 80**: (Token: `color.supporting.light-blue.light-blue-80`, Opacity: 100%)
- **Light Blue 70**: (Token: `color.supporting.light-blue.light-blue-70`, Opacity: 100%)
- **Light Blue 60**: (Token: `color.supporting.light-blue.light-blue-60`, Opacity: 100%)
- **Light Blue 50**: (Token: `color.supporting.light-blue.light-blue-50`, Opacity: 100%)
- **Light Blue 40**: (Token: `color.supporting.light-blue.light-blue-40`, Opacity: 100%)
- **Light Blue 30**: (Token: `color.supporting.light-blue.light-blue-30`, Opacity: 100%)
- **Light Blue 20**: (Token: `color.supporting.light-blue.light-blue-20`, Opacity: 100%)
- **Light Blue 10**: (Token: `color.supporting.light-blue.light-blue-10`, Opacity: 100%)

##### Yellow

- **Yellow 100**: (Token: `color.supporting.yellow.yellow-100`, Opacity: 100%)
- **Yellow 90**: (Token: `color.supporting.yellow.yellow-90`, Opacity: 100%)
- **Yellow 80**: (Token: `color.supporting.yellow.yellow-80`, Opacity: 100%)
- **Yellow 70**: (Token: `color.supporting.yellow.yellow-70`, Opacity: 100%)
- **Yellow 60**: (Token: `color.supporting.yellow.yellow-60`, Opacity: 100%)
- **Yellow 50**: (Token: `color.supporting.yellow.yellow-50`, Opacity: 100%)
- **Yellow 40**: (Token: `color.supporting.yellow.yellow-40`, Opacity: 100%)
- **Yellow 30**: (Token: `color.supporting.yellow.yellow-30`, Opacity: 100%)
- **Yellow 20**: (Token: `color.supporting.yellow.yellow-20`, Opacity: 100%)
- **Yellow 10**: (Token: `color.supporting.yellow.yellow-10`, Opacity: 100%)

##### Green

- **Green 100**: (Token: `color.supporting.green.green-100`, Opacity: 100%)
- **Green 90**: (Token: `color.supporting.green.green-90`, Opacity: 100%)
- **Green 80**: (Token: `color.supporting.green.green-80`, Opacity: 100%)
- **Green 70**: (Token: `color.supporting.green.green-70`, Opacity: 100%)
- **Green 60**: (Token: `color.supporting.green.green-60`, Opacity: 100%)
- **Green 50**: (Token: `color.supporting.green.green-50`, Opacity: 100%)
- **Green 40**: (Token: `color.supporting.green.green-40`, Opacity: 100%)
- **Green 30**: (Token: `color.supporting.green.green-30`, Opacity: 100%)
- **Green 20**: (Token: `color.supporting.green.green-20`, Opacity: 100%)
- **Green 10**: (Token: `color.supporting.green.green-10`, Opacity: 100%)

#### Utility Colors

##### Background

- **Color Code**: `#EFF1F6`
- **Token**: `color.custom.background`
- **Opacity**: 100%
- **Usage**: Background for mockup screens

##### Modal Overlay

- **Color Code**: `#9AA5B1`
- **Token**: `color.custom.modal-overlay`
- **Opacity**: 20%
- **Usage**: Overlay background when showing modals

---

### 2.2 Typography

#### Font Families

##### Primary Typeface

- **Font**: DM Sans Bold
- **Character Set**: ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 abcdefghijklmnopqrstuvwxyz
- **Sample**: "The quick brown fox jumps over the lazy dog"

##### Secondary Typeface

- **Font**: Inter
- **Character Set**: ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 abcdefghijklmnopqrstuvwxyz
- **Sample**: "The quick brown fox jumps over the lazy dog"

#### Typography Rules

**General Rule of Thumb:**

- **Line Height (Line Spacing)**: At least 1.5 times the font size
- **Spacing Paragraphs**: At least 2 times the font size
- **Letter Spacing**: At least 0.12 times the font size
- **Word Spacing**: At least 0.16 times the font size

**Note**: Word Spacing is not currently reflected in Figma. Teams do not have an option to set this in Text Styles.

#### Primary Typeface (DM Sans) Specifications

| Font Size       | Line Height | Line Spacing | Notes          |
| --------------- | ----------- | ------------ | -------------- |
| 48px, 3 rem     | 72          | 5.76%        |                |
| 36px, 2.25 rem  | 54          | 4.32%        |                |
| 32px, 2 rem     | 44          | 3.5%         |                |
| 24px, 1.5 rem   | 36          | 2.88%        |                |
| 20px, 1.25 rem  | 30          | 2.4%         |                |
| 18px, 1.125 rem | 27          | 1.92%        | BASE FONT SIZE |
| 14px, 0.875 rem | 21          | 1.68%        |                |
| 12px, 0.75 rem  | 18          | 1.44%        |                |

#### Secondary Typeface (Inter) Specifications

| Font Size       | Line Height | Line Spacing | Notes          |
| --------------- | ----------- | ------------ | -------------- |
| 48px, 3 rem     | 72          | 5.76%        |                |
| 36px, 2.25 rem  | 54          | 4.32%        |                |
| 32px, 2 rem     | 48          | 3.8%         |                |
| 24px, 1.5 rem   | 36          | 2.88%        |                |
| 20px, 1.25 rem  | 30          | 2.4%         |                |
| 18px, 1.125 rem | 27          | 1.92%        | BASE FONT SIZE |
| 14px, 0.875 rem | 21          | 1.68%        |                |
| 12px, 0.75 rem  | 18          | 1.44%        |                |

---

### 2.3 Spacing & Layout

#### Spacing System

**Base Unit**: 4px

**Usage Principle**: All spacing, margins, paddings, and layout gaps should be multiples of 4px. This modular rhythm ensures consistency and simplifies scaling across all screens.

#### Spacing Tokens

| Token       | Value |
| ----------- | ----- |
| Spacing-x0  | 0px   |
| Spacing-x1  | 4px   |
| Spacing-x2  | 8px   |
| Spacing-x3  | 12px  |
| Spacing-x4  | 16px  |
| Spacing-x5  | 20px  |
| Spacing-x6  | 24px  |
| Spacing-x7  | 28px  |
| Spacing-x8  | 32px  |
| Spacing-x10 | 40px  |
| Spacing-x12 | 48px  |
| Spacing-x16 | 64px  |
| Spacing-x20 | 80px  |
| Spacing-x24 | 96px  |
| Spacing-x32 | 128px |
| Spacing-x40 | 160px |
| Spacing-x48 | 192px |

#### Best Practices

- **Use Tokens**: Use spacing tokens rather than hardcoded values. This ensures consistency and allows for easier updating if we ever need to modify our spacing system.
- **Stick to the Scale**: Always use values that are multiples of 4. Avoid using arbitrary values like 5px or 7px unless absolutely necessary.
- **Utilize Auto Layout in Figma**: Leverage Auto Layout to apply consistent spacing between elements. Then use spacing values using the token names.

#### Things to Avoid

- **Using Values Outside the Spacing System**: Don't use spacing values that are not on the scale (e.g., 3px, 5px, 14px).
- **Eyeballing Spacing**: Avoid manually adjusting spacing by "eyeball" measurements.
- **Don't override Tokens**: Do not override the predefined token values unless absolutely necessary.

#### Grid System

##### Desktop

- **Gutter Width**: Spacing-x8 (32px)
- **No of Columns**: 12
- **Margin**: Dependent on container

##### Tablet

- **Gutter Width**: Spacing-x8 (32px)
- **No of Columns**: 8
- **Margin**: Dependent on container

##### Mobile

- **Gutter Width**: Spacing-x4 (16px)
- **No of Columns**: 4
- **Margin**: Dependent on container

**Note**: The sidebar will always have no margins and is placed on the left-hand side of the screen. The margin of the main content begins after the sidebar. Alignment is available.

---

### 2.4 Borders & Radius

**Note**: Specific border width and radius values are not explicitly documented in the provided images. Implementation should reference component-specific specifications.

---

### 2.5 Elevation & Shadows

**Note**: Specific shadow definitions are not explicitly documented in the provided images. Implementation should reference component-specific specifications.

---

## 3. Components

### 3.1 Buttons

#### Primary Button

**Purpose**: Main call-to-action button

**WCAG Level AAA Compliance**:

- **Contrast Ratio**: 6.81
- **AA Large**: Pass ✓
- **AAA Large**: Pass ✓
- **AA Normal**: Pass ✓

**Visual Specifications**:

- Background color: Indigo 70 (#4D55A8)
- Text color: White
- Typography: DM Sans Bold (refer to typography section for sizing)

**States**: Not explicitly documented in images

**Dimensions**: Not explicitly documented in images

**Padding & Spacing**: Not explicitly documented in images

**Border & Radius**: Not explicitly documented in images

---

### 3.2 Alerts

#### Success Alert

**Purpose**: Display success messages to users

**WCAG Level AAA Compliance**:

- **Contrast Ratio**: 8.33
- **AA Large**: Pass ✓
- **AAA Large**: Pass ✓
- **AA Normal**: Pass ✓
- **AAA Normal**: Pass ✓

**Visual Specifications**:

- Background color: Light green/mint (specific hex not provided)
- Text color: Dark green (specific hex not provided)
- Border: Green accent

**Example Text**: "You have successfully issued a certificate!"

**States**: Default display state

**Dimensions**: Not explicitly documented in images

**Padding & Spacing**: Not explicitly documented in images

**Typography**: Refer to typography section

---

### 3.3 Badges

#### Rejected Badge

**Purpose**: Display rejection status

**WCAG Level AAA Compliance**:

- **Contrast Ratio**: 8.21
- **AA Large**: Pass ✓
- **AAA Large**: Pass ✓
- **AA Normal**: Pass ✓
- **AAA Normal**: Pass ✓

**Visual Specifications**:

- Background color: Light pink/red (specific hex not provided)
- Text color: Dark red
- Text: "• Rejected"
- Typography: Refer to typography section

**States**: Static display

**Dimensions**: Not explicitly documented in images

**Padding & Spacing**: Not explicitly documented in images

**Border & Radius**: Rounded corners (specific radius not provided)

---

### 3.4 Tooltips

**Purpose**: Provide help to users on the function currently being performed. This mainly helps individuals with writing disabilities, people who are aging, and people with reading and intellectual disabilities, who often have difficulties filling up forms.

**Visual Specifications**:

- Background color: Dark (Cool Gray 100 or similar)
- Text color: White
- Placeholder text: "Type Your Message Here"

**Behavioral Notes**:

- Appears on hover or focus
- Provides contextual help for form fields and interactive elements

**Dimensions**: Not explicitly documented in images

**Padding & Spacing**: Not explicitly documented in images

**Typography**: Refer to typography section

---

## 4. Layout Patterns

### 4.1 Basic Layout Structure

The FilPass design system uses a sidebar-based layout with the following characteristics:

**Sidebar**:

- Position: Left-hand side of screen
- Width: Not explicitly specified
- Margin: No margins (flush to left edge)
- Background: Light blue/gray tint

**Main Content Area**:

- Position: Right of sidebar
- Margin: Begins after sidebar, dependent on container
- Background: White or Background color (#EFF1F6)

**Header**:

- Contains page title
- Contains action buttons (e.g., "Request Documents")
- Spacing: Spacing-x8 (32px) from content below

**Content Tables/Lists**:

- Uses tabbed navigation (e.g., "All (6)", "Approved (1)", "Pending (2)", "Rejected (2)")
- Includes search and filter controls
- Pagination at bottom

---

### 4.2 Responsive Breakpoints

| Type of Screen | Value   | Description |
| -------------- | ------- | ----------- |
| Extra Small    | 0 px    | Small Phone |
| Small          | 576 px  | 576 px      |
| Medium         | 768 px  | 768 px      |
| Large          | 992 px  | 992 px      |
| X-Large        | 1200 px | 1200 px     |
| XX-Large       | 1400 px | 1400 px     |

#### Responsive Behavior Guidelines

- Collapse multi-column layouts into single columns at smaller breakpoints
- Adjust spacing and font sizes to maintain visual hierarchy
- Navigation elements stack vertically on small devices

---

## 5. Accessibility Notes

### 5.1 WCAG Level AAA Standards

The components are designed to adhere to WCAG Level AAA standards. This ensures that projects are accessible to a large range of users.

#### The 4 Principles of Accessibility

**01 - PERCEIVABLE**

- Information and UI elements must be presented in ways that users can perceive
- Includes alt text for images, text alternatives for sensory abilities (e.g., text alternatives for images, captions for videos)

**02 - OPERABLE**

- Interfaces must be navigable and functional for all users, including those using assistive technologies
- Examples: keyboard navigation, avoiding time-based interactions

**03 - UNDERSTANDABLE**

- Content and interactions should be clear and predictable, ensuring users can easily comprehend information and how to use the interface
- Examples: simple language, consistent navigation

**04 - ROBUST**

- Content must be compatible with various assistive technologies and future-proof for evolving web standards
- Examples: proper HTML structure, support for screen readers

---

### 5.2 Color Contrast Requirements

#### Small Text

Text less than 18 pt (~24px) or less than 14 pt bold (~19px):

- **Level AA**: 4.5:1 contrast
- **Level AAA**: 7:1 contrast

#### Large Text

Text 18 pt or more (~ 24px) or 14 pt bold or more (~19px):

- **Level AA**: 3:1 contrast
- **Level AAA**: 4.5:1 contrast

#### Non-Text (Graphical & UI Components)

- **Minimum**: At least 3:1 against adjacent backgrounds

---

### 5.3 HTML Native Landmarks

HTML5 introduced semantic elements that define structural regions of a page. When used correctly, these landmarks help assistive technologies navigate efficiently.

| HTML Tag    | Semantic Role | Purpose                                                   |
| ----------- | ------------- | --------------------------------------------------------- |
| `<header>`  | Banner        | Top of page, usually includes branding or site navigation |
| `<nav>`     | Navigation    | Site or app-wide navigation menu                          |
| `<main>`    | Main          | Primary content of the page                               |
| `<aside>`   | Complementary | Related but secondary content                             |
| `<footer>`  | Contentinfo   | Bottom section with metadata, links, or copyright info    |
| `<section>` | Region        | Thematic grouping of content, often with a heading        |
| `<article>` | Article       | Self-contained content (e.g., blog post, news article)    |
| `<search>`  | Search        | A region for search-related area                          |

**Note**: Use one landmark of each type per page. They're not interchangeable and should be used as per their semantics.

---

### 5.4 ARIA Landmark Roles

When HTML5 tags aren't enough (e.g., a custom component or complex structure), ARIA landmark roles can be used.

| ARIA Role              | Use When...                                                                    | Example                         |
| ---------------------- | ------------------------------------------------------------------------------ | ------------------------------- |
| `role="banner"`        | For define a header section of a page, usually includes branding or navigation | Top banner, masthead            |
| `role="navigation"`    | Marks a major block of navigation links                                        | Main menu, breadcrumbs          |
| `role="main"`          | Identifies the primary content area                                            | Content layout area             |
| `role="region"`        | For children or similar landmarks, especially when unnamed                     | Custom layout area              |
| `role="search"`        | Marks a search form or search-related area                                     | Site search                     |
| `role="form"`          | When defining custom forms (though `<form>` is preferred)                      |                                 |
| `role="complementary"` | Grouping side content which isn't the main focus                               | Sidebar, related links          |
| `role="contentinfo"`   | For footer-like content (metadata, copyright, etc.)                            | Always use label if not obvious |

---

### 5.5 Implementation Best Practices

#### Do's

- Use HTML landmarks first
- Label ARIA landmarks with `aria-label` or `aria-labelledby`
- Verify structure with accessibility tools
- Keep landmarks simple and non-nested

#### Don'ts

- Avoid nesting similar landmarks
- Assume a `<div>` is accessible structure
- Overuse ARIA when native HTML works
- Forget to test with screen readers

---

### 5.6 Custom Component Guidelines

| Component      | Suggested Tag/Role                                                                      |
| -------------- | --------------------------------------------------------------------------------------- |
| App Header     | `<header>` or `role="banner"` (Only if it appears once)                                 |
| Side Nav       | `<nav>` or `role="navigation"`                                                          |
| Main Content   | `<main>` or `role="main"` (Only once per page)                                          |
| Search Panel   | `<search>` or `role="search"`                                                           |
| Sidebar Panel  | `<aside>` or `role="complementary"`                                                     |
| Footer         | `<footer>` or `role="contentinfo"`                                                      |
| Custom Section | `<section>` or `role="region"` + `aria-labelledby=""` (Always use label if not obvious) |

---

## 6. Text Content Standards

### 6.1 Voice and Tone

**Voice**:

- Clear: Avoid jargon or complex terms
- Helpful: Provide guidance and clarity
- Confident: Instruct and straighten to the point
- Inclusive: Ensure content is accessible to all users

**Tone**:

- Professional but human, helpful but not robotic

---

### 6.2 Content Templates

#### Banner

**Example**: "Failed: Did not meet certain errors. Please check add by again."

**Notes**:

- Keep it to 2 sentences, direct and scannable
- Avoid overly wordy sentences

#### Modals

| **Element** | **Content Rule**                      |
| ----------- | ------------------------------------- |
| Title       | Clear and specific                    |
| Body        | 1-2 sentences max, short              |
| Action      | Use verbs: "Save", "Cancel", "Delete" |

**Example - Delete Supporting Document**:

- Title: "Delete Supporting Document?"
- Body: "Are you sure you want to delete Document Type?"
- Actions: "Cancel" / "Delete" buttons

#### Buttons and Call to Actions (CTAs)

- Use imperative verbs: "Start", "Save", "Continue", "Upload"
- Be specific: Avoid "Click here"

#### Empty Fields/States

**Example**: "No currently have no custom lists in API. Please check and try adding something"

**Notes**:

- Describe the problem or get started
- Offer clear next steps and direct instruction

#### Tooltips/Helpers

**Notes**:

- Be clear and concise
- Avoid full sentences if not needed
- Don't repeat the label

---

### 6.3 Standardized Text - Alerts

A set of common use cases for alerts.

#### Negative Alerts

| Use Case                                     | Alert Type          | Text                                                                                                                     |
| -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Empty Required Fields                        | Error Large w/ Icon | "One or more fields are empty. Please fill up all required fields before proceeding."                                    |
| Form Field w/ Error                          | Error Small w/ Icon | "Invalid [field name]. Please check and try again."                                                                      |
| File Upload Error - Too Large                | Error Large w/ Icon | "File Too Large. The file you selected exceeds the maximum allowed file size. Please select a smaller file."             |
| File Upload Error - Unsupported File Type    | Error Large w/ Icon | "Unsupported File Type. This content only accepts [supported file types]. Please select a supported file and try again." |
| File Upload Error - General Upload Error     | Error Large w/ Icon | "Oh no! Something went wrong. Try Again."                                                                                |
| File Upload Error - Network Connection Error | Error Large w/ Icon | "Network Issue Detected. We couldn't establish a stable network connection and try again."                               |
| File Upload Error - Missing Documents        | Error Large w/ Icon | "Missing Documents. Please upload all the required documents to proceed."                                                |
| Error Validation - No Document Submitted     | Error Large w/ Icon | "No Document Found. Please upload all the required documents to proceed."                                                |

#### Positive Alerts

| Use Case                     | Alert Type             | Text                                            |
| ---------------------------- | ---------------------- | ----------------------------------------------- |
| Editing - Saving             | Success Normal         | "Changes successfully saved."                   |
| Editing - Saved Successfully | Success Normal         | "Saved successfully."                           |
| Draft - Saving               | Success Normal         | "Draft successfully saved."                     |
| Link Copied                  | Success Normal         | "Link successfully copied."                     |
| Account Created              | Success Normal         | "Account successfully created."                 |
| Archiving                    | Success Normal w/ Icon | "Volume of what was successfully archived."     |
| Batch Archiving              | Success Normal w/ Icon | "Volume of [items] have successfully archived." |
| Unarchiving                  | Success Normal w/ Icon | "Volume of what was successfully unarchived."   |
| Creation                     | Success Normal w/ Icon | "Volume of what was successfully created."      |
| Revoke                       | Success Normal w/ Icon | "Volume of what was successfully revoked."      |
| Approved                     | Success Normal w/ Icon | "Volume of what was successfully approved."     |
| Rejected                     | Success Normal w/ Icon | "Volume of what was rejected successfully."     |
| Restored                     | Success Normal w/ Icon | "Volume of what was successfully restored."     |
| Revoke - Batch               | Success Normal w/ Icon | "Successfully revoked [X] items."               |
| Approved - Batch             | Success Normal w/ Icon | "Successfully approved [X] items."              |
| Rejected - Batch             | Success Normal w/ Icon | "Successfully rejected [X] items to Pending."   |
| Released - Batch             | Success Normal w/ Icon | "Successfully released [X] items."              |
| Downloaded                   | Success Normal         | "Successfully downloaded [Name of the Item]."   |

---

### 6.4 Writing Guide

#### Capitalization

| Element             | Style         |
| ------------------- | ------------- |
| Headlines/Titles    | Title Case    |
| Buttons/CTAs        | Title Case    |
| Tooltips and Errors | Sentence Case |

#### Accessibility

- Avoid metaphors or regional slang
- Use plain language
- Keep sentences under 20 words, if able
- Support screen readers: use aria-label and proper semantic tags

#### Microcopy Best Practices

- Anticipate questions users might have
- Guide the user at every step (especially in multi-step flows)
- Prioritize clarity over cleverness
- Always match UI actions to consequences

---

## 7. Open Questions / Missing Information

The following information is either missing, unclear, or not explicitly stated in the provided images:

1. **Exact HEX values for all supporting colors**: While Red 60, Indigo 70, and Cool Gray variations are documented, many supporting color HEX values (Yellow, Green, Light Blue full ranges) are not provided.

2. **Button states**: Hover, active, focus, and disabled states for buttons are not explicitly documented with visual specifications.

3. **Border widths and radius values**: Specific pixel values for border widths and corner radius are not provided for components.

4. **Shadow/elevation specifications**: No explicit shadow definitions (offset, blur, spread, color) are documented.

5. **Component dimensions**: Specific height and width values for buttons, badges, alerts, and other components are not provided.

6. **Component padding values**: Internal padding for buttons, badges, alerts, and tooltips is not explicitly specified.

7. **Icon specifications**: Icon sizes, stroke widths, and usage guidelines are not documented.

8. **Form field specifications**: Input field heights, padding, border styles, focus states, and error states are not fully documented.

9. **Navigation component details**: Sidebar width, navigation item heights, active states, and hover states are not specified.

10. **Table/data grid specifications**: Row heights, cell padding, header styles, and sorting indicators are not documented.

11. **Modal specifications**: Modal widths, padding, backdrop opacity, and positioning rules are not provided.

12. **Specific RGB values**: Most colors are provided in HEX format only; RGB/RGBA values are not consistently documented.

13. **Animation/transition specifications**: No timing functions, durations, or easing curves are documented for interactive states.

14. **Z-index layering system**: Stacking order for modals, tooltips, dropdowns, and other overlays is not defined.

15. **Focus indicator specifications**: Visual appearance of keyboard focus states is not explicitly documented.

---

## Implementation Notes

This README serves as the non-negotiable source of truth for the FilPass Design System. All values, specifications, and guidelines documented here must be followed exactly as stated. Where information is missing or unclear (as noted in Section 7), implementers must:

1. Flag the missing information
2. Request clarification from design stakeholders
3. NOT invent or infer values

Any deviations from this specification must be documented and approved through the proper design review process.
