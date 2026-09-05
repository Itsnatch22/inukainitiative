I need you to redesign and refine the existing community-based website in this project.

The current UI was initially generated using an AI website-generation tool. The generated website is visually impressive and contains most of the required content, but it currently has an obvious AI-generated/template feel and needs to be refined into a polished, intentional, production-ready website.

The client has provided the following website as a **design and structural reference**:

https://inukasuccesskenya.org/

Use this website as inspiration for its:

* Community-oriented visual language
* Storytelling structure
* Impact-focused presentation
* Use of imagery
* Typography hierarchy
* Section spacing
* Navigation patterns
* Calls to action
* Overall sense of trust and legitimacy

DO NOT clone the reference website.

Do not copy its:

* Branding
* Logo
* Colors exactly
* Text
* Images
* Layout verbatim
* Components verbatim
* Content
* Page structure without adapting it to this project

Instead, extract the underlying design principles and create an original implementation appropriate for this organization.

---

# PROJECT CONTEXT

This is an informational website for a community-based organization.

The website targets the general community regardless of age.

The website should feel:

* Welcoming
* Human
* Trustworthy
* Modern
* Professional
* Community-oriented
* Accessible
* Established
* Purpose-driven

Avoid making it look like:

* A SaaS dashboard
* A fintech product
* A generic startup landing page
* A children's website
* A government portal
* An overly corporate website
* An AI-generated template

The client has confirmed that the website may contain **up to approximately 6 pages**.

Do not force the website to exactly 6 pages.

Use additional pages only when the available content genuinely benefits from being separated.

Do not create empty pages simply to increase the page count.

---

# FIRST TASK: INSPECT THE EXISTING PROJECT

Before changing anything:

1. Inspect the existing project structure.
2. Identify the framework and version.
3. Identify the existing routing structure.
4. Inspect the current pages.
5. Inspect the existing components.
6. Inspect the current styling/theme.
7. Inspect the existing dependencies.
8. Identify unnecessary dependencies.
9. Inspect the existing contact form implementation.
10. Identify any localStorage-based contact form logic.
11. Identify any unnecessary axios usage.
12. Identify fake/mock API calls.
13. Identify duplicated components.
14. Identify unnecessary client components.
15. Identify existing assets and images.
16. Identify existing metadata/SEO configuration.

Do not rewrite working functionality unnecessarily.

Preserve useful existing work where appropriate.

---

# PAGE ARCHITECTURE

The website can contain up to 6 pages.

Use the following structure as the preferred information architecture:

1. Home
2. About Us
3. Programs / What We Do
4. Our Impact
5. Projects / News / Events
6. Contact

However, these are not mandatory.

If the organization's real content does not justify a particular page, incorporate that information into another page instead.

Do not create pages containing placeholder sections merely to reach six pages.

---

# HOME PAGE

The homepage should immediately communicate:

1. Who the organization is
2. What it does
3. Why it matters
4. How visitors can learn more or get involved

## Hero

Create a strong hero section.

Include:

* Organization name
* Clear headline communicating purpose
* Short supporting description
* Primary CTA
* Optional secondary CTA
* Strong community-related imagery

The hero should be visually impressive without being excessive.

Do not use generic phrases such as:

"Welcome to our website."

Prefer purpose-driven messaging.

Do not invent claims.

If the existing website already contains suitable copy, refine it rather than replacing it with fabricated information.

## Introduction

Create a concise section explaining the organization.

Use:

* Heading
* Supporting paragraph
* Image where appropriate
* CTA to About page

## Programs / Activities Preview

Display the organization's key programs or activities.

Use cards or another clean layout.

Each item should have:

* Title
* Short description
* Optional icon/image
* Optional link

Do not invent programs.

Use the organization's existing content.

## Impact Section

If the existing content contains legitimate impact statistics, highlight them visually.

Examples of possible metrics:

