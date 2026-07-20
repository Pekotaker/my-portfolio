import { useEffect, useState } from "react";

type Theme = "dark" | "light";

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  outcome: string;
  technologies: string[];
  href: string;
  linkLabel: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Neuro Companion",
    eyebrow: "AI × game integration",
    description:
      "A tModLoader mod that turns Neuro-sama into a controllable Terraria summon, with weapon-aware combat and optional Neuro SDK control.",
    outcome:
      "Designed a safe high-level action layer, WebSocket protocol client, command queue and custom firing profiles for Terraria's unusual magic weapons.",
    technologies: ["C#", "tModLoader", "WebSocket", "System.Text.Json"],
    href: "https://github.com/Pekotaker/NeuroCompanion",
    linkLabel: "View repository",
    featured: true,
  },
  {
    title: "Đồng Hành Scholarship",
    eyebrow: "Production thesis project",
    description:
      "An application-screening system used by Đồng Hành Scholarship to categorize, score and review scholarship applications with LLM assistance.",
    outcome:
      "Built full-stack features, relational data flows and automated tests. The thesis received 9.3/10 and the system entered real organizational use.",
    technologies: ["FastAPI", "React", "PostgreSQL", "PyTest", "Cypress"],
    href: "https://github.com/DongHanh-Scholarship",
    linkLabel: "View organization",
    featured: true,
  },
  {
    title: "Rails API Template",
    eyebrow: "Backend foundation",
    description:
      "A batteries-included Rails API starter for applications that need authentication, authorization, jobs, tests and security tooling from day one.",
    outcome:
      "Packages the conventions I reach for in production: JWT, Pundit, Sidekiq, RSpec, RuboCop, Brakeman, PostgreSQL, Redis and Docker Compose.",
    technologies: ["Ruby on Rails", "RSpec", "PostgreSQL", "Redis", "Docker"],
    href: "https://github.com/Pekotaker/rails-api-template",
    linkLabel: "View repository",
  },
  {
    title: "RSA Toolkit",
    eyebrow: "Applied cryptography",
    description:
      "A low-level cryptography project covering large-integer operations and RSA key loading, encryption, decryption, signing and verification.",
    outcome:
      "Explored the mechanics underneath common security abstractions through C++, Python and OpenSSL rather than treating cryptography as a black box.",
    technologies: ["C++", "Python", "OpenSSL", "RSA"],
    href: "https://github.com/Pekotaker/RSA",
    linkLabel: "View repository",
  },
];

const experience = [
  {
    period: "Sep 2024 — May 2026",
    role: "Ruby on Rails Software Engineer",
    company: "Golden Owl Solutions",
    summary:
      "Built and maintained backend features for company and outsourcing products, including APIs, SQL-heavy workflows, deployments and production fixes.",
    details: [
      "Contributed to Nexlec, Numerology Web, Wesolo, GetReach and other client products.",
      "Worked across Rails, Next.js, TypeScript, AWS and generative-AI integrations.",
      "Designed guarded dynamic-SQL export workflows for an internal administration product.",
    ],
  },
  {
    period: "Aug 2023 — Aug 2024",
    role: "Python Software Engineer",
    company: "Đồng Hành Association",
    summary:
      "Developed the scholarship-screening platform that became both my bachelor thesis and a deployed system used by the organization.",
    details: [
      "Implemented FastAPI services, PostgreSQL models and React/Material UI workflows.",
      "Integrated LLM-assisted categorization and scoring into the reviewer workflow.",
      "Covered critical flows with PyTest and Cypress.",
    ],
  },
];

