# Digital Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static, single-page digital portfolio site for Sushmita Gupta, deployable to GitHub Pages.

**Architecture:** Pure HTML + CSS + vanilla JS. Content lives in `js/data.js` as a global `PORTFOLIO_DATA` object; `js/main.js` renders all repeating UI (project cards, skill chips, timelines) from it. `index.html` provides structure + SEO meta; `css/styles.css` provides the dark modern theme.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Google Fonts (Inter + Sora). No frameworks, no build step, no external libraries.

**Verification command:** Open `index.html` in a browser; check sections render, project cards populate from data.js, nav/mobile menu work, photo displays, links resolve.

---

## File Structure

| File | Responsibility |
|---|---|
| `index.html` | Page skeleton, all static section shells, SEO/meta tags, nav + hero + contact markup |
| `css/styles.css` | Design tokens (colors, typography), layout, all components, responsive breakpoints, scroll-reveal/animation classes |
| `js/data.js` | Global `PORTFOLIO_DATA` with profile, stats, about, skills, experience, featuredProjects, projects (13), education, certifications, achievements, contact |
| `js/main.js` | Render functions for projects/skills/timelines, nav active-state, mobile menu toggle, scroll-reveal via IntersectionObserver, smooth scroll, back-to-top, year in footer |
| `photo.jpeg` | Profile photo (already present) |

---

### Task 1: `js/data.js` — Structured portfolio content

**Files:**
- Create: `js/data.js`

- [ ] **Step 1: Create `js/data.js`**

