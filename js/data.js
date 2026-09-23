const PORTFOLIO_DATA = {
  profile: {
    name: "Sushmita Gupta",
    headline: "AI Engineer | Full Stack Developer | Python Developer",
    tagline: "Building AI-powered automation for business and architectural design workflows with Python, Django, React, Revit and Dynamo.",
    availability: "Open to Work",
    location: "Kolkata, West Bengal, India",
    email: "guptasushmita166@gmail.com",
    phone: "+91 7003033902",
    github: "https://github.com/Sushmitagupta1",
    linkedin: "https://www.linkedin.com/in/susmita-gupta-07b693249",
    photo: "photo.jpeg",
    photoFallback: "https://avatars.githubusercontent.com/u/178362519?v=4"
  },
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Built", value: "14" },
    { label: "Technologies", value: "35+" }
  ],
  about: [
    "AI Engineer and Full Stack Developer with hands-on experience in AI-powered business automation, ERP/HRMS solutions, payroll systems, inventory management, and full-stack web development.",
    "Skilled in Python, Django, ERPNext, Frappe Framework, REST APIs, Docker, databases, and modern web technologies. Experienced in developing scalable business applications, intelligent automation solutions, and enterprise systems.",
    "Working with Autodesk Revit and AutoCAD, I build AI-assisted workflows for architectural planning, drafting and BIM processes — creating Python scripts and Dynamo workflows that automate repetitive design and documentation tasks and integrate Claude AI into architecture workflows."
  ],
  skills: [
    { category: "Programming Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"] },
    { category: "Frontend", items: ["HTML", "CSS", "React.js", "Vite", "Tailwind CSS", "Responsive Web Design"] },
    { category: "Backend", items: ["Django", "Django REST Framework", "ERPNext", "Frappe Framework", "Node.js", "REST APIs"] },
    { category: "Databases", items: ["PostgreSQL", "MariaDB", "MongoDB", "MySQL", "SQLite"] },
    { category: "Data Science & AI", items: ["Pandas", "NumPy", "OpenCV", "Scikit-Learn", "Matplotlib", "Seaborn", "Gemini API", "OpenAI Whisper", "Claude AI"] },
    { category: "BIM & Design Automation", items: ["Autodesk Revit", "AutoCAD", "Dynamo", "Python Scripting", "Building Information Modeling (BIM)", "Architectural Documentation Workflows"] },
    { category: "Reporting & Automation", items: ["OpenPyXL", "ReportLab", "Excel Automation", "PDF Generation", "QR & Barcode Generation"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Docker", "VS Code", "Power BI", "Axios", "TanStack React Query", "Google Apps Script"] },
    { category: "Core Concepts", items: ["Data Structures", "OOP", "DBMS", "Computer Networks", "Business Process Automation"] }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Global Healthspace Studio Private Limited",
      period: "September 2026 - Present",
      location: "Ahmedabad",
      points: [
        "Develop AI-driven solutions for architectural design and building documentation workflows.",
        "Work with Autodesk Revit and AutoCAD for architectural drawings, modeling, and documentation.",
        "Create Python scripts and Dynamo workflows to automate repetitive architectural and BIM tasks.",
        "Integrate Claude AI with Revit and other design workflows to assist with automation, design generation, and productivity.",
        "Develop and optimize AI-assisted workflows for architectural planning, drafting, and BIM processes.",
        "Combine AI, Python, Dynamo, Revit, and AutoCAD to improve efficiency and reduce manual work in architectural projects."
      ],
      skillsUsed: ["Revit", "AutoCAD", "Dynamo", "Python Scripting", "Claude AI", "BIM", "Building Documentation", "Automation"]
    },
    {
      role: "AI Engineer & Software Developer",
      company: "Upper Crust",
      period: "May 2026 - August 2026",
      location: "Ahmedabad",
      points: [
        "Developed and implemented AI-powered business automation solutions to streamline HR, payroll, and operational workflows.",
        "Built an AI-driven review aggregation and reputation management platform for multi-location restaurant brands, automating sentiment tracking and response workflows.",
        "Customized and maintained ERPNext-based ERP and HRMS systems, improving employee management and business processes.",
        "Designed and deployed full-stack web applications and business websites using React, FastAPI, and Django.",
        "Automated payroll processing, salary slip generation, attendance tracking, and employee record management.",
        "Designed and integrated REST APIs for seamless communication between business applications.",
        "Developed inventory management and reporting systems to improve stock monitoring and operational efficiency.",
        "Managed Docker-based deployments, server configurations, and application maintenance.",
        "Collaborated with management teams to analyze business requirements and deliver technology-driven solutions."
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
      name: "AI Engineering OS — Autonomous AI Software-Engineering Agent",
      tech: ["Python 3.11+", "MCP", "tree-sitter", "SQLite", "Docker", "pytest", "opencode CLI"],
      description: "Autonomous AI software-engineering agent built as 3 MCP servers (freeworker, repoindex, toolbox) that plans, codes, debugs, tests, self-reviews and learns — with a tiered cost policy (free Zen models for bulk work, LLM judgment for architecture/security), sandboxed test-fix loop, review-before-apply with rollback, durable memory and an eval suite with metrics.",
      github: "https://github.com/Sushmitagupta1/ai-engineering-os"
    },
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
      name: "Shagun Catering Website",
      tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
      description: "Fully responsive catering website with hero slideshow, cuisine and service grids, filterable gallery, contact & WhatsApp integration and floating CTAs.",
      github: "https://github.com/Sushmitagupta1/Shagun-Catering-Website-",
      live: "https://shaguncatering.com/"
    },
    {
      name: "FMS — Facility Management System",
      tech: ["Google Apps Script", "Google Sheets", "HTML", "CSS", "JavaScript"],
      description: "Web app on Google Apps Script with a Sheets backend — role-based Admin/Employee portals, recurring daily/weekly/monthly task assignment, real-time status tracking with audit logs.",
      github: "https://github.com/Sushmitagupta1/fms-system-"
    },
    {
      name: "Automated Meeting Management System",
      tech: ["React 18", "Bootstrap 5", "FastAPI", "SQLite", "OpenAI Whisper", "Google Gemini"],
      description: "Meeting automation platform for recording upload, speech-to-text transcription, AI summarization and action-item extraction with PDF/Excel export and calendar view.",
      github: "https://github.com/Sushmitagupta1/automated-meeting-management-system"
    },
    {
      name: "HRMS Salary Slip Automation",
      tech: ["Python", "Flask", "Node.js (OpenWA)", "SMTP"],
      description: "Automated monthly salary-slip distribution via WhatsApp and Email by matching Excel employee data with PDF slips — Flask dashboard, dry-run mode, retries and delivery summaries.",
      github: "https://github.com/Sushmitagupta1/HRMS"
    }
  ],
  projects: [
    {
      name: "AI Engineering OS — Autonomous AI Software-Engineering Agent",
      tech: ["Python 3.11+", "MCP", "tree-sitter", "SQLite", "Docker", "pytest", "opencode CLI"],
      description: "Autonomous AI software-engineering agent built as 3 MCP servers (freeworker, repoindex, toolbox) that plans, codes, debugs, tests, self-reviews and learns, with a tiered cost policy, sandboxed test-fix loop, review-before-apply, durable memory and an eval suite with metrics.",
      github: "https://github.com/Sushmitagupta1/ai-engineering-os"
    },
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
      github: "https://github.com/Sushmitagupta1/Shagun-Catering-Website-",
      live: "https://shaguncatering.com/"
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
    location: "Kolkata, West Bengal, India",
    github: "https://github.com/Sushmitagupta1",
    linkedin: "https://www.linkedin.com/in/susmita-gupta-07b693249"
  }
};