const capabilities = [
  {
    label: "Backend & data",
    items: ["Ruby on Rails", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Sidekiq", "Redis"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Material UI"],
  },
  {
    label: "Delivery & quality",
    items: ["AWS", "Docker", "Git", "RSpec", "PyTest", "Cypress", "RuboCop", "Brakeman"],
  },
  {
    label: "Beyond the web",
    items: ["C#", "C++", "OpenSSL", "WebSockets", "LLM integration", "Cisco networking", "Linux"],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nguyen Vu, home" onClick={closeMenu}>
          <span>NV</span>
          <span className="wordmark-copy">Nguyen Vu</span>
        </a>

        <nav id="primary-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-external" href="https://github.com/Pekotaker" target="_blank" rel="noreferrer">
            GitHub <ArrowIcon />
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Full-stack software engineer · Ho Chi Minh City</p>
            <h1>I build software that survives contact with reality.</h1>
            <p className="hero-intro">
              Production web products, reliable backend systems and unusual integrations—built with Ruby on Rails,
              React, Next.js and FastAPI.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work</a>
              <a className="button button-secondary" href="mailto:nguyenvutl306@gmail.com">Start a conversation</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Current professional snapshot">
            <div className="panel-topbar">
              <div className="panel-dots" aria-hidden="true"><span /><span /><span /></div>
              <span>engineer.profile</span>
              <span className="panel-status">available</span>
            </div>
            <dl className="profile-readout">
              <div><dt>Focus</dt><dd>Full-stack product engineering</dd></div>
              <div><dt>Strength</dt><dd>Turning ambiguous requirements into working systems</dd></div>
              <div><dt>Recent</dt><dd>Rails products + AI-controlled Terraria companion</dd></div>
              <div><dt>Languages</dt><dd>Vietnamese · English (IELTS 7.5) · Japanese (N3)</dd></div>
            </dl>
            <div className="panel-command"><span>$</span> ship --carefully --then-iterate<span className="cursor" /></div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Career highlights">
          <div><strong>9.3/10</strong><span>Bachelor thesis</span></div>
          <div><strong>Production</strong><span>Rails & FastAPI experience</span></div>
          <div><strong>Full stack</strong><span>Backend through delivery</span></div>
          <div><strong>Curious</strong><span>Web, AI, games & systems</span></div>
        </section>

        <section className="section-shell section-block" id="work">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / Selected work</p>
              <h2>Proof, not a technology inventory.</h2>
            </div>
            <p>Projects that show how I reason about constraints, integrations and software people actually use.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={project.featured ? "project-card featured" : "project-card"} key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-content">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-outcome">{project.outcome}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel}: ${project.title}`}>
                  {project.linkLabel} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block experience-section" id="experience">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-index">02 / Experience</p>
                <h2>Professional work across the product lifecycle.</h2>
              </div>
              <p>Implementation, maintenance, debugging and delivery—not just greenfield demos.</p>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <p className="timeline-period">{item.period}</p>
                  <div className="timeline-role">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <div className="timeline-copy">
                    <p>{item.summary}</p>
                    <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="education-note">
              <p className="section-index">Education</p>
              <div>
                <h3>B.Sc. Software Engineering · VNUHCM University of Science</h3>
                <p>Bachelor thesis: “Building a system to facilitate scholarship screening using LLMs.” Excellent, 9.3/10.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="capabilities">
          <div className="section-heading">
            <div>
              <p className="section-index">03 / Capabilities</p>
              <h2>Broad enough for the whole system. Deepest in web products.</h2>
            </div>
            <p>I choose tools to fit the problem, then learn the parts the abstraction tries to hide.</p>
          </div>

          <div className="capability-grid">
            {capabilities.map((group) => (
              <article key={group.label}>
                <h3>{group.label}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell about-block">
          <p className="section-index">04 / Working style</p>
          <div className="about-layout">
            <h2>Curiosity with an operational bias.</h2>
            <div>
              <p>
                I enjoy both sides of full-stack work: modelling a backend correctly and making the frontend feel direct.
                My best projects usually begin with a question that crosses boundaries—between an LLM and a reviewer,
                an AI agent and a game engine, or a product requirement and the database underneath it.
              </p>
              <p>
                I value clear reasoning, honest trade-offs and systems that can be inspected when something inevitably goes wrong.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-layout">
            <div>
              <p className="section-index">05 / Contact</p>
              <h2>Have a difficult product problem?</h2>
              <p>I’m open to software engineering roles and conversations about web products, AI integrations and ambitious side projects.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:nguyenvutl306@gmail.com">nguyenvutl306@gmail.com <ArrowIcon /></a>
              <a href="https://www.linkedin.com/in/pekotaker/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
              <a href="https://github.com/Pekotaker" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Nguyen Vu Trinh Le</p>
        <p>Designed and built with React + TypeScript.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
