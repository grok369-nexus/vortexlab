# Vortex Labs

The official Vortex Labs marketing and client-acquisition website.

## Stack

- Next.js 15 App Router
- React 19 + TypeScript
- Tailwind CSS 4 (PostCSS)
- Supabase for project enquiry storage
- Vercel deployment

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Project enquiry backend

1. Create a dedicated Supabase project for the Vortex Labs website.
2. Run `supabase/schema.sql` in the Supabase SQL Editor.
3. Add these environment variables to Vercel and local development:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Never expose the service-role key in client-side code or commit it to Git.

Until those environment variables and the database table are configured, the enquiry API intentionally returns a setup message instead of pretending to accept applications.

## Main routes

- `/` — company homepage
- `/work` — selected projects
- `/services` — services
- `/about` — company philosophy
- `/start-project` — client project application
- `/privacy` — enquiry privacy notice

## Before public launch

- Confirm the official domain and business contact details.
- Configure Supabase and test a real project enquiry end to end.
- Review the privacy notice against the actual data-retention process.
- Add verified case studies, project screenshots, and client testimonials only when available.
- Run a production build and test the website on mobile.
