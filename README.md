# Divya Goswami — Personal Portfolio Website

> **Production-ready personal portfolio website for Divya Goswami**  
> Aspiring AI Engineer · Innovator · Entrepreneur  
> Currently pursuing Computer Science & Artificial Intelligence · Delhi NCR, India

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + modern dark/light system
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/) (with reduced motion support)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (default dark theme: `#0a0a0f` with violet→cyan accent gradient)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact API**: [Resend](https://resend.com/) email delivery with automatic mailto fallback
- **Interactive Canvas**: Zero-dependency lightweight HTML5 particle network
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

All user-facing editable content lives in the `/data` directory so you can update text, projects, skills, and links without touching component code:

```
├── app/
│   ├── api/contact/route.ts  # Contact form endpoint (Resend + mailto fallback)
│   ├── globals.css           # Styling, themes (#0a0a0f dark), custom scrollbars
│   ├── layout.tsx            # Metadata, OpenGraph, Inter + Space Grotesk fonts
│   ├── page.tsx              # Single-page layout with scroll reveals
│   ├── robots.ts             # Dynamic robots.txt
│   └── sitemap.ts            # Dynamic sitemap.xml
├── components/
│   ├── about.tsx             # About section with 4 value cards & quick stats
│   ├── contact.tsx           # Contact form & direct email/social links
│   ├── experience.tsx        # Education & technical journey timeline
│   ├── footer.tsx            # Copyright, social icons & back-to-top button
│   ├── hero.tsx              # Big title, animated typewriter & CTAs
│   ├── motion-section.tsx    # Reusable Framer Motion scroll-reveal component
│   ├── navbar.tsx            # Sticky blur nav, scroll spy, mobile drawer
│   ├── particles-background.tsx # Lightweight 60fps canvas particle field
│   ├── projects.tsx          # Categorized project showcase with live/code links
│   ├── skills.tsx            # Grouped technical skill chips by domain
│   ├── theme-provider.tsx    # next-themes context wrapper
│   └── theme-toggle.tsx      # Sun/moon mode toggle with micro-animations
├── data/
│   ├── experience.ts         # Education, leadership, technical roles
│   ├── profile.ts            # Bio, name, tagline, links, values, stats
│   ├── projects.ts           # Portfolio projects with tags & highlights
│   └── skills.ts             # Skill categories & proficiency chips
├── public/
│   ├── divya.jpg             # Profile avatar (replace with your photo)
│   ├── icon.svg              # DG monogram SVG icon & favicon
│   ├── og.png                # 1200x630 OpenGraph social share image
│   └── resume.pdf            # Resume download file (replace with your PDF)
└── .env.example              # Environment variables template
```

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
pnpm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Start local development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✉️ Contact Form Configuration

To receive contact form submissions directly in your inbox:
1. Create a free account at [Resend](https://resend.com)
2. Generate an API Key
3. Add it to `.env.local`:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=divyagoswami20081501@gmail.com
   ```
*(If no `RESEND_API_KEY` is provided, the form automatically falls back to opening the sender's default email client with your address and message pre-filled!)*

---

## 🌐 Deploy to Vercel

### Option 1: Automatic Deployment with GitHub (Recommended)
1. Push this repository to your GitHub account: `https://github.com/divyagoswami9508/portfolio`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Select your repository and click **Deploy**.
4. In the Vercel project settings, add the environment variables:
   - `RESEND_API_KEY`: your Resend key
   - `CONTACT_EMAIL`: `divyagoswami20081501@gmail.com`
   - `NEXT_PUBLIC_SITE_URL`: your live URL (e.g., `https://divyagoswami.vercel.app`)

### Option 2: Deploy via Vercel CLI
```bash
pnpm vercel
# Follow the terminal prompts to link and deploy to production
pnpm vercel --prod
```

---

## 🎨 Content Customization Guide

- **Update Profile / Bio / Social Links**: Edit `data/profile.ts`
- **Update Skills**: Edit `data/skills.ts`
- **Add / Edit Projects**: Edit `data/projects.ts`
- **Add Education / Milestones**: Edit `data/experience.ts`
- **Replace Avatar**: Replace `public/divya.jpg`
- **Replace Resume**: Replace `public/resume.pdf`

---

Built with ❤️ by **Divya Goswami** · 2026