* People reached
* Communities served
* Projects completed
* Years of operation
* Regions reached

Do not fabricate numbers.

If actual statistics are unavailable, do not create fake ones.

## Community Story / Image Section

Use genuine imagery where available.

The design should communicate real people and real community activity.

Avoid excessive stock imagery.

## CTA

End the homepage with a strong CTA leading visitors toward:

* Contact
* Programs
* Getting involved

Use whichever action makes sense for the organization's actual purpose.

---

# ABOUT PAGE

Create a dedicated About page if the content justifies it.

Possible sections:

## Organization Story

Explain the organization's background.

## Mission

Clearly present the organization's mission.

## Vision

Clearly present the organization's vision.

## Values

Present important values using a clean visual system.

Use 3–6 values where applicable.

Avoid excessive decorative icons.

## Leadership / Team

If the existing content contains leadership/team information, present it professionally.

Do not fabricate people.

## Community Focus

Explain who the organization serves and why.

Use real content.

---

# PROGRAMS / WHAT WE DO PAGE

Create a clear overview of the organization's activities, services, programs, or areas of work.

Each program should have:

* Name
* Description
* Supporting imagery where available
* Optional CTA

Use a responsive grid or structured sections.

Do not create unnecessary filtering/search functionality.

This is an informational website.

---

# IMPACT PAGE

If the organization has sufficient impact information, create a dedicated Impact page.

This page should emphasize:

* Measurable outcomes
* Communities reached
* Projects completed
* Stories
* Statistics
* Geographic reach
* Testimonials if legitimate

Use visual storytelling.

Possible layout:

Large statistic
→ supporting explanation
→ image
→ story
→ another statistic
→ CTA

Do not fabricate statistics or testimonials.

If insufficient information exists, do not create an empty impact page.

---

# PROJECTS / NEWS / EVENTS PAGE

If the organization has enough content, create a page showcasing:

* Projects
* Community initiatives
* Events
* Announcements
* News

Use the content that actually exists in the project.

If the organization does not have enough recurring content for a news/events section, do not create an artificial blog system.

A simple project showcase is preferable.

Do not introduce:

* CMS
* Admin dashboard
* Authentication
* User-generated content
* Complex publishing systems

unless explicitly requested.

---

# CONTACT PAGE

Create a clean, professional contact page.

Recommended layout:

Desktop:
Two-column layout.

Left:

* Contact information
* Address/location
* Phone
* Email
* Office hours if available
* Social links if available

Right:
Contact form

Mobile:
Stack vertically.

---

# CONTACT FORM

The contact form must integrate with the existing backend endpoint.

Expected endpoint:

POST /api/contact

Expected payload:

{
name,
email,
subject,
message
}

The backend already handles:

* Zod validation
* Rate limiting
* Supabase persistence
* Resend email delivery

Do not duplicate these responsibilities in the frontend.

Remove any existing localStorage-based contact-form submission logic.

Remove any fake/mock submission logic.

Do not store contact messages in localStorage.

Do not expose private credentials.

---

# CONTACT FORM UX

Fields:

* Name
* Email
* Subject
* Message

Requirements:

* Proper labels
* Appropriate input types
* Required fields
* Client-side validation for immediate feedback
* Loading state
* Disabled submit button while submitting
* Success state
* Error state
* Network failure handling
* Clear validation messages
* Accessible form controls

Use the existing shadcn/ui components where appropriate.

After successful submission, provide clear confirmation to the user.

Prevent accidental duplicate submissions.

---

# API INTEGRATION

Use native `fetch` unless there is a strong reason to use another HTTP client.

Do not introduce axios simply for one POST request.

Example conceptual flow:

Contact Form
→ fetch("/api/contact", { method: "POST", ... })
→ API validates request
→ rate limit
→ save to Supabase
→ send email through Resend
→ frontend displays success/error

Do not expose:

* SUPABASE_SERVICE_ROLE_KEY
* RESEND_API_KEY
* Private environment variables
* Internal backend details

---

# DESIGN SYSTEM

Create an original visual system inspired by modern community organizations.

Recommended design direction:

**Warm Civic Modern**

Use:

* Strong typography
* Warm neutral backgrounds
* Deep primary color
* Subtle accent color
* Generous whitespace
* Large imagery
* Clear section hierarchy
* Restrained card usage
* Professional buttons
* Subtle borders
* Consistent spacing

Avoid excessive gradients.

Avoid excessive glassmorphism.

Avoid excessive shadows.

Avoid excessive rounded cards.

Avoid visual noise.

---

# COLOR DIRECTION

Start with a neutral foundation and deep green primary.

Suggested palette:

Primary:
#166534

Primary dark:
#14532D

Background:
#FAFAF7

Surface:
#FFFFFF

Foreground:
#17221B

Muted foreground:
#647067

Border:
#E5E7E2

Accent:
#D97706

These are starting points, not immutable requirements.

If the existing organization branding contains suitable colors, prioritize the organization's actual branding.

Use semantic theme tokens where possible.

Do not scatter arbitrary hex values throughout components.

---

# TYPOGRAPHY

Use a clean modern typographic hierarchy.

Preferred:

Headings:
Plus Jakarta Sans

Body:
Inter

If these fonts are already configured, use them.

If the project uses an existing appropriate font system, preserve it unless there is a compelling reason to change it.

Use:

* Strong hero typography
* Clear heading hierarchy
* Readable body text
* Comfortable line height
* Controlled paragraph width

Do not use more than two font families.

---

# NAVIGATION

Create a responsive navigation system.

Desktop:

* Logo/organization name
* Main navigation
* Clear contact/action link

Mobile:

* Compact header
* Accessible menu
* shadcn Sheet or equivalent existing component

Navigation must:

* Clearly show active page
* Support keyboard navigation
* Have visible focus states
* Work correctly on small screens
* Not create layout shifts

Do not overload the navigation with too many items.

---

# FOOTER

Create a polished footer containing:

* Organization name/logo
* Short description
* Navigation
* Contact information
* Social links if available
* Copyright

Keep it compact and professional.

---

# IMAGERY

Use existing project images where appropriate.

Prioritize genuine organizational/community imagery.

Images should:

* Have meaningful alt text
* Maintain consistent aspect ratios
* Be optimized
* Use Next.js Image where appropriate

Do not fabricate community photographs.

Do not use excessive decorative stock photography.

---

# CAROUSELS / SWIPER

A carousel may be used if it genuinely improves the design.

Preferred use:

* Community gallery
* Projects
* Community activities

Do not use multiple carousels throughout the site.

Do not use an auto-rotating hero carousel unless there is a strong reason.

If a carousel is used:

* Include navigation controls
* Support keyboard interaction
* Work on mobile
* Respect reduced-motion preferences
* Ensure content remains accessible

If a static image or grid communicates the information better, use the static/grid approach.

---

# SHADCN/UI

Use shadcn/ui where appropriate.

Potential components:

* Button
* Card
* Badge
* Separator
* Sheet
* Input
* Textarea
* Label
* Accordion
* Carousel

Do not use every available component.

Do not make the website look like a shadcn component showcase.

Customize components so they belong to the site's design system.

---

# ANIMATION

Use restrained animation.

Appropriate:

* Hover transitions
* Button transitions
* Subtle section entrances
* Mobile navigation transitions
* Image transitions

Avoid:

* Excessive parallax
* Constant motion
* Excessive bouncing
* Large entrance animations
* Auto-playing distracting content

Respect:

prefers-reduced-motion

The website must remain fully usable without animations.

---

# RESPONSIVENESS

The site must be carefully responsive.

Test:

* Small mobile
* Standard mobile
* Tablet
* Laptop
* Desktop
* Large desktop

Pay particular attention to:

