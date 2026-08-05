# Digital Portfolio Design Spec

**Date:** 2026-08-05
**Author:** Sushmita Gupta (via opencode)
**Status:** Approved

## 1. Purpose

A personal digital portfolio website for Sushmita Gupta, an AI Engineer & Full Stack Developer, to showcase her CV, skills, experience, and projects to prospective employers.

## 2. Audience & Success Criteria

- **Audience:** Recruiters, hiring managers, and engineering teams reviewing her job applications.
- **Success criteria:**
  - Site loads fast (pure static, no build step).
  - All key CV content is present: summary, skills, experience, projects, education, certifications, achievements, contact.
  - Every project links to its public GitHub repository.
  - Fully responsive (mobile-first) and accessible.
  - Deployable to GitHub Pages via a single push.

## 3. Constraints

- Hosting: GitHub Pages → static files only, no server-side code.
- Tech stack: pure HTML + CSS + vanilla JS. No frameworks, no build tooling, no external libraries beyond Google Fonts.
- Profile photo: `photo.jpeg` in project root; GitHub avatar as documented fallback.
- No personal data invented; all content sourced from the provided CV PDF and GitHub profile.

## 4. Architecture (Approach A — Modular Data-Driven)

```
D:\digital portfolio\
├── index.html            # Page structure + SEO meta
├── css\styles.css        # All styling (design tokens, layout, components)
├── js\data.js            # Structured data: profile, skills, experience, projects, education, certs, achievements, contact
├── js\main.js            # Render logic, nav, scroll-reveal, interactions
├── photo.jpeg            # Profile photo (user-provided)
├── Resume .pdf           # Optional copy for the Download CV button (if user adds it)
└── docs\superpowers\specs\2026-08-05-portfolio-design.md
```

- `data.js` defines a global `PORTFOLIO_DATA` object. `main.js` renders all repeating UI (project cards, skill chips, timeline items) from it. Updating content = editing one data file.

## 5. Site Structure (One-Page Scroll)

Sections, in order:

1. **Header / Nav** — fixed top bar: name monogram, anchor links (About, Skills, Experience, Projects, Education, Contact), "Download CV" button, mobile hamburger.
2. **Hero** — name, headline ("AI Engineer | Full Stack Developer | Python Developer"), one-line intro, "Open to Work" badge, profile photo, contact action buttons (GitHub, LinkedIn, Email, Phone), quick stats row (years experience, projects count, tech count).
3. **About** — professional summary paragraphs from CV.
4. **Skills** — grouped chip grids: Programming Languages, Frontend, Backend, Databases, Data Science & AI, Reporting & Automation, Tools & Platforms, Core Concepts. Each chip is a styled tag (no fake percentages — honest representation).
5. **Experience** — vertical timeline: AI Engineer & Software Developer @ Upper Crust (May 2026–Present), Full Stack Web Development Internship @ Ardent Computech (Nov 2025–Apr 2026). Bullet points from CV, "skills used" tags.
6. **Projects** — two parts:
   - *Featured*: Revly, Shagun Catering ERP, HRMS Salary Slip Automation, Enterprise Inventory Management System (top 4 for impact).
   - *All Projects*: grid of all 13 projects from `data.js`, each card = title, tech tags, 1-line description, GitHub link.
7. **Education & Certifications** — timeline: B.Tech (Brainware University 2022–25), Diploma EE (Elitte Institute 2019–22), Secondary (2018); certification cards (Python, MySQL, Java, AI Fluency).
8. **Achievements** — 1st Runner-Up Computer Awareness Program (Webel), plus contributions note.
9. **Contact** — email, phone, location, GitHub, LinkedIn; "Download CV" button; simple footer with copyright + back-to-top.

## 6. Design System

- **Style:** Dark modern tech.
- **Palette:**
  - Background: `#0a0e1a` (deep navy-charcoal)
  - Surface/cards: `#111827`–`#1f2937`
  - Primary accent: violet `#8b5cf6`
  - Secondary accent: teal `#14b8a6`
  - Text: `#e5e7eb` (primary), `#9ca3af` (muted)
  - Borders: `rgba(255,255,255,0.08)`
- **Typography:** Google Fonts — "Inter" for body, "Sora" (or "Space Grotesk") for headings.
- **Effects:** subtle card borders with accent glow on hover, scroll-reveal fade-up via IntersectionObserver, smooth-scroll nav, gradient accents on hero headings.
- **Components:** section headers with number prefix (e.g., `01 — About`), card grid, timeline, chip tags, icon links, back-to-top button.

## 7. Data Model (data.js)

```js
const PORTFOLIO_DATA = {
  profile: { name, headline, tagline, photo, availability, location, email, phone, github, linkedin },
  stats: { experience, projects, technologies },
  about: [ "paragraph1", "paragraph2" ],
  skills: [ { category, items: [...] } ],
  experience: [ { role, company, period, location, points: [...], skillsUsed: [...] } ],
  featuredProjects: [ { name, tech: [...], description, github } ],
  projects: [ /* all 13: name, tech, description, github */ ],
  education: [ { degree, institution, period, score } ],
  certifications: [ { name, issuer, year } ],
  achievements: [ "..." ],
  contact: { email, phone, location, github, linkedin }
};
```

## 8. Project-to-Repo Mapping

| Project | GitHub repo |
|---|---|
| Revly — Review & Reputation Platform | `Revly-an-social-media-review-and-reputation-managament-app` |
| Shagun Catering ERP / CRM | `Shagun-CRM-ERP` |
| FMS — Facility Management System | `fms-system-` |
| Auto Google Business Profile Poster | `Auto-Google-Business-Profile-social-media-post-creations-` |
| Shagun Catering Website | `Shagun-Catering-Website-` |
| HRMS Salary Slip Automation | `HRMS` |
| Automated Meeting Management System | `automated-meeting-management-system` |
| Payroll Generator Automation Tool | `payroll-generator-` |
| ERPNext Inventory & Distribution | `ERPNEXT-inventory-and-distribution` |
| Enterprise Inventory Management System | `Inventory-management-system` |
| Facial Recognition Attendance System | `Facial-Recognition-Attendance-System-ph` |
| Library Management System | `Library-management-system` |
| FEFO Smart Inventory & Expiry Management | `fefo-inventory-system-` (Node/Express/MongoDB/React) |

Repo URLs use base `https://github.com/Sushmitagupta1/<repo>`.

## 9. Error Handling / Resilience

- Profile photo uses `photo.jpeg` with `onerror` fallback to GitHub avatar URL.
- If `data.js` fails to load, page still shows static nav/hero; JS is progressive enhancement.
- All external links `target="_blank" rel="noopener noreferrer"`.
- Meta description + semantic HTML for basic SEO/a11y.

## 10. Verification

- Open `index.html` in a browser; confirm all sections render, project cards populate from `data.js`, nav scrolls, mobile menu toggles, photo displays, links point to correct repos.
- Check responsive behavior at ~375px, 768px, 1280px widths.
- No console errors.

## 11. Out of Scope (YAGNI)

- No blog, no contact form backend, no CMS, no multi-language, no light/dark toggle (dark-only per approval).
- No social-media auto-fetch (repo list is hardcoded in data.js).