```js
const PORTFOLIO_DATA = {
  profile: {
    name: "Sushmita Gupta",
    headline: "AI Engineer | Full Stack Developer | Python Developer",
    tagline: "Building AI-powered business automation, ERP & HRMS solutions with Python, Django and React.",
    availability: "Open to Work",
    location: "Ahmedabad, India",
    email: "guptasushmita166@gmail.com",
    phone: "+91 7003033902",
    github: "https://github.com/Sushmitagupta1",
    linkedin: "https://www.linkedin.com/in/susmita-gupta-07b693249",
    photo: "photo.jpeg",
    photoFallback: "https://avatars.githubusercontent.com/u/178362519?v=4"
  },
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Built", value: "13" },
    { label: "Technologies", value: "30+" }
  ],
  about: [
    "AI Engineer and Full Stack Developer with hands-on experience in AI-powered business automation, ERP/HRMS solutions, payroll systems, inventory management, and full-stack web development.",
    "Skilled in Python, Django, ERPNext, Frappe Framework, REST APIs, Docker, databases, and modern web technologies. Experienced in developing scalable business applications, intelligent automation solutions, and enterprise systems."
  ],
  skills: [
    { category: "Programming Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C"] },
    { category: "Frontend", items: ["HTML", "CSS", "React.js", "Vite", "Tailwind CSS", "ShadCN UI", "Responsive Web Design"] },
    { category: "Backend", items: ["Django", "Django REST Framework", "ERPNext", "Frappe Framework", "Node.js", "REST APIs", "FastAPI"] },
    { category: "Databases", items: ["PostgreSQL", "MariaDB", "MongoDB", "MySQL", "SQLite"] },
    { category: "Data Science & AI", items: ["Pandas", "NumPy", "OpenCV", "Scikit-Learn", "Matplotlib", "Seaborn", "Gemini API", "OpenAI Whisper"] },
    { category: "Reporting & Automation", items: ["OpenPyXL", "ReportLab", "Excel Automation", "PDF Generation", "QR & Barcode Generation"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "VS Code", "Power BI", "Axios", "TanStack React Query", "Google Apps Script"] },
    { category: "Core Concepts", items: ["Data Structures", "OOP", "DBMS", "Computer Networks", "SDLC", "Business Process Automation"] }
  ],
  experience: [
    {
      role: "AI Engineer & Software Developer",
      company: "Upper Crust",
      period: "May 2026 - Present",
      location: "Ahmedabad",
      points: [
        "Developed and implemented AI-powered business automation solutions to streamline HR, payroll, and operational workflows.",
        "Built an AI-driven review aggregation and reputation management platform for multi-location restaurant brands, automating sentiment tracking and response workflows.",
        "Customized and maintained ERPNext-based ERP and HRMS systems, improving employee management and business processes.",
        "Designed and deployed full-stack web applications and business websites using React, FastAPI, and Django.",
        "Automated payroll processing, salary slip generation, attendance tracking, and employee record management.",
        "Designed and integrated REST APIs for seamless communication between business applications.",
        "Developed inventory management and reporting systems to improve stock monitoring and operational efficiency.",
        "Managed Docker-based deployments, server configurations, and application maintenance."
      ],
      skillsUsed: ["Python", "AI/ML", "ERPNext", "Frappe Framework", "Docker", "REST APIs", "MySQL/MariaDB", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Business Automation", "HRMS", "Payroll Systems", "Inventory Management"]
    },
    {
      role: "Full Stack Web Development using Python & Django",
      company: "Ardent Computech Pvt. Ltd.",
      period: "Nov 2025 - April 2026",
      location: "Internship",
      points: [
        "Completed structured training in Python, Django, REST APIs, database integration, and full-stack web application development.",
        "Developed web applications using the Django framework integrated with relational databases.",
        "Worked on backend logic implementation, debugging, authentication, and application deployment concepts.",
        "Gained professional experience in real-world software development workflows, version control (Git/GitHub), and collaborative project practices."
      ],
      skillsUsed: ["Python", "Django", "REST APIs", "Databases", "Git", "GitHub"]
    }
  ],
  featuredProjects: [
    {
      name: "Revly — AI-Powered Review & Reputation Management Platform",
      tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker"],
      description: "Full-stack SaaS dashboard aggregating reviews from Google Business, Zomato, Swiggy, Reelo, Magicpin and TripAdvisor for multi-location restaurant brands — sentiment trends, NPS gauges, ratings distribution, location leaderboards, AI reply generation and an 'Ask Revly' chat assistant. Deployed as an installable PWA via Docker Compose on Oracle Cloud.",
      github: "https://github.com/Sushmitagupta1/Revly-an-social-media-review-and-reputation-managament-app"
    },
    {
      name: "Shagun Catering ERP / CRM",
      tech: ["React 19", "TypeScript", "FastAPI", "PostgreSQL 16", "Docker", "Google Gemini 2.0"],
      description: "Role-based catering ERP managing the complete event lifecycle across 7 role-specific dashboards (Admin, Sales, Menu Planner, Presentation, Operations, Kitchen, Warehouse), with Gemini-powered AI tools and secure JWT auth backed by a 27-endpoint REST API.",
      github: "https://github.com/Sushmitagupta1/Shagun-CRM-ERP"
    },
    {
      name: "HRMS Salary Slip Automation",
      tech: ["Python", "Flask", "Node.js (OpenWA)", "SMTP"],
      description: "Automated monthly salary-slip distribution via WhatsApp and Email by matching Excel employee data with PDF slips — Flask dashboard, dry-run mode, retries and delivery summaries.",
      github: "https://github.com/Sushmitagupta1/HRMS"
    },
    {
      name: "Enterprise Inventory Management System",
      tech: ["Django 5", "Django REST Framework", "React 18", "TypeScript", "PostgreSQL", "SimpleJWT"],
      description: "Full-stack inventory platform with multi-warehouse stock, purchase/sales orders, Code-128 barcode and QR generation with lookup API, low-stock alerts, and PDF/Excel reporting.",
      github: "https://github.com/Sushmitagupta1/Inventory-management-system"
    }
  ],
  projects: [
    {
      name: "FEFO Smart Inventory & Expiry Management",
      tech: ["Node.js", "Express", "MongoDB", "React 18", "Vite", "Tailwind CSS"],
      description: "First-Expired-First-Out inventory system with expiry-dated lots, automatic oldest-expiry-first allocation, Code-128 barcode validation, auto-quarantine, expiry monitoring and real-time dashboards.",
      github: "https://github.com/Sushmitagupta1/fefo-inventory-system-"
    },
    {
      name: "Revly — AI-Powered Review & Reputation Management Platform",
      tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker"],
      description: "AI-powered reputation management platform aggregating reviews from Google, Zomato, Swiggy, Reelo, Magicpin and TripAdvisor with sentiment trends, NPS gauges and AI reply generation.",
      github: "https://github.com/Sushmitagupta1/Revly-an-social-media-review-and-reputation-managament-app"
    },
    {
      name: "Shagun Catering ERP / CRM",
      tech: ["React 19", "TypeScript", "FastAPI", "PostgreSQL 16", "Docker", "Google Gemini 2.0"],
      description: "Role-based catering ERP managing the event lifecycle across 7 dashboards with Gemini-powered AI tools (menu generation, cost estimation, natural-language reports).",
      github: "https://github.com/Sushmitagupta1/Shagun-CRM-ERP"
    },
    {
      name: "FMS — Facility Management System",
      tech: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript"],
      description: "Web app on Google Apps Script with a Sheets backend — role-based Admin/Employee portals, recurring daily/weekly/monthly task assignment, real-time status tracking with audit logs.",
      github: "https://github.com/Sushmitagupta1/fms-system-"
    },
    {
      name: "Auto Google Business Profile Poster",
      tech: ["FastAPI", "SQLAlchemy", "APScheduler", "Pillow", "Jinja2", "Google OAuth 2.0", "Docker"],
      description: "Automated scheduled posting to Google Business Profiles with cross-posting to Facebook and Instagram, programmatic image generation and review reply drafting.",
      github: "https://github.com/Sushmitagupta1/Auto-Google-Business-Profile-social-media-post-creations-"
    },
    {
      name: "Shagun Catering Website",
      tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
      description: "Fully responsive catering website with hero slideshow, cuisine and service grids, filterable gallery, contact & WhatsApp integration and floating CTAs.",
      github: "https://github.com/Sushmitagupta1/Shagun-Catering-Website-"
    },
    {
      name: "HRMS Salary Slip Automation",
      tech: ["Python", "Flask", "Node.js (OpenWA)", "SMTP"],
      description: "Automated monthly salary-slip distribution via WhatsApp and Email by matching Excel data with PDF slips, with a Flask dashboard and delivery summaries.",
      github: "https://github.com/Sushmitagupta1/HRMS"
    },
    {
      name: "Automated Meeting Management System",
      tech: ["React 18", "Bootstrap 5", "FastAPI", "SQLite", "OpenAI Whisper", "Google Gemini"],
      description: "Meeting automation platform for recording upload, speech-to-text transcription, AI summarization and action-item extraction with PDF/Excel export and calendar view.",
      github: "https://github.com/Sushmitagupta1/automated-meeting-management-system"
    },
    {
      name: "Payroll Generator Automation Tool",
      tech: ["Python", "OpenPyXL", "Excel Automation"],
      description: "Outlet-wise, month-wise payroll with formula-driven salary calculations, yearly consolidated summaries and a reusable employee data generator.",
      github: "https://github.com/Sushmitagupta1/payroll-generator-"
    },
    {
      name: "ERPNext Inventory & Distribution System",
      tech: ["ERPNext", "Frappe Framework", "Python", "JavaScript (frappe-ui)", "MariaDB"],
      description: "Custom ERPNext fork for multi-outlet distribution with Source/Outlet Order doctypes, Delivery Note challan lifecycle, item-level wastage tracking and vehicle/driver tracking.",
      github: "https://github.com/Sushmitagupta1/ERPNEXT-inventory-and-distribution"
    },
    {
      name: "Enterprise Inventory Management System",
      tech: ["Django 5", "Django REST Framework", "React 18", "TypeScript", "PostgreSQL", "SimpleJWT"],
      description: "Full-stack inventory platform with multi-warehouse stock, purchase/sales orders, barcode/QR generation and low-stock alerts.",
      github: "https://github.com/Sushmitagupta1/Inventory-management-system"
    },
    {
      name: "Facial Recognition Attendance System",
      tech: ["Python", "OpenCV", "NumPy", "Pandas", "Scikit-learn"],
      description: "Face-recognition attendance system using live webcam capture and K-Nearest Neighbors, applying a full ML pipeline including cleaning, feature engineering and Z-score standardization.",
      github: "https://github.com/Sushmitagupta1/Facial-Recognition-Attendance-System-ph"
    },
    {
      name: "Library Management System",
      tech: ["Django 5", "Tailwind CSS", "HTMX", "Alpine.js", "Celery", "Redis"],
      description: "Production-grade library system with role-based access, circulation, holds queue, automatic fine calculation, ISBN import via Google Books API and a patron self-service portal.",
      github: "https://github.com/Sushmitagupta1/Library-management-system"
    }
  ],
  education: [
    { degree: "B.Tech — Computer Science & Engineering (Data Science)", institution: "Brainware University", period: "2022 - 2025", score: "Score: 77%" },
    { degree: "Diploma — Electrical Engineering", institution: "Elitte Institute of Engineering & Management", period: "2019 - 2022", score: "Score: 74%" },
    { degree: "Secondary Education", institution: "Deshbandhu Vidyapith for Girls", period: "2018", score: "" }
  ],
  certifications: [
    { name: "Python Programming", issuer: "Udemy", year: "2024" },
    { name: "Mastering MySQL", issuer: "Udemy", year: "2024" },
    { name: "Java Programming: Basic to Advanced", issuer: "Udemy", year: "2024" },
    { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", year: "2026" }
  ],
  achievements: [
    "1st Runner-Up — Computer Awareness Program organized by Webel Technology Limited.",
    "Developed multiple real-world software solutions including HRMS, ERP systems, payroll automation tools, inventory management applications, and AI-powered reputation and attendance systems.",
    "Active contributor to personal software development projects hosted on GitHub."
  ],
  contact: {
    email: "guptasushmita166@gmail.com",
    phone: "+91 7003033902",
    location: "Ahmedabad, India",
    github: "https://github.com/Sushmitagupta1",
    linkedin: "https://www.linkedin.com/in/susmita-gupta-07b693249"
  }
};
```

