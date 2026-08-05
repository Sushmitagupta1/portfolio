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
