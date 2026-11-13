# Vortex Labs

The official Vortex Labs marketing and project-application platform.

**Brand direction:** Extraordinary technology. Effortless experiences. Meaningful lives.

## Stack

- Next.js App Router
- TypeScript / React
- Tailwind CSS
- Supabase (project application storage)
- Vercel (deployment)

## Local development

1. Install Node.js 20.9 or newer.
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and add the Supabase project URL and service-role key.
4. Run the database SQL in `supabase/schema.sql` in the Supabase SQL Editor.
5. Start the app: `npm run dev`

## Environment variables

- `SUPABASE_URL`: Supabase project URL.
- `SUPABASE_SERVICE_ROLE_KEY`: server-only Supabase service role key. Never use a `NEXT_PUBLIC_` prefix for this secret.

The project application form stores submissions in `public.project_applications`. The API validates input and uses the service role key only on the server. The table has RLS enabled and intentionally has no public policies.

## Vercel deployment

Import **grok369-nexus/vortexlab** into Vercel. Set the two environment variables above in the Vercel project settings, run the SQL schema in Supabase, then deploy from `main`.

## Project structure

```
src/
  app/
    api/applications/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    application-form.tsx
supabase/
  schema.sql
```

## Current scope

The public marketing site and project-application flow are the first release. A private application-management dashboard, email notifications, and expanded case studies should be added after the core deployment and database connection are verified.