- [ ] **Step 2: Verify file loads**

Run: `node -e "require('fs').readFileSync('js/data.js','utf8'); console.log('ok')"`
Expected: `ok` (syntax check happens in Task 3 via browser; this confirms the file exists)

- [ ] **Step 3: Commit**

```bash
git add js/data.js
git commit -m "feat: add portfolio content data"
```

---

### Task 2: `css/styles.css` — Dark modern design system

**Files:**
- Create: `css/styles.css`

- [ ] **Step 1: Create `css/styles.css`**

```css
/* ===== Design Tokens ===== */
:root {
  --bg: #0a0e1a;
  --bg-alt: #0d1224;
  --surface: #111827;
  --surface-2: #1a2233;
  --border: rgba(255, 255, 255, 0.08);
  --text: #e5e7eb;
  --muted: #9ca3af;
  --accent: #8b5cf6;
  --accent-2: #14b8a6;
  --gradient: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #14b8a6 100%);
  --radius: 14px;
  --max-width: 1120px;
  --font-head: "Sora", sans-serif;
  --font-body: "Inter", sans-serif;
  --nav-h: 68px;
}

/* ===== Reset & Base ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: calc(var(--nav-h) + 12px); }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { font: inherit; cursor: pointer; background: none; border: none; color: inherit; }

.container { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }

/* ===== Header / Nav ===== */
.site-header {
  position: fixed; inset: 0 0 auto 0; z-index: 100;
  height: var(--nav-h);
  background: rgba(10, 14, 26, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav { display: flex; align-items: center; justify-content: space-between; height: 100%; }
.brand { font-family: var(--font-head); font-weight: 700; font-size: 1.15rem; letter-spacing: 0.02em; }
.brand span { background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
.nav-links { display: flex; align-items: center; gap: 28px; }
.nav-links a { font-size: 0.9rem; color: var(--muted); transition: color 0.2s; }
.nav-links a:hover, .nav-links a.active { color: var(--text); }
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 18px; border-radius: 999px;
  font-size: 0.85rem; font-weight: 600;
  border: 1px solid var(--border);
  transition: all 0.2s;
}
.btn-primary { background: var(--gradient); border: none; color: #fff; box-shadow: 0 4px 24px rgba(139, 92, 246, 0.35); }
.btn-primary:hover { filter: brightness(1.12); transform: translateY(-1px); }
.btn-ghost { color: var(--text); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }
.nav-toggle { display: none; flex-direction: column; gap: 5px; padding: 8px; }
.nav-toggle span { width: 22px; height: 2px; background: var(--text); transition: 0.3s; }
.nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ===== Hero ===== */
.hero { min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; padding-top: var(--nav-h); }
.hero::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background:
    radial-gradient(600px 400px at 12% 20%, rgba(139, 92, 246, 0.18), transparent 65%),
    radial-gradient(700px 500px at 88% 80%, rgba(20, 184, 166, 0.14), transparent 65%);
}
.hero-grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 48px; align-items: center; }
.hero .badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 999px;
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em;
  color: #34d399; border: 1px solid rgba(52, 211, 153, 0.35);
  background: rgba(52, 211, 153, 0.08);
}
.hero .badge::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #34d399; box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.25); }
.hero h1 { font-family: var(--font-head); font-size: clamp(2.4rem, 5vw, 3.6rem); line-height: 1.12; margin: 18px 0 6px; }
.hero h1 .accent { background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero .role { font-family: var(--font-head); font-size: clamp(1.05rem, 2vw, 1.3rem); color: var(--accent-2); font-weight: 600; }
.hero .tagline { color: var(--muted); margin: 16px 0 26px; max-width: 520px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
.hero-meta { display: flex; gap: 24px; margin-top: 30px; color: var(--muted); font-size: 0.85rem; flex-wrap: wrap; }
.hero-meta a:hover { color: var(--accent); }
.hero-photo-wrap { justify-self: center; position: relative; }
.hero-photo {
  width: 240px; height: 240px; border-radius: 24px;
  object-fit: cover; border: 2px solid var(--border);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  position: relative; z-index: 1;
  background: var(--surface-2);
}
.hero-photo-wrap::after {
  content: ""; position: absolute; inset: -14px; z-index: 0;
  border-radius: 32px;
  background: var(--gradient);
  opacity: 0.35; filter: blur(18px);
}
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 56px; }
.stat { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px; text-align: center; }
.stat .value { font-family: var(--font-head); font-size: 1.7rem; font-weight: 700; background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent; }
.stat .label { font-size: 0.78rem; color: var(--muted); margin-top: 4px; }

/* ===== Sections ===== */
.section { padding: 96px 0; }
.section-alt { background: var(--bg-alt); }
.section-head { margin-bottom: 44px; }
.section-head .kicker {
  font-family: var(--font-head); font-size: 0.82rem; font-weight: 600;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--accent);
}
.section-head h2 { font-family: var(--font-head); font-size: clamp(1.7rem, 3.5vw, 2.3rem); margin-top: 10px; }
.section-head p { color: var(--muted); margin-top: 10px; max-width: 640px; }

/* ===== About ===== */
.about-grid { display: grid; gap: 16px; max-width: 760px; }
.about-grid p { color: #d1d5db; }

/* ===== Skills ===== */
.skill-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; }
.skill-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; }
.skill-card h3 { font-family: var(--font-head); font-size: 0.95rem; margin-bottom: 14px; color: var(--accent-2); }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  font-size: 0.78rem; padding: 5px 12px; border-radius: 999px;
  background: var(--surface-2); border: 1px solid var(--border); color: var(--muted);
  transition: all 0.2s;
}
.chip:hover { color: var(--text); border-color: var(--accent); }

/* ===== Timeline ===== */
.timeline { position: relative; padding-left: 26px; display: grid; gap: 34px; max-width: 820px; }
.timeline::before { content: ""; position: absolute; left: 6px; top: 4px; bottom: 4px; width: 2px; background: linear-gradient(var(--accent), var(--accent-2)); opacity: 0.4; }
.tl-item { position: relative; }
.tl-item::before {
  content: ""; position: absolute; left: -26px; top: 6px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}
.tl-head { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; align-items: baseline; }
.tl-head h3 { font-family: var(--font-head); font-size: 1.08rem; }
.tl-head .company { color: var(--accent-2); font-weight: 600; font-size: 0.9rem; }
.tl-head .period { color: var(--muted); font-size: 0.82rem; }
.tl-item ul { margin: 12px 0; display: grid; gap: 8px; }
.tl-item li { color: #d1d5db; font-size: 0.92rem; padding-left: 18px; position: relative; }
.tl-item li::before { content: "▹"; position: absolute; left: 0; color: var(--accent); }

/* ===== Project cards ===== */
.project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 24px;
  display: flex; flex-direction: column; gap: 12px;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.card:hover { transform: translateY(-4px); border-color: rgba(139, 92, 246, 0.55); box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45); }
.card h3 { font-family: var(--font-head); font-size: 1.02rem; line-height: 1.3; }
.card p { color: var(--muted); font-size: 0.88rem; flex: 1; }
.card .card-link { color: var(--accent); font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; width: fit-content; }
.card .card-link:hover { color: var(--accent-2); }
.card-featured { position: relative; overflow: hidden; }
.card-featured::after {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--gradient);
}

/* ===== Education & Certs ===== */
.edu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }
.edu-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; }
.edu-card h3 { font-family: var(--font-head); font-size: 0.98rem; }
.edu-card .institution { color: var(--accent-2); font-size: 0.86rem; font-weight: 600; margin-top: 4px; }
.edu-card .period { color: var(--muted); font-size: 0.8rem; }
.edu-card .score { color: var(--text); font-size: 0.85rem; margin-top: 8px; }
.cert-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.cert-chip {
  background: var(--surface-2); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 12px 16px; font-size: 0.85rem;
}
.cert-chip .cert-name { color: var(--text); font-weight: 600; }
.cert-chip .cert-issuer { color: var(--muted); font-size: 0.78rem; margin-top: 2px; }

/* ===== Achievements ===== */
.achieve-list { max-width: 760px; display: grid; gap: 14px; }
.achieve-list li {
  display: flex; gap: 12px; align-items: flex-start;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px 18px; color: #d1d5db; font-size: 0.92rem;
}
.achieve-list li::before { content: "★"; color: var(--accent); }

/* ===== Contact ===== */
.contact-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 20px; padding: 44px; text-align: center;
  max-width: 640px; margin: 0 auto;
}
.contact-card h3 { font-family: var(--font-head); font-size: 1.6rem; }
.contact-card p { color: var(--muted); margin: 12px 0 26px; }
.contact-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; }
.contact-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
.contact-links a { color: var(--muted); font-size: 0.88rem; display: inline-flex; align-items: center; gap: 8px; }
.contact-links a:hover { color: var(--accent); }

/* ===== Footer ===== */
.site-footer { border-top: 1px solid var(--border); padding: 28px 0; text-align: center; color: var(--muted); font-size: 0.82rem; }
.back-top {
  position: fixed; right: 22px; bottom: 22px; z-index: 90;
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--surface-2); border: 1px solid var(--border);
  color: var(--text); font-size: 1.1rem;
  opacity: 0; pointer-events: none; transition: all 0.25s;
}
.back-top.show { opacity: 1; pointer-events: auto; }
.back-top:hover { border-color: var(--accent); color: var(--accent); }

/* ===== Reveal animations ===== */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: none; }

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  .hero .tagline { margin-inline: auto; }
  .hero-actions, .hero-meta { justify-content: center; }
  .hero-photo-wrap { order: -1; }
  .nav-toggle { display: flex; }
  .nav-links {
    position: fixed; top: var(--nav-h); right: 0; left: 0;
    flex-direction: column; gap: 0;
    background: rgba(10, 14, 26, 0.98);
    border-bottom: 1px solid var(--border);
    padding: 10px 24px 22px;
    transform: translateY(-12px); opacity: 0; pointer-events: none;
    transition: all 0.25s;
  }
  .nav-links.open { transform: none; opacity: 1; pointer-events: auto; }
  .nav-links a { padding: 12px 0; width: 100%; text-align: center; }
  .nav-links .btn { margin-top: 10px; }
  .stats { grid-template-columns: 1fr; gap: 12px; margin-top: 40px; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

- [ ] **Step 2: Commit**

```bash
git add css/styles.css
git commit -m "feat: add dark modern design system"
```

---

### Task 3: `index.html` — Page structure

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sushmita Gupta — AI Engineer & Full Stack Developer</title>
  <meta name="description" content="Portfolio of Sushmita Gupta, AI Engineer & Full Stack Developer specializing in AI-powered business automation, ERP/HRMS solutions and full-stack web development with Python, Django and React.">
  <meta property="og:title" content="Sushmita Gupta — AI Engineer & Full Stack Developer">
  <meta property="og:description" content="AI-powered business automation, ERP/HRMS solutions, and full-stack web development.">
  <meta property="og:image" content="photo.jpeg">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>SG</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <header class="site-header">
    <nav class="nav container" aria-label="Primary">
      <a class="brand" href="#home"><span>Sushmita</span> Gupta</a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
        <a class="btn btn-primary" id="download-cv" href="#" download>Download CV</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="badge">Open to Work</span>
          <h1>Hi, I'm <span class="accent">Sushmita Gupta</span></h1>
          <p class="role" id="hero-role"></p>
          <p class="tagline" id="hero-tagline"></p>
          <div class="hero-actions">
            <a class="btn btn-primary" id="btn-github" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a class="btn btn-ghost" id="btn-linkedin" href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a class="btn btn-ghost" id="btn-email" href="#">Email</a>
          </div>
          <div class="hero-meta" id="hero-meta"></div>
        </div>
        <div class="hero-photo-wrap">
          <img class="hero-photo" id="profile-photo" src="photo.jpeg" alt="Sushmita Gupta" loading="eager">
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section-head">
          <span class="kicker">01 — About</span>
          <h2>About Me</h2>
        </div>
        <div class="about-grid" id="about-content"></div>
      </div>
    </section>

    <section class="section section-alt" id="skills">
      <div class="container">
        <div class="section-head">
          <span class="kicker">02 — Skills</span>
          <h2>Technical Skills</h2>
        </div>
        <div class="skill-grid" id="skills-content"></div>
      </div>
    </section>

    <section class="section" id="experience">
      <div class="container">
        <div class="section-head">
          <span class="kicker">03 — Experience</span>
          <h2>Professional Experience</h2>
        </div>
        <div class="timeline" id="experience-content"></div>
      </div>
    </section>

    <section class="section section-alt" id="projects">
      <div class="container">
        <div class="section-head">
          <span class="kicker">04 — Projects</span>
          <h2>Featured Projects</h2>
        </div>
        <div class="project-grid" id="featured-content"></div>

        <div class="section-head" style="margin-top: 72px;">
          <span class="kicker">05 — All Projects</span>
          <h2>More Projects</h2>
        </div>
        <div class="project-grid" id="projects-content"></div>
      </div>
    </section>

    <section class="section" id="education">
      <div class="container">
        <div class="section-head">
          <span class="kicker">06 — Learning</span>
          <h2>Education & Certifications</h2>
        </div>
        <div class="edu-grid" id="education-content"></div>
        <div class="section-head" style="margin-top: 48px;">
          <span class="kicker">07 — Certifications</span>
          <h2 style="font-size: 1.4rem;">Certifications</h2>
        </div>
        <div class="cert-row" id="certifications-content"></div>
      </div>
    </section>

    <section class="section section-alt" id="achievements">
      <div class="container">
        <div class="section-head">
          <span class="kicker">08 — Highlights</span>
          <h2>Achievements</h2>
        </div>
        <ul class="achieve-list" id="achievements-content"></ul>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="section-head">
          <span class="kicker">09 — Contact</span>
          <h2>Let's Connect</h2>
        </div>
        <div class="contact-card">
          <h3>Get in touch</h3>
          <p>I'm open to AI engineering, full-stack development and automation roles. Let's build something great together.</p>
          <div class="contact-actions">
            <a class="btn btn-primary" id="contact-email" href="#">Email Me</a>
            <a class="btn btn-ghost" id="contact-cv" href="#" download>Download CV</a>
          </div>
          <div class="contact-links" id="contact-links"></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">© <span id="year"></span> Sushmita Gupta. Built with HTML, CSS & JavaScript.</div>
  </footer>

  <button class="back-top" id="back-top" aria-label="Back to top">↑</button>

  <script src="js/data.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add page structure"
```