* Hero typography
* Navigation
* Image sizing
* Grid layouts
* Card layouts
* Contact form
* Footer
* Horizontal overflow

There must be no horizontal scrolling caused by the implementation.

Do not simply shrink the desktop layout.

Adapt layouts appropriately for each breakpoint.

---

# ACCESSIBILITY

Follow accessible web development practices.

Requirements:

* Semantic HTML
* Correct heading hierarchy
* Proper form labels
* Keyboard navigation
* Visible focus states
* Accessible navigation
* Meaningful alt text
* Sufficient color contrast
* Appropriate ARIA only where necessary
* Buttons are buttons
* Links are links
* Avoid clickable divs

Do not sacrifice accessibility for aesthetics.

---

# SEO

Implement basic SEO.

Each page should have:

* Appropriate title
* Meta description
* Correct heading structure
* Meaningful URLs

Add Open Graph metadata where appropriate.

Use Next.js metadata APIs according to the project's version.

Do not fabricate organization claims for SEO.

---

# PERFORMANCE

Keep the website lightweight.

Prefer:

* Server Components where appropriate
* Client Components only where interactivity requires them
* Optimized images
* Minimal dependencies
* Native browser APIs where sufficient
* Minimal client-side JavaScript

Do not make every page a Client Component.

Do not introduce large libraries for small problems.

---

# CONTENT RULES

Use the content already supplied by the organization.

Do not invent:

* Statistics
* Testimonials
* Employees
* Addresses
* Phone numbers
* Programs
* Partnerships
* Awards
* Claims about impact

If content is missing, use a clearly identifiable placeholder rather than fictional information.

Structure the code so the client content can easily be replaced later.

---

# WHAT NOT TO BUILD

This is an informational community website.

Do NOT add:

* Authentication
* User accounts
* Member dashboards
* Payments
* Messaging
* Comments
* Likes
* Social feeds
* Admin dashboard
* CMS
* Complex search
* User profiles
* Notifications
* Community posting
* Unrequested analytics
* Unrequested third-party services

Do not turn a simple informational website into a SaaS application.

---

# FINAL REFINEMENT GOAL

The final website should feel like a professionally designed website created intentionally for a real community organization.

A visitor should NOT look at it and think:

"An AI website generator made this."

The goal is:

**human design decisions + clean engineering + authentic content + strong community storytelling.**

Use the Inuka Success Kenya website as inspiration for the feeling and information hierarchy, not as a template.

---

# FINAL TECHNICAL CHECKLIST

Before declaring the project complete:

* All intended pages work
* Navigation works
* Mobile navigation works
* Contact form works
* POST /api/contact integration works
* Validation works
* Loading state works
* Success state works
* Error state works
* Rate limiting remains server-side
* No secrets are exposed
* No localStorage contact submission remains
* No unnecessary axios dependency remains
* No fake API calls remain
* No console errors
* No TypeScript errors
* No unused imports
* No obvious dead code
* No horizontal overflow
* Mobile layout works
* Tablet layout works
* Desktop layout works
* Images are optimized
* Images have alt text
* SEO metadata exists
* Keyboard navigation works
* Focus states are visible
* Color contrast is reasonable
* Reduced-motion behavior is respected
* Existing organization content is preserved
* No fabricated claims remain
* No unnecessary dependencies have been introduced

## IMPORTANT IMPLEMENTATION PRINCIPLE

Do not rebuild everything simply for the sake of rebuilding it.

The existing website is already visually strong.

The objective is to:

**preserve what works → remove AI-generated slop → improve UX → improve visual consistency → integrate the real contact functionality → make the implementation production-ready.**

Be pragmatic.

If an existing component is already good, keep it.

If a generated implementation is unnecessarily complicated, simplify it.

If a design element looks impressive but harms usability, remove it.

The finished result should be polished, fast, accessible, maintainable, and appropriate for a real community organization.
