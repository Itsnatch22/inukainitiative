# Inuka 034 Initiative

The Inuka 034 Initiative website is an informational site for a community-based organization focused on practical support, shared learning, local connection, and meaningful participation.

The site presents the initiative's mission, programs, hands-on projects, ways to get involved, and contact information in a warm, accessible visual system. The provided garden photos and videos are used throughout the site to show real community activity rather than relying on stock or placeholder imagery.

## Website pages

- **Home** (`/`) - Introduction to the initiative, community media gallery, programs preview, FAQ, and calls to action.
- **About** (`/about`) - Mission, vision, values, background, and community focus.
- **Our work** (`/our-work`) - A closer look at the practical project work, including the vertical garden initiative.
- **Programs** (`/programs`) - Community learning, volunteer support, family activities, and community conversations.
- **Get involved** (`/get-involved`) - Ways to volunteer, partner, share ideas, or start a conversation.
- **Contact** (`/contact`) - Contact details and the message form.

## Main features

- Responsive navigation with desktop and mobile layouts.
- Optimized local imagery using Next.js `Image`.
- Swiper-powered community photo and video gallery.
- Restrained GSAP entrance animation for the media section.
- Accessible FAQ accordion.
- Responsive contact form with client-side validation and clear loading, success, and error states.
- Server-side request validation with Zod.
- Optional IP-based rate limiting through Upstash Redis.
- Direct email delivery through Resend.
- React Email confirmation sent to the person who submits the contact form.
- SEO metadata for the main pages.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Base UI accordion and form components
- Swiper
- GSAP
- Resend
- React Email
- Zod

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Available scripts:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment variables

Create a `.env.local` file with the values needed for the contact route:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL_FROM=info@inukainitiative.org
CONTACT_EMAIL_TO=info@inukainitiative.org
```

The optional Upstash variables enable server-side rate limiting:

```env
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

`CONTACT_EMAIL_FROM` must be an address or domain accepted by Resend for the sending account. In production, use a verified domain rather than relying on an unverified personal address.

## Contact form flow

The contact form submits the following payload to `POST /api/contact`:

```json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "subject": "Message subject",
  "message": "Message content"
}
```

The route:

1. Validates the request with Zod.
2. Applies the configured rate limit when Upstash credentials are available.
3. Sends the message to the configured team email through Resend.
4. Sends a confirmation email to the visitor using `emails/ContactConfirmation.tsx`.

Contact messages are not stored in Supabase or `localStorage`.

## Project structure

```text
app/
  about/
  api/contact/
  contact/
  get-involved/
  our-work/
  programs/
  page.tsx
components/
  community-media.tsx
  contact-form.tsx
  site-footer.tsx
  site-header.tsx
  ui/
emails/
  ContactConfirmation.tsx
lib/
  rate-limit.ts
public/
  media/
```

## Media

Community photos and videos are stored in `public/media/` and referenced with public paths such as:

```text
/media/WhatsApp Image 2026-09-05 at 22.43.10.jpeg
```

When adding new assets, provide meaningful alt text for images and accessible labels for videos.

## Design direction

The interface follows a warm civic-modern direction:

- Deep green primary color
- Warm neutral backgrounds
- Strong typography using Inter and Plus Jakarta Sans
- Generous spacing and restrained borders
- Real project imagery
- Minimal, purposeful animation
- Mobile-first responsive layouts

The site is intentionally an informational community website rather than a dashboard, CMS, social network, or member portal.