---

### Task 4: `js/main.js` — Render logic & interactions

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create `js/main.js`**

```js
(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }
  function createChips(items) {
    const wrap = el("div", "chips");
    items.forEach(function (t) {
      wrap.appendChild(el("span", "chip", t));
    });
    return wrap;
  }
  function createProjectCard(p, featured) {
    const card = el("article", "card" + (featured ? " card-featured" : ""));
    card.appendChild(el("h3", null, p.name));
    card.appendChild(createChips(p.tech));
    card.appendChild(el("p", null, p.description));
    const link = el("a", "card-link", "View on GitHub →");
    link.href = p.github;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    card.appendChild(link);
    return card;
  }

  function renderProfile() {
    document.title = D.profile.name + " — " + D.profile.headline.split("|")[0].trim();
    $("hero-role").textContent = D.profile.headline;
    $("hero-tagline").textContent = D.profile.tagline;
    $("btn-github").href = D.profile.github;
    $("btn-linkedin").href = D.profile.linkedin;
    $("btn-email").href = "mailto:" + D.profile.email;

    const photo = $("profile-photo");
    photo.src = D.profile.photo;
    photo.onerror = function () { this.src = D.profile.photoFallback; };

    const meta = $("hero-meta");
    const links = [
      { label: "✉ " + D.profile.email, href: "mailto:" + D.profile.email },
      { label: "☎ " + D.profile.phone, href: "tel:" + D.profile.phone.replace(/\s/g, "") },
      { label: "📍 " + D.profile.location, href: "#" }
    ];
    links.forEach(function (l) {
      const a = el("a", null, l.label);
      a.href = l.href;
      if (l.href !== "#") a.target = "_blank";
      meta.appendChild(a);
    });

    D.stats.forEach(function (s) {
      const stat = el("div", "stat");
      stat.appendChild(el("div", "value", s.value));
      stat.appendChild(el("div", "label", s.label));
      document.querySelector(".hero .container").appendChild(stat);
    });
  }

  function renderAbout() {
    const wrap = $("about-content");
    D.about.forEach(function (para) {
      wrap.appendChild(el("p", null, para));
    });
  }

  function renderSkills() {
    const wrap = $("skills-content");
    D.skills.forEach(function (group) {
      const card = el("div", "skill-card");
      card.appendChild(el("h3", null, group.category));
      card.appendChild(createChips(group.items));
      wrap.appendChild(card);
    });
  }

  function renderExperience() {
    const wrap = $("experience-content");
    D.experience.forEach(function (job) {
      const item = el("div", "tl-item");
      const head = el("div", "tl-head");
      head.appendChild(el("h3", null, job.role));
      head.appendChild(el("span", "period", job.period));
      item.appendChild(head);
      item.appendChild(el("p", "company", job.company + (job.location ? " · " + job.location : "")));
      const ul = el("ul");
      job.points.forEach(function (pt) { ul.appendChild(el("li", null, pt)); });
      item.appendChild(ul);
      item.appendChild(createChips(job.skillsUsed));
      wrap.appendChild(item);
    });
  }

  function renderProjects() {
    const featured = $("featured-content");
    D.featuredProjects.forEach(function (p) {
      featured.appendChild(createProjectCard(p, true));
    });
    const all = $("projects-content");
    D.projects.forEach(function (p) {
      all.appendChild(createProjectCard(p, false));
    });
  }

  function renderEducation() {
    const wrap = $("education-content");
    D.education.forEach(function (e) {
      const card = el("div", "edu-card");
      card.appendChild(el("h3", null, e.degree));
      card.appendChild(el("p", "institution", e.institution));
      card.appendChild(el("p", "period", e.period + (e.score ? " · " + e.score : "")));
      wrap.appendChild(card);
    });
    const certs = $("certifications-content");
    D.certifications.forEach(function (c) {
      const chip = el("div", "cert-chip");
      chip.appendChild(el("span", "cert-name", c.name));
      chip.appendChild(el("div", "cert-issuer", c.issuer + " · " + c.year));
      certs.appendChild(chip);
    });
  }

  function renderAchievements() {
    const wrap = $("achievements-content");
    D.achievements.forEach(function (a) {
      wrap.appendChild(el("li", null, a));
    });
  }

  function renderContact() {
    $("contact-email").href = "mailto:" + D.contact.email;
    const cvLinks = [
      { label: "GitHub", url: D.contact.github },
      { label: "LinkedIn", url: D.contact.linkedin },
      { label: "Email", url: "mailto:" + D.contact.email },
      { label: "Phone", url: "tel:" + D.contact.phone.replace(/\s/g, "") },
      { label: "Location", url: "#" }
    ];
    const wrap = $("contact-links");
    cvLinks.forEach(function (l) {
      const a = el("a", null, l.label);
      a.href = l.url;
      if (l.url !== "#") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      wrap.appendChild(a);
    });
  }

  function setupCV() {
    const path = "Resume.pdf";
    fetch(path, { method: "HEAD" }).then(function (res) {
      if (res.ok) {
        document.querySelectorAll(".btn-primary[id$='cv'], #download-cv, #contact-cv").forEach(function (a) {
          a.href = path;
        });
      }
    }).catch(function () {});
  }

  function setupNav() {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.getElementById("nav-links");
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    const sections = Array.prototype.map.call(document.querySelectorAll("section[id]"), function (s) {
      return { id: s.id, el: s };
    });
    const navAnchors = Array.prototype.slice.call(links.querySelectorAll("a[href^='#']"));
    window.addEventListener("scroll", function () {
      const y = window.scrollY + 100;
      let current = null;
      sections.forEach(function (s) {
        if (s.el.offsetTop <= y) current = s.id;
      });
      navAnchors.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    }, { passive: true });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("visible"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(function (i) { io.observe(i); });
  }

  function setupBackTop() {
    const btn = $("back-top");
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function setupFooter() {
    $("year").textContent = new Date().getFullYear();
  }

  function init() {
    renderProfile();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    renderAchievements();
    renderContact();
    setupCV();
    setupNav();
    setupReveal();
    setupBackTop();
    setupFooter();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
```

