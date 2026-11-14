# Vortex Labs

**Extraordinary technology. Effortless experiences. Meaningful lives.**

Vortex Labs is an independent digital product and engineering studio. We explore meaningful problems, design clear and considered experiences, and engineer dependable digital products that make more possible.

This repository contains the Vortex Labs public website and project-application platform. It is the company's central brand and client-facing web presence, not the source code for every independent Vortex Labs product.

## Brand positioning

### Position

An independent product engineering studio creating useful digital products, platforms and experiences that simplify problems and improve everyday life.

### Promise

We turn meaningful problems into thoughtfully designed, dependable technology.

### Differentiator

We connect problem understanding, product design and disciplined engineering, with a long-term view of how products are maintained and improved.

### Working principles

- Understand the problem before choosing a technical solution.
- Design around the people who will use the product.
- Remove unnecessary complexity and respect people's time and devices.
- Build for real-world reliability, accessibility, security and maintainability.
- Be honest about product status, evidence and results.
- Keep learning and improving after launch.

### Brand personality

Intelligent, imaginative, precise, ambitious and human. Confident without inflated claims; futuristic without sacrificing clarity.

## What this platform does

- Presents the Vortex Labs brand, philosophy and capabilities.
- Explains the product engineering approach: Discover, Shape, Engineer and Evolve.
- Showcases selected projects with clear development-status labels.
- Explains the problems and industries our products explore.
- Collects project enquiries through a validated application form.
- Stores project applications securely through a server-side Supabase integration.

## Technology stack

| Layer | Technology |
| --- | --- |
| Web framework | Next.js 15 App Router |
| UI | React 19 |
| Language | TypeScript |
| Styling | CSS and Tailwind CSS configuration |
| Forms/API | Next.js Route Handlers |
| Data storage | Supabase PostgreSQL |
| Hosting | Vercel |
| Source control | GitHub |

## Repository structure

```
.
├── public/
│   └── vortex-mark.svg          # Vortex Labs brand mark
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── applications/
│   │   │       └── route.ts    # Project application API
│   │   ├── globals.css         # Global design system and responsive styling
│   │   ├── layout.tsx          # Root layout, metadata and viewport
│   │   └── page.tsx            # Main marketing homepage
│   └── components/
│       └── application-form.tsx # Client-side project enquiry form
├── supabase/
│   └── schema.sql              # Database table and security policies
├── .env.example                # Required environment variable names
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### Main application areas

- `src/app/page.tsx`: Homepage content, navigation, hero, philosophy, industry stories, services, project showcase, engineering process, trust messaging and enquiry section.
- `src/app/globals.css`: Visual identity, cinematic hero, glass-inspired surfaces, typography, layouts, responsive rules, focus states and reduced-motion support.
- `src/components/application-form.tsx`: Enquiry form UI and submission feedback.
- `src/app/api/applications/route.ts`: Server-side validation and secure database insertion.
- `supabase/schema.sql`: Creates the project application storage table and enables row-level security.
- `public/vortex-mark.svg`: Scalable Vortex Labs X mark, a vector interpretation of the supplied sculptural silver-and-crimson reference artwork.

## Visual identity

The current direction is **Cinematic Product Intelligence**:

- Near-black backgrounds and controlled silver/crimson brand highlights.
- A sculptural crossed X mark as the primary symbol.
- Large editorial typography and restrained interface labels.
- Layered, glass-inspired panels used where they improve hierarchy.
- Cinematic photography and project imagery.
- Purposeful transitions, responsive composition and accessible contrast.
- Product-specific imagery can vary while the parent Vortex Labs identity remains consistent.

The SVG mark is a lightweight vector interpretation inspired by the supplied reference image. It is not a pixel-identical copy of the original JPG artwork.

## Local development

### Requirements

- Node.js 20.9 or newer.
- npm.
- A Supabase project for storing project applications.

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only service-role key used by the API |

Never expose the service-role key in browser code or use a `NEXT_PUBLIC_` prefix for it.

### Database setup

1. Open the Supabase SQL Editor.
2. Run `supabase/schema.sql`.
3. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to the local environment.
4. Restart the development server.
5. Submit a test project enquiry and verify the row in `public.project_applications`.

The table has row-level security enabled and no public insert policy. The API uses the server-side service-role key after validating the request.

## Deployment

The production site is connected to the Vercel project `vortex-labs-site` and the GitHub repository `grok369-nexus/vortexlab`.

1. Import this repository into Vercel if it is not already connected.
2. Set the two Supabase environment variables in Vercel.
3. Run the database schema in Supabase.
4. Deploy the `main` branch.
5. Verify the homepage and submit a test application.

## Current scope and known gaps

- The marketing homepage and project enquiry flow are implemented.
- The selected projects shown on the homepage are presented with their current development status; they should not be mistaken for claims that every product is publicly launched.
- Project-card photographs are illustrative external images, not verified screenshots of the products. Replace them with original product captures or properly licensed assets as they become available.
- The Vortex X mark is currently a vector interpretation of the supplied logo reference. The original JPG can be substituted as the exact source asset if an exact photographic logo is preferred.
- A private application-management dashboard and automated email notifications are not included yet.
- Production form storage depends on correct Supabase schema and Vercel environment configuration.
- A successful local production build and end-to-end form test should be completed before treating a release as fully verified.

## Product and engineering roadmap

1. Verify production deployment, environment variables and database writes.
2. Add a secure private workflow for reviewing project applications.
3. Add case-study pages with real product screenshots, decisions and verified outcomes.
4. Add an Inside the Lab area for prototypes and technical experiments.
5. Publish engineering standards covering performance, accessibility, security and maintainability.
6. Add client feedback and measurable results only when they are real and approved for publication.

## Repository boundary

This repository is the Vortex Labs corporate website and enquiry platform. Product repositories such as Homza, DwellSpot and UACE Virtual Lab remain separate. Do not merge their application code into this repository merely to showcase them; link to their product pages or present accurate case studies instead.
