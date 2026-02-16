# Katherine Newman — The Digital Boardroom 1

A premium executive portfolio website built for **Katherine Newman**, CEO & Founder of SILOETT.AI. This isn't a traditional portfolio — it's a **Digital Boardroom**: an investor-grade experience designed to attract investors, co-founders, and strategic partners.

**Live site:** *(Cloudflare Pages URL will go here after first deploy)*

---

## Table of Contents

- [What Is the Digital Boardroom?](#what-is-the-digital-boardroom)
- [Why We Built It This Way](#why-we-built-it-this-way)
- [Tech Stack — What We Used and Why](#tech-stack--what-we-used-and-why)
- [Design System — The Boardroom Look](#design-system--the-boardroom-look)
- [Project Structure](#project-structure)
- [The 7 Sections — What Each One Does](#the-7-sections--what-each-one-does)
- [Key Features](#key-features)
- [How to Run Locally](#how-to-run-locally)
- [How to Deploy](#how-to-deploy)
- [How to Edit Content](#how-to-edit-content)
- [What's Next (V2 Roadmap)](#whats-next-v2-roadmap)

---

## What Is the Digital Boardroom?

A normal portfolio says *"Here's what I've done."* The Digital Boardroom says *"Here's where I'm taking you."*

Katherine isn't looking for a job — she's raising capital, recruiting a founding team, and establishing authority to lead a category-defining company. Every element of this website is designed to pass one test:

> **"Does this make a sophisticated investor or potential co-founder lean forward?"**

The site follows the structure of an exceptional investor pitch, not a resume:

| Act | Section | Purpose |
|-----|---------|---------|
| **I: Conviction** | Hero + Credential Ribbon | "This founder is building something inevitable" |
| **II: Evidence** | Track Record + Ventures | "She has the track record to execute" |
| **III: Vision** | Thesis + Journey + Domains | "The opportunity is massive and time-sensitive" |
| **IV: Invitation** | Contact Section | "You should be part of this" |

### How is this different from a normal portfolio?

| Aspect | Normal Portfolio | Digital Boardroom |
|--------|-----------------|-------------------|
| **Structure** | "Here's my work" (showcase) | "Here's where I'm taking you" (pitch narrative) |
| **Buttons** | "Contact me" (passive) | "Request the Deck" / "Book a Conversation" (investor language) |
| **Contact form** | Name + message | Captures **visitor type** (investor / co-founder / advisor) — that's lead qualification |
| **Metrics** | Skill bars or project screenshots | Animated counters with **strategic context on hover** |
| **Case studies** | "What I built" | Challenge > Insight > Action > Outcome (shows founder judgment) |
| **Timeline** | Linear job history | Three-act narrative that makes SILOETT feel *inevitable* |

---

## Why We Built It This Way

### The Requirements

Katherine's PRD (Product Requirements Document) defined clear goals:

1. **Attract investors** — Drive qualified investor inquiries
2. **Recruit co-founders** — Attract world-class technical talent
3. **Build authority** — Position Katherine as the voice on AI + IP convergence
4. **Convert visitors** — Turn browsers into booked calls and deck requests

### The Decision: Digital Boardroom over Traditional Portfolio

We started with two PRD versions:
- **v1** (`KATHERINE_NEWMAN_PORTFOLIO_PRD.md`) — A traditional portfolio approach
- **v2** (`KATHERINE_NEWMAN_DIGITAL_BOARDROOM_PRD_v2.md`) — The refined "Digital Boardroom" approach

We went with v2 because Katherine isn't demonstrating competence — she's **closing a room**. Investors scan a founder's site in under 90 seconds and evaluate four things:

1. **Founder-Market Fit** — Does she have an unfair advantage?
2. **Execution Evidence** — Has she shipped hard things at scale?
3. **Vision Clarity** — Is the opportunity big enough?
4. **Signal Quality** — Do external validators confirm what I'm seeing?

The Digital Boardroom answers all four within the first viewport and deepens conviction with every scroll.

---

## Tech Stack — What We Used and Why

### Core Framework

| Technology | Version | What It Is | Why We Chose It |
|-----------|---------|-----------|-----------------|
| **Next.js** | 16.1.6 | A React framework for building websites | The industry standard for professional websites. It pre-renders pages for fast loading and great search engine visibility (SEO). Investors Googling Katherine's name need to find this site. |
| **React** | 19.2.3 | A library for building user interfaces | The foundation that Next.js is built on. React lets us create interactive components (like the expanding timeline and animated counters) that feel smooth and responsive. |
| **TypeScript** | 5.7.3 | A typed version of JavaScript | Catches errors before they reach the live site. When a broken link or missing text could cost an investor interaction, type safety matters. |

### Styling & Design

| Technology | Version | What It Is | Why We Chose It |
|-----------|---------|-----------|-----------------|
| **Tailwind CSS** | 3.4.17 | A utility-based styling system | Lets us build the boardroom aesthetic rapidly without writing separate CSS files. Every color, spacing, and font size is defined in a consistent design system. |
| **shadcn/ui** | (59 components) | Pre-built, accessible UI components | Professional-grade buttons, dialogs, forms, cards, and more — all built on Radix UI primitives. These components handle keyboard navigation, screen readers, and edge cases that would take weeks to build from scratch. |
| **Framer Motion** | 12.34.0 | Animation library for React | Powers the subtle scroll-triggered animations, animated metric counters, and hover effects. The goal is "refined, not flashy" — like a Bloomberg terminal, not a Dribbble shot. |
| **Lucide React** | 0.544.0 | Icon library | Clean, consistent icons for LinkedIn, mail, calendar, file, map pin, etc. |

### Fonts

| Font | Usage | Why |
|------|-------|-----|
| **Inter** | Headlines, body text, navigation | Clean, professional, highly readable. Designed specifically for screens. Used by companies like GitHub, Linear, and Vercel. |
| **JetBrains Mono** | Numbers, metrics, years | A monospaced font that conveys precision and data-driven thinking. When you see "£20M+" in JetBrains Mono, it feels like a financial report, not a blog post. |

### Forms & Validation

| Technology | Version | What It Is | Why We Chose It |
|-----------|---------|-----------|-----------------|
| **React Hook Form** | 7.54.1 | Form state management | Makes forms fast and reliable. Handles validation without slowing down the page. |
| **Zod** | 3.24.1 | Data validation | Ensures the contact form and deck request form receive properly formatted data (valid email, required fields). |
| **Sonner** | 1.7.1 | Toast notifications | Shows elegant confirmation messages when someone submits a form ("Deck request received — we'll send it to your email"). |

### Deployment & Infrastructure

| Technology | Version | What It Is | Why We Chose It |
|-----------|---------|-----------|-----------------|
| **Cloudflare Pages** | — | Website hosting platform | Free, extremely fast global CDN (Content Delivery Network), unlimited bandwidth. The site loads quickly whether the visitor is in Paris, London, or San Francisco. |
| **Wrangler** | 4.64.0 | Cloudflare's command-line tool | Deploys the site to Cloudflare Pages with a single command. |
| **Static Export** | — | Build strategy | The site is exported as pure HTML/CSS/JS files at build time. No server needed at runtime. This means zero hosting costs, maximum speed, and the site works even under heavy traffic. |

### Package Manager

| Technology | What It Is | Why We Chose It |
|-----------|-----------|-----------------|
| **pnpm** | Package manager | Faster and more disk-efficient than npm. Manages all the project's dependencies. |

---

## Design System — The Boardroom Look

### The Philosophy

The visual language evokes a **private equity boardroom**: clean, authoritative, understated luxury. Think Blackstone's annual report meets a premium editorial magazine. Every design choice communicates: *"This is a serious person building a serious company."*

**What we avoid:**
- No startup cliches (rocket ships, lightbulbs, neon gradients)
- No tech-bro aesthetics (dark mode with green text)
- No excessive animation (this isn't a creative agency portfolio)
- No stock photography (everything feels curated and intentional)
- No skill bars or percentage indicators

### Color Palette

| Color | Hex Code | CSS Variable | Purpose |
|-------|----------|-------------|---------|
| **Deep Navy** | `#0F172A` | `--primary` | Authority, trust, executive presence. The hero background and contact section. |
| **Muted Gold** | `#C8A24E` | `--secondary` | Refined success, heritage. Used for credential badges, CTA buttons, and accent labels. Not bright amber (that reads "tech startup") — muted gold reads "established authority." |
| **Electric Blue** | `#3B82F6` | `--accent` | Forward-thinking, technology, AI. Focus rings, timeline current indicator, subtle accents. |
| **Off-White** | `#F8FAFC` | `--background` | Clean, premium, generous whitespace. The default page background. |
| **Charcoal** | `#1E293B` | `--foreground` | Crisp readability. All body text. |
| **Slate** | `#64748B` | `--muted-foreground` | Secondary text, captions, supporting information. |

### Animation Guidelines

Every animation serves one purpose: draw attention to content as it enters the viewport. Nothing decorative.

| Element | Animation | Duration | Feeling |
|---------|-----------|----------|---------|
| Section entrance | Fade up from below | 600ms | Content gracefully arriving |
| Metric counters | Count up from zero | 1200ms | Numbers building to their impressive final value |
| Card hover | Slight lift + shadow | 200ms | Subtle interactivity feedback |
| Timeline expand | Smooth height reveal | 400ms | Content unfolding naturally |
| Hero stagger | Elements appear in sequence | 150ms apart | Orchestrated, not chaotic |

---

## Project Structure

```
Katie's Portfolio/
│
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Root layout (fonts, metadata, theme)
│   ├── page.tsx                    # Home page — composes all 7 sections
│   └── globals.css                 # Design system CSS variables
│
├── components/
│   ├── navigation/
│   │   └── navbar.tsx              # Sticky nav with smooth scroll + mobile menu
│   │
│   ├── sections/                   # The 7 Digital Boardroom sections
│   │   ├── hero.tsx                # 1. Opening Statement
│   │   ├── thesis.tsx              # 2. The Thesis (Problem/Insight/Solution)
│   │   ├── track-record.tsx        # 3. Impact Metrics
│   │   ├── ventures.tsx            # 4. Strategic Ventures (3 case studies)
│   │   ├── journey.tsx             # 5. Career Timeline (3 acts)
│   │   ├── domains.tsx             # 6. Strategic Domains (5 leadership areas)
│   │   └── invitation.tsx          # 7. The Invitation (contact/CTAs)
│   │
│   ├── shared/                     # Reusable building blocks
│   │   ├── section-wrapper.tsx     # Consistent section padding + scroll animation
│   │   ├── gradient-background.tsx # Animated hero background
│   │   ├── credential-ribbon.tsx   # Horizontal credential badges
│   │   ├── animated-counter.tsx    # Count-up number animation
│   │   ├── metric-card.tsx         # Impact metric with hover context
│   │   ├── venture-card.tsx        # Case study card (CIAO pattern)
│   │   ├── timeline-entry.tsx      # Expandable timeline item
│   │   ├── domain-card.tsx         # Leadership domain with reveal
│   │   ├── contact-form.tsx        # Message form with validation
│   │   └── deck-request-form.tsx   # Investor deck request (lead capture)
│   │
│   ├── ui/                         # 59 shadcn/ui components (pre-built)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── badge.tsx
│   │   ├── sheet.tsx               # (mobile nav slide-out)
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── ... (54 more)
│   │
│   └── theme-provider.tsx          # Light/dark theme support
│
├── lib/                            # Shared utilities and data
│   ├── data.ts                     # ALL website content (text, metrics, timeline)
│   ├── animations.ts               # Framer Motion animation presets
│   └── utils.ts                    # Tailwind class merging utility
│
├── hooks/                          # Custom React hooks
│   ├── use-counter.ts              # Animated number counting
│   ├── use-mobile.tsx              # Mobile breakpoint detection
│   └── use-toast.ts                # Toast notification system
│
├── public/                         # Static assets (images, SVGs)
│   ├── placeholder.svg
│   └── placeholder-logo.svg
│
├── out/                            # Static build output (for deployment)
│
├── next.config.mjs                 # Next.js configuration (static export)
├── tailwind.config.ts              # Design system (colors, fonts, spacing)
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.mjs              # CSS processing
├── components.json                 # shadcn/ui configuration
├── package.json                    # Dependencies and scripts
│
├── KATHERINE_NEWMAN_PORTFOLIO_PRD.md              # Original PRD (v1)
└── KATHERINE_NEWMAN_DIGITAL_BOARDROOM_PRD_v2.md   # Final PRD (v2) — what we built
```

### How the pieces connect

```
page.tsx
  └── Renders in order:
      ├── <Navbar />          ← Sticky navigation (uses navigationLinks from data.ts)
      ├── <Hero />            ← Uses heroData, credentials from data.ts
      ├── <Thesis />          ← Uses thesisData from data.ts
      ├── <TrackRecord />     ← Uses metrics[] from data.ts
      ├── <Ventures />        ← Uses ventures[] from data.ts
      ├── <Journey />         ← Uses timelineActs[] from data.ts
      ├── <Domains />         ← Uses domains[] from data.ts
      └── <Invitation />      ← Uses contactData from data.ts
```

**The key insight:** All content lives in `lib/data.ts`. The section components are just *how it looks*. The data file is *what it says*. This separation means Katherine (or anyone) can update the text, metrics, timeline, or case studies without touching the visual code.

---

## The 7 Sections — What Each One Does

### 1. Hero — The Opening Statement

**File:** `components/sections/hero.tsx`

The first thing visitors see. Full-screen navy gradient with:
- **Headline:** "The Age of AI Demands a New Operating System for Intellectual Property"
- **Subtitle:** Katherine's name and title
- **Credential ribbon:** Station F | International Emmy | BAFTA | Oxford AI | £20M+ Projects
- **Two CTA buttons:** "Request the Deck" (opens email capture form) and "Book a Conversation"
- **LinkedIn icon**
- **Scroll indicator** at the bottom

**Why it works:** Investors pattern-match on signals. The credential ribbon provides instant social proof without requiring scroll. The headline is a thesis statement, not a bio — it positions Katherine as someone with a point of view about the future.

### 2. The Thesis — Why This, Why Now, Why Katherine

**File:** `components/sections/thesis.tsx`

A three-panel "triptych" layout:
- **The Problem:** IP management is broken and running on spreadsheets
- **The Insight:** Katherine spent 20+ years inside the creative industries experiencing this firsthand
- **The Solution:** SILOETT.AI — an AI-native operating system for IP rights

Below the three panels: a **Founder-Market Fit** statement explaining why Katherine's unique background makes her the right person to build this.

### 3. The Track Record — Proof Points

**File:** `components/sections/track-record.tsx`

Seven metric cards in a responsive grid, each with:
- A large animated number (counts up from zero when you scroll to it)
- A label
- Context that appears on hover (explaining the strategic significance)

The metrics: £20M+ Projects Led | 50+ Countries | 10M+ Viewers | International Emmy | Emmy Award | BAFTA Nomination | Station F

### 4. Strategic Ventures — Case Studies

**File:** `components/sections/ventures.tsx`

Three project cards, each framed as a strategic decision (not just "things she worked on"):

1. **SILOETT.AI** (current) — Building the AI-native OS for IP
2. **Primeval IP Acquisition** — Acquiring and monetising a global franchise
3. **Makutano Junction** — Scaling social impact across East Africa

Each follows the pattern: **Challenge > Insight > Action > Outcome**

### 5. The Journey — Career Timeline

**File:** `components/sections/journey.tsx`

An interactive vertical timeline split into three acts:
- **Act I: The Foundation (1992–2006)** — Building creative instincts
- **Act II: The Proving Ground (2007–2017)** — Executing at scale (Emmy wins, £20M+ projects)
- **Act III: The Founder Era (2018–Present)** — IP acquisition, AI education, SILOETT launch

Each entry can be clicked to expand and reveal the strategic significance of that career chapter. The current role (SILOETT.AI) has a glowing blue dot to indicate it's active.

### 6. Strategic Domains — Leadership Expertise

**File:** `components/sections/domains.tsx`

Five leadership domain cards (not skill bars — these are areas of strategic authority):
1. IP Rights & Licensing
2. AI & Machine Learning
3. Creative Production at Scale
4. International Markets & Distribution
5. Startup Leadership & Company Building

Click any card to reveal evidence bullets and relevance to SILOETT.

### 7. The Invitation — Contact & CTAs

**File:** `components/sections/invitation.tsx`

Navy background for visual contrast. This isn't a contact form — it's an **exclusive invitation to participate in something significant.**

- **Opening line:** "Katherine is selectively building the founding team and investor syndicate..."
- **Currently seeking badges:** Investors | Technical Co-founder | Advisors | Partners
- **Four action buttons:**
  - Book a Conversation (placeholder — needs Katherine's calendar link)
  - Request the Deck (opens email capture form)
  - Connect on LinkedIn (links to Katherine's profile)
  - Send a Message (opens contact form dialog)

---

## Key Features

### Deck Request Form (Lead Capture)

When someone clicks "Request the Deck" — in the hero, the navbar, or the invitation section — a dialog opens asking for:
- **Name**
- **Email**
- **Role** (Investor / Co-founder / Advisor / Partner / Other)

This captures leads for Katherine's investor pipeline. Currently shows a success toast on submit. A backend email service can be connected later.

**Files:** `components/shared/deck-request-form.tsx`, wired into `hero.tsx`, `navbar.tsx`, and `invitation.tsx`

### Smooth Scroll Navigation

The sticky navbar tracks which section is currently visible and highlights the corresponding link. Clicking any link smoothly scrolls to that section. On mobile, the nav collapses into a hamburger menu that slides out from the right.

**File:** `components/navigation/navbar.tsx`

### Animated Metric Counters

The numbers in the Track Record section (£20M+, 50+, 10M+) count up from zero when they scroll into view. This draws the eye and creates a sense of the numbers building to their impressive final values.

**Files:** `components/shared/animated-counter.tsx`, `hooks/use-counter.ts`

### Scroll-Triggered Section Animations

Every section fades up gracefully as you scroll to it. This is handled by the `SectionWrapper` component using Framer Motion's `whileInView`. The animations respect the user's "reduce motion" accessibility setting.

**File:** `components/shared/section-wrapper.tsx`

### Contact Form with Validation

The "Send a Message" button opens a validated form with name, email, role selection, and a message field. All fields are required and the email must be properly formatted.

**File:** `components/shared/contact-form.tsx`

---

## How to Run Locally

### Prerequisites

- **Node.js** 18+ installed ([download here](https://nodejs.org/))
- **pnpm** installed (`npm install -g pnpm`)

### Steps

```bash
# 1. Navigate to the project
cd "Katie's Portfolio"

# 2. Install all dependencies
pnpm install

# 3. Start the development server
pnpm dev

# 4. Open in your browser
# The terminal will show a URL like: http://localhost:3000
```

The dev server uses **Turbopack** for fast compilation. Changes you make to any file will appear in the browser almost instantly.

### Available Scripts

| Command | What It Does |
|---------|-------------|
| `pnpm dev` | Starts the development server (with hot reload) |
| `pnpm build` | Creates a production build (static files in `out/` folder) |
| `pnpm start` | Runs the production build locally |
| `pnpm lint` | Checks code for common issues |
| `pnpm deploy` | Deploys the `out/` folder to Cloudflare Pages |

---

## How to Deploy

### Cloudflare Pages (Current Setup)

The site is configured for **static export** — meaning `pnpm build` generates a folder of pure HTML, CSS, and JavaScript files that can be hosted anywhere without a server.

#### First-Time Setup

```bash
# 1. Build the static site
pnpm build

# 2. Deploy to Cloudflare Pages
pnpm deploy
```

On the first run, Wrangler will:
1. Ask you to log in to your Cloudflare account (opens a browser window)
2. Ask you to name the project (e.g., `katherine-newman-portfolio`)
3. Upload the files and give you a URL like `https://katherine-newman-portfolio.pages.dev`

#### Subsequent Deploys

```bash
pnpm build && pnpm deploy
```

That's it. Two commands. The new version goes live in seconds.

#### Custom Domain

After the first deploy, you can add a custom domain (like `katherinenewman.com`) through the Cloudflare Pages dashboard. Cloudflare provides free SSL certificates automatically.

### Alternative: Vercel

If you prefer Vercel:
1. Remove `output: 'export'` from `next.config.mjs`
2. Push the code to a GitHub repository
3. Import the repository at [vercel.com](https://vercel.com)
4. Vercel auto-deploys on every push

---

## How to Edit Content

### All text lives in one file: `lib/data.ts`

This is the single source of truth for everything the website says. You don't need to touch any other file to update content.

### Updating the Hero

```typescript
// lib/data.ts — look for heroData
export const heroData = {
  headline: 'The Age of AI Demands a New Operating System for Intellectual Property',
  subtitle: 'Katherine Newman — CEO/Founder, SILOETT.AI',
  ctaPrimary: 'Request the Deck',
  ctaSecondary: 'Book a Conversation',
  linkedIn: 'https://www.linkedin.com/in/katherine-newman-450bb9338/',
}
```

Change any text between the quotes and the site updates.

### Updating Credentials

```typescript
export const credentials = [
  'Station F, Paris',
  'International Emmy Award',
  'BAFTA Nominated',
  'Oxford AI Governance',
  '£20M+ Projects Led',
]
```

Add, remove, or edit items in the list.

### Updating Metrics

```typescript
export const metrics: Metric[] = [
  {
    value: '£20M+',           // Display text
    numericValue: 20,          // Number for the counter animation
    prefix: '£',               // Before the number
    suffix: 'M+',             // After the number
    label: 'Projects Led',     // Below the number
    context: 'She\'s managed significant budgets...', // Hover text
  },
  // ... more metrics
]
```

### Adding a Timeline Entry

Find the relevant act in `timelineActs` and add an entry:

```typescript
{
  year: '2026',
  title: 'New Milestone',
  organization: 'SILOETT.AI',
  location: 'Paris, France',
  description: 'What happened.',
  significance: 'Why it matters to the SILOETT story.',
  isCurrent: true,  // Set to true for the current role
}
```

### Adding a Calendar Link

When Katherine has a Cal.com or Calendly link, update the "Book a Conversation" button in `components/sections/invitation.tsx`:

```typescript
// Change this:
<a href="#" onClick={(e) => e.preventDefault()}>

// To this:
<a href="https://cal.com/katherine-newman" target="_blank" rel="noopener noreferrer">
```

---

## What's Next (V2 Roadmap)

Features documented in the PRD but not yet built:

| Feature | Description | Priority |
|---------|-------------|----------|
| **AI Concierge** | "Ask about Katherine and SILOETT" — conversational AI assistant on the site | High |
| **Dark Mode** | Toggle between light and dark boardroom aesthetics | Medium |
| **Thought Leadership Blog** | Blog/insights section on AI + IP convergence | Medium |
| **Video Introduction** | 60-second "The SILOETT Vision" video embed | Medium |
| **Social Proof** | Testimonials from collaborators and industry peers | Medium |
| **Gated Deck Download** | Email capture before PDF download (with actual email delivery) | Medium |
| **Press Kit** | Media assets, bio variations, headshots for press | Low |
| **Multi-Language** | English / French toggle (Katherine is based in Paris) | Low |
| **Analytics Dashboard** | Private admin view of visitor engagement and CTA performance | Low |
| **Form Backend** | Connect forms to an email service (Formspree, Resend, or similar) | High |

---

## Built With

- **Next.js 16** with static export for maximum performance
- **React 19**, **TypeScript 5**, **Tailwind CSS**
- **shadcn/ui** — 59 accessible, pre-built components
- **Framer Motion** for restrained, content-serving animations
- Deployed on **Cloudflare Pages** (free unlimited bandwidth, global CDN)

**Key design decisions:**
- Static export over SSR — no dynamic data, so pure static is faster, cheaper, and more reliable
- Muted gold (#C8A24E) over bright amber (#F59E0B) — bright amber reads "tech startup," muted gold reads "established authority"
- All content in a single data file (`lib/data.ts`) for easy editing without touching visual code
- Restrained animations (Bloomberg terminal, not Dribbble) — every animation serves content, nothing is decorative