- [ ] **Step 2: Commit**

```bash
git add js/main.js
git commit -m "feat: add render logic and interactions"
```

---

### Task 5: Add reveal hooks, copy resume, wire stats markup

**Files:**
- Modify: `index.html` (add `reveal` classes to sections)
- Modify: `js/main.js` (append stats inside a `.stats` container in hero grid)
- Create: `Resume.pdf` (copied from user's downloads)

- [ ] **Step 1: Add `reveal` class to section shells in `index.html`**

After Task 3, update each `<section class="section...">` to include `reveal` (e.g. `<section class="section reveal" id="about">`). Also wrap stats: modify `js/main.js` `renderProfile()` so stats append to a dedicated `.stats` grid inside the hero content column rather than `.hero .container`.

Replace in `index.html` the hero content block — change `<div class="hero-content">` so it also closes after a new `<div class="stats" id="hero-stats"></div>`:

```html
<div class="hero-content">
  <span class="badge">Open to Work</span>
  <h1>Hi, I'm <span class="accent">Sushmita Gupta</span></h1>
  <p class="role" id="hero-role"></p>
  <p class="tagline" id="hero-tagline"></p>
  <div class="hero-actions">
    <a class="btn btn-primary" id="btn-github" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a class="btn btn-ghost" id="btn-linkedin" href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a class="btn btn-ghost" id="btn-email" href="#">Email</a>
  </div>
  <div class="hero-meta" id="hero-meta"></div>
  <div class="stats" id="hero-stats"></div>
</div>
```

- [ ] **Step 2: Update `renderProfile()` stats target**

Replace this block in `js/main.js`:

```js
    D.stats.forEach(function (s) {
      const stat = el("div", "stat");
      stat.appendChild(el("div", "value", s.value));
      stat.appendChild(el("div", "label", s.label));
      document.querySelector(".hero .container").appendChild(stat);
    });
```

with:

```js
    const statsWrap = $("hero-stats");
    D.stats.forEach(function (s) {
      const stat = el("div", "stat");
      stat.appendChild(el("div", "value", s.value));
      stat.appendChild(el("div", "label", s.label));
      statsWrap.appendChild(stat);
    });
```

- [ ] **Step 3: Add `reveal` classes to dynamic cards**

In `js/main.js`, add ` reveal` to card/skill/timeline classes so scroll animations apply to generated content:
- `createProjectCard`: `el("article", "card reveal" + ...)`
- skills: `el("div", "skill-card reveal")`
- experience: `el("div", "tl-item reveal")`
- education: `el("div", "edu-card reveal")`

- [ ] **Step 4: Copy resume into project for Download CV**

Run:
```powershell
Copy-Item -LiteralPath "C:\Users\Janak\Downloads\Resume .pdf" -Destination "D:\digital portfolio\Resume.pdf"
```
Verify: `Test-Path "D:\digital portfolio\Resume.pdf"` → `True`

- [ ] **Step 5: Commit**

```bash
git add index.html js/main.js Resume.pdf
git commit -m "feat: wire stats, reveal animations, and CV download"
```

---

### Task 7: Deploy to GitHub Pages

**Files:**
- Modify: repo configuration (no code changes)

Deployment uses the user's existing GitHub account (`Sushmitagupta1`). Requires `gh` CLI auth; if not authenticated, guide the user through the manual steps.

- [ ] **Step 1: Check gh CLI availability and auth**

Run: `gh --version; gh auth status`
Expected: gh installed; if not authenticated, run `gh auth login` (user-assisted).

- [ ] **Step 2: Create a new repository on GitHub**

Run: `gh repo create Sushmitagupta1/portfolio --public --source . --remote origin --push`
(If the account is different, use that username.) If the command fails (e.g., repo exists), push to existing remote instead: `git remote add origin https://github.com/Sushmitagupta1/portfolio.git` then `git push -u origin master`.

- [ ] **Step 3: Enable GitHub Pages**

Run: `gh api repos/Sushmitagupta1/portfolio/pages -X POST -f source[branch]=master -f source[path]=/`
Expected: returns JSON with `"status": "queued"` or `"live"`.
Note: static files live at repo root (`index.html`, `css/`, `js/`, `photo.jpeg`, `Resume.pdf`), so GitHub Pages serves directly from `master` root — no build step needed.

- [ ] **Step 4: Verify site is live**

Visit `https://sushmitagupta1.github.io/portfolio/` after a minute. Confirm hero, projects, and links render. Check that `photo.jpeg` and `Resume.pdf` resolve (relative paths work on GH Pages).

---

### Task 6: Verify site renders correctly

**Files:**
- None (verification only)

- [ ] **Step 1: Static smoke test of data.js syntax**

Run: `node -e "global.window={}; require('fs').readFileSync('js/data.js','utf8'); new Function(require('fs').readFileSync('js/data.js','utf8') + '; if(typeof PORTFOLIO_DATA==="undefined") throw new Error("no data"); console.log("DATA OK:", PORTFOLIO_DATA.projects.length, "projects")')()"`
Expected: `DATA OK: 13 projects`

- [ ] **Step 2: Confirm expected files exist**

Run: `Get-ChildItem -Recurse -File -Exclude ".git" | Select-Object FullName`
Expected: `index.html`, `css/styles.css`, `js/data.js`, `js/main.js`, `photo.jpeg`, `Resume.pdf`, spec + plan docs

- [ ] **Step 3: Browser check**

Open `index.html` in a browser and verify:
- Hero renders name, role, tagline, photo, badges, stats, contact links
- All sections render content populated from data.js
- Featured shows 4 cards; All Projects shows 13 cards (includes Revly & Shagun in both lists)
- Nav scrolls to anchors; mobile menu toggles; active nav highlight works
- Scroll-reveal fades items in; back-to-top appears after scrolling
- GitHub links open the correct repos
- Download CV downloads Resume.pdf
- No console errors

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final verification pass"
```
