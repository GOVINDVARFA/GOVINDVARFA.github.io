import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { profile, projects, skillGroups } from "./data";
import type { Category, Project } from "./data";
import "./App.css";

function Icon({ name = "arrow", size = 20 }: { name?: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    right: <path d="M4 12h16m-6-6 6 6-6 6" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />,
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
      </>
    ),
    spark: (
      <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M15 8V3H3v12h5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

function OrbitalVisual() {
  return (
    <div className="orbital" aria-hidden="true">
      <div className="orbit-grid" />
      <div className="orbit-label top">FROM CONCEPT TO CODE</div>
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      <div className="orbit-ring ring-three" />
      <svg className="wire-globe" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="sphere">
            <stop offset="0" stopColor="#bcec6b" stopOpacity=".07" />
            <stop offset="1" stopColor="#bcec6b" stopOpacity=".015" />
          </radialGradient>
          <clipPath id="sphere-clip">
            <circle cx="200" cy="200" r="145" />
          </clipPath>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="145"
          fill="url(#sphere)"
          stroke="currentColor"
        />
        <g clipPath="url(#sphere-clip)" fill="none" stroke="currentColor">
          {[30, 65, 105, 135].map((r) => (
            <ellipse key={r} cx="200" cy="200" rx={r} ry="145" />
          ))}
          {[85, 125, 165, 200, 235, 275, 315].map((y) => (
            <ellipse key={y} cx="200" cy={y} rx="145" ry="24" />
          ))}
          <path d="M200 55v290M55 200h290" />
        </g>
      </svg>
      <div className="core-back" />
      <div className="core">
        <Icon name="code" size={65} />
        <span>BUILD WITH INTENT</span>
      </div>
      <div className="orbit-tag tag-react">
        <span className="react-symbol">⚛</span> React.js
      </div>
      <div className="orbit-tag tag-api">
        <Icon name="database" size={15} /> Full-stack
      </div>
      <div className="orbit-tag tag-ai">
        <Icon name="spark" size={15} /> AI powered
      </div>
      <span className="orbit-spark spark-one">+</span>
      <span className="orbit-spark spark-two">+</span>
      <div className="orbit-label bottom">
        <span className="status-dot" /> ALWAYS BUILDING. ALWAYS LEARNING.
      </div>
    </div>
  );
}

function ProjectPreview({ id }: { id: string }) {
  return (
    <div className={`project-preview preview-${id}`} aria-hidden="true">
      <span className="preview-number">
        {String(projects.findIndex((p) => p.id === id) + 1).padStart(2, "0")} /
        SELECTED WORK
      </span>
      {id === "awaaz" && (
        <div className="mini-app voice-app">
          <div className="mini-sidebar">
            <b>
              <span className="voice-logo">ııı</span> awaaz <sup>AI</sup>
            </b>
            <small>WORKSPACE</small>
            <span className="mini-active">◈ &nbsp; Voice studio</span>
            <span>♫ &nbsp; Voice library</span>
            <span>◎ &nbsp; Voice cloning</span>
            <span>◇ &nbsp; Marketplace</span>
            <small className="sidebar-bottom">✧ Your ideas, amplified.</small>
          </div>
          <div className="mini-content">
            <div className="mini-toolbar">
              Voice studio <span>✧ Creative workspace</span>
            </div>
            <h4>Make every word resonate.</h4>
            <p>Turn your words into a voice that connects.</p>
            <div className="voice-input">
              Every great idea deserves to be heard.
              <span>
                Choose a voice <b>● Aria · Natural ⌄</b>
              </span>
            </div>
            <div className="waveform">
              {Array.from({ length: 45 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    height: `${10 + (Math.sin(i * 1.7) + 1) * 15 + (Math.cos(i * 0.4) + 1) * 8}px`,
                  }}
                />
              ))}
            </div>
            <div className="mini-bottom">
              <span>◉ Voice preview</span>
              <b>Generate speech ↗</b>
            </div>
          </div>
        </div>
      )}
      {id === "petro" && (
        <div className="mini-app petro-app">
          <div className="mini-sidebar">
            <b>
              <em>P</em> PetroSathi
            </b>
            <small>MANAGEMENT</small>
            <span className="mini-active">▦ &nbsp; Overview</span>
            <span>◷ &nbsp; Shift management</span>
            <span>▤ &nbsp; Sales reports</span>
            <span>◉ &nbsp; Fuel inventory</span>
            <span>♧ &nbsp; Employees</span>
          </div>
          <div className="mini-content">
            <div className="mini-toolbar">
              Station overview <span>Operations dashboard</span>
            </div>
            <h4>A good day starts with clarity.</h4>
            <div className="mini-stats">
              <div>
                Sales overview<b>Daily activity ↗</b>
              </div>
              <div>
                Station status<b>● Operational</b>
              </div>
            </div>
            <div className="chart-title">
              Fuel sales overview <span>Petrol · Diesel</span>
            </div>
            <div className="bar-chart">
              {[40, 60, 45, 80, 55, 90, 73, 98, 70, 87, 65, 100].map((h, i) => (
                <div key={i}>
                  <i style={{ height: `${h}%` }} />
                  <i style={{ height: `${h * 0.66}%` }} />
                </div>
              ))}
            </div>
            <div className="chart-axis">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      {id === "local" && (
        <div className="local-scene">
          <div className="local-nav">
            <b>
              <Icon name="pin" size={15} /> findmylocal.
            </b>
            <span>
              Discover &nbsp; Categories &nbsp; <b>List your business ↗</b>
            </span>
          </div>
          <div className="local-main">
            <span>YOUR NEIGHBOURHOOD, DISCOVERED</span>
            <h4>
              Find your next
              <br />
              <em>local favourite.</em>
            </h4>
            <div className="local-search">
              ⌕ What are you looking for? <b>Explore ↗</b>
            </div>
            <div className="local-categories">
              ☕ Cafés &nbsp; ⌂ Services &nbsp; ✳ Wellness
            </div>
          </div>
          <div className="map-art">
            <div className="map-road road-one" />
            <div className="map-road road-two" />
            <div className="map-road road-three" />
            {[1, 2, 3].map((n) => (
              <span className={`map-pin pin-${n}`} key={n}>
                <Icon name="pin" size={23} />
              </span>
            ))}
            <div className="map-note">
              ✦ Something great.
              <br />
              Just around the corner.
            </div>
          </div>
        </div>
      )}
      {id === "nfc" && (
        <div className="nfc-scene">
          <div className="nfc-copy">
            <Icon name="spark" size={26} />
            <h4>
              Small card.
              <br />
              Endless
              <br />
              <em>connections.</em>
            </h4>
            <span>NFC + DIGITAL IDENTITY</span>
          </div>
          <div className="business-card">
            <div className="card-top">
              hello<span>◔</span>
            </div>
            <div className="card-bottom">
              <span>
                Make your
                <br />
                next connection.
              </span>
              <div className="qr-art">
                {Array.from({ length: 49 }, (_, i) => (
                  <i
                    key={i}
                    className={
                      (i * 7 + Math.floor(i / 7) * 3) % 5 < 3 ? "filled" : ""
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="nfc-phone">
            <div className="phone-notch" />
            <div className="phone-avatar">a.</div>
            <b>Alex Morgan</b>
            <span>Designer & creator</span>
            <div className="phone-pill">Let’s connect ↗</div>
            <div className="phone-link">My work ↗</div>
            <div className="phone-link">Get in touch ↗</div>
          </div>
        </div>
      )}
      {id === "repair" && (
        <div className="repair-scene">
          <div className="repair-heading">
            <b>
              repair<span>care.</span>
            </b>
            <span>MADE SIMPLE</span>
          </div>
          <h4>Let’s get it working again.</h4>
          <p>A few simple steps. A fresh start for your device.</p>
          <div className="repair-steps">
            <b>1 Your device</b>
            <i />
            <span>2 The problem</span>
            <i />
            <span>3 All sorted</span>
          </div>
          <div className="device-options">
            <div className="chosen">
              <div className="device-phone" />
              Smartphone <span>✓</span>
            </div>
            <div>
              <div className="device-tablet" />
              Tablet
            </div>
            <div>
              <div className="device-laptop" />
              Laptop
            </div>
          </div>
        </div>
      )}
      {id === "newsletter" && (
        <div className="newsletter-scene">
          <div className="editor-tools">
            <b>Newsletter studio ✦</b>
            <span>YOUR TOOLBOX</span>
            {[
              "Τ Heading",
              "▧ Image",
              "▤ Text block",
              "▭ Button",
              "↔ Spacing",
            ].map((t) => (
              <div key={t}>{t}</div>
            ))}
            <small>Built for your brand.</small>
          </div>
          <div className="newsletter-paper">
            <div className="paper-brand">THE PICTURE HOUSE</div>
            <div className="movie-art">
              <span>
                THIS WEEK
                <br />
                <em>at the movies.</em>
              </span>
              <div className="movie-sun" />
            </div>
            <h4>Stories worth stepping out for.</h4>
            <div className="paper-lines" />
            <div className="paper-button">Explore this week’s films ↗</div>
          </div>
        </div>
      )}
      <span className="preview-caption">INTERFACE CONCEPT</span>
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const dialog = ref.current;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="dialog-title"
    >
      {project && (
        <>
          <button
            className="dialog-close icon-button"
            onClick={onClose}
            aria-label="Close project details"
          >
            <Icon name="close" />
          </button>
          <ProjectPreview id={project.id} />
          <div className="dialog-body">
            <span className="eyebrow">
              {project.category} / PROJECT OVERVIEW
            </span>
            <h2 id="dialog-title">{project.title}</h2>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h3>The product challenge</h3>
            <p>{project.challenge}</p>
            <h3>Inside the application</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="project-note">
              Project I’ve worked on. The visual above is an illustrative
              interface concept; the features listed are based on the project
              source.
            </p>
            <a
              className="button button-primary"
              href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's talk about ${project.title}`)}`}
            >
              Discuss this project <Icon />
            </a>
          </div>
        </>
      )}
    </dialog>
  );
}

const categories: Category[] = [
  "All work",
  "SaaS platforms",
  "Web applications",
  "AI products",
];
const navLinks = [
  { id: "work", label: "Selected work" },
  { id: "about", label: "About" },
  { id: "skills", label: "My toolkit" },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [category, setCategory] = useState<Category>("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      clearTimeout(copyTimer.current);
    };
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const visibleProjects = projects.filter(
    (p) => category === "All work" || p.category === category,
  );
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Select the email address to copy it.");
    }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus(""), 4000);
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="Govind Varfa home">
            <span className="brand-mark">
              g<span>v</span>
              <i />
            </span>
            <span>
              Govind Varfa
              <span className="brand-subtitle">DEVELOPER & MAKER</span>
            </span>
          </a>
          <nav
            id="main-nav"
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={activeSection === link.id ? "active" : ""}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <Icon size={16} />
            </a>
          </nav>
          <button
            className="menu-toggle icon-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-main">
            <div className="hero-content">
              <div className="eyebrow hero-eyebrow">
                <span className="status-dot" /> FULL-STACK DEVELOPER & AI
                ENTHUSIAST
              </div>
              <p className="hero-greeting">
                Hey, I’m Govind <span />
              </p>
              <h1>
                Turning ideas
                <br />
                into digital
                <br />
                <em>experiences.</em>
                <span className="heading-star">✳</span>
              </h1>
              <p className="hero-description">
                I build thoughtful websites and SaaS products.
                <br className="desktop-break" /> From the first interface to the
                logic behind it.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <Icon name="right" size={18} />
                </a>
                <a
                  className="button button-text"
                  href={`${import.meta.env.BASE_URL}govind-varfa-resume.pdf`}
                  download
                >
                  Download résumé <Icon name="download" size={17} />
                </a>
              </div>
              <div className="hero-current">
                <span className="company-icon">
                  51<span>↗</span>
                </span>
                <span>
                  Currently building at <strong>51DigitalMedia</strong>
                </span>
              </div>
            </div>
            <OrbitalVisual />
          </div>
          <div className="hero-bottom">
            <div className="hero-stats">
              <div>
                <strong>
                  01<span>+</span>
                </strong>
                <span>Year of experience</span>
              </div>
              <div>
                <strong>06</strong>
                <span>Selected projects</span>
              </div>
              <div>
                <strong>
                  MCA<span>↗</span>
                </strong>
                <span>Master’s in Computer Applications</span>
              </div>
            </div>
            <a href="#work" className="scroll-cue">
              SCROLL TO EXPLORE <Icon name="down" size={16} />
            </a>
          </div>
        </section>
        <div className="stack-strip">
          <div className="wrap strip-inner">
            <span className="strip-caption">
              IDEAS MEET
              <br />
              <b>THE RIGHT TOOLS.</b>
            </span>
            <span>
              <b className="react-symbol">⚛</b> React
            </span>
            <span>
              <b>≈</b> Tailwind CSS
            </span>
            <span>
              <b>⬡</b> Node.js
            </span>
            <span>
              <b>◇</b> Laravel
            </span>
            <span>
              <Icon name="database" size={22} /> SQL
            </span>
            <span>
              <Icon name="spark" size={23} /> AI agents
            </span>
          </div>
        </div>
        <section className="section wrap" id="work">
          <div className="section-kicker">
            <span>+</span> 01 / SELECTED WORK
          </div>
          <div className="section-heading">
            <h2>
              Built with purpose.
              <br />
              <em>Made to be used.</em>
            </h2>
            <p>
              A selection of the products I’ve worked on —
              <br className="desktop-break" /> across AI, business tools, and
              the everyday web.
            </p>
          </div>
          <div className="filter-bar" role="group" aria-label="Filter projects">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
                <span>
                  {item === "All work"
                    ? projects.length
                    : projects.filter((p) => p.category === item).length}
                </span>
              </button>
            ))}
            <span className="work-count" aria-live="polite">
              {String(visibleProjects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article
                className="project-card"
                key={project.id}
                style={{ "--index": index } as CSSProperties}
              >
                <button
                  className="preview-button"
                  onClick={() => setSelected(project)}
                  aria-label={`View ${project.title} project details`}
                >
                  <ProjectPreview id={project.id} />
                  <span className="preview-open">
                    <Icon size={22} />
                  </span>
                </button>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>DESIGN MEETS DEVELOPMENT</span>
                </div>
                <div className="project-title-row">
                  <h3>
                    <button onClick={() => setSelected(project)}>
                      {project.title}
                    </button>
                  </h3>
                  <button
                    className="project-arrow icon-button"
                    onClick={() => setSelected(project)}
                    aria-label={`Read about ${project.title}`}
                  >
                    <Icon />
                  </button>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="work-footer">
            <span>
              <span className="status-dot" /> Always exploring what I can build
              next.
            </span>
            <a href="#contact">
              Have a project in mind? <Icon size={17} />
            </a>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="wrap about-grid">
            <div className="about-left">
              <div className="section-kicker">
                <span>+</span> 02 / THE PERSON BEHIND THE CODE
              </div>
              <h2>
                A curious mind.
                <br />
                <em>A builder at heart.</em>
              </h2>
              <div className="identity-art" aria-hidden="true">
                <span className="identity-note">HELLO WORLD, I’M</span>
                <div className="identity-monogram">
                  gv<span>.</span>
                </div>
                <span className="identity-signature">Govind Varfa</span>
                <div className="identity-sticker">
                  <Icon name="code" size={20} /> MADE OF
                  <br />
                  CURIOSITY
                </div>
                <div className="identity-coordinate">
                  DEVELOPER · LEARNER · PROBLEM SOLVER
                </div>
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">
                I enjoy taking an idea and making it something people can
                actually use.
              </p>
              <p>
                I’m Govind Varfa, a full-stack developer at{" "}
                <strong>51DigitalMedia</strong> with one year of professional
                experience working across websites and SaaS applications. I work
                with React on the frontend, Node.js and Laravel on the backend,
                and SQL for the data in between.
              </p>
              <p>
                I’m also curious about what AI makes possible. Tools like
                Cursor, Codex, and ChatGPT are part of how I explore ideas, work
                through problems, and build software.
              </p>
              <div className="journey">
                <div className="journey-row">
                  <span className="journey-icon">
                    <Icon name="code" size={19} />
                  </span>
                  <div>
                    <span className="journey-label">THE WORK / CURRENT</span>
                    <h3>Full-stack Developer</h3>
                    <p>
                      51DigitalMedia <span>· 1 year of experience</span>
                    </p>
                  </div>
                  <span className="current-pill">CURRENT</span>
                </div>
                <div className="journey-row">
                  <span className="journey-icon">
                    <Icon name="code" size={19} />
                  </span>
                  <div>
                    <span className="journey-label">
                      THE FOUNDATION / EDUCATION
                    </span>
                    <h3>Master of Computer Applications</h3>
                    <p>
                      MCA <span>· Completed</span>
                    </p>
                    <h3 className="second-degree">
                      B.Sc. in Information Technology
                    </h3>
                    <p>
                      B.Sc. IT <span>· Completed</span>
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="inline-link"
                href={`${import.meta.env.BASE_URL}govind-varfa-resume.pdf`}
                download
              >
                A little more about my journey{" "}
                <Icon name="download" size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="section wrap" id="skills">
          <div className="section-kicker">
            <span>+</span> 03 / MY TOOLKIT
          </div>
          <div className="section-heading">
            <h2>
              The right tools.
              <br />
              <em>The builder’s mindset.</em>
            </h2>
            <p>
              Comfortable across the stack.
              <br />
              Curious about what comes next.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon name={group.icon} size={25} />
                  </span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="philosophy">
            <Icon name="spark" size={18} />
            <p>
              Good software starts with understanding the problem.{" "}
              <span>The tools come next.</span>
            </p>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="wrap">
            <div className="contact-top">
              <div className="section-kicker">
                <span>+</span> 04 / LET’S CONNECT
              </div>
              <span className="contact-small">
                GOOD THINGS START WITH A CONVERSATION.
              </span>
            </div>
            <div className="contact-grid">
              <div className="contact-copy">
                <h2>
                  Have an idea?
                  <br />
                  Let’s make it <em>real.</em>
                  <span>↗</span>
                </h2>
                <p>
                  A website, a SaaS product, or something we haven’t
                  <br className="desktop-break" /> thought of yet. I’d love to
                  hear about it.
                </p>
                <div className="email-row">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <button
                    className="icon-button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                  >
                    <Icon
                      name={copyStatus === "Email copied" ? "check" : "copy"}
                      size={18}
                    />
                  </button>
                </div>
                <span className="copy-status" role="status">
                  {copyStatus}
                </span>
              </div>
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  const data = new FormData(event.currentTarget);
                  const subject = `Portfolio enquiry from ${String(data.get("name")).trim()}`;
                  const body = `Hi Govind,\n\n${String(data.get("message")).trim()}\n\nFrom: ${String(data.get("name")).trim()}\nReply to: ${data.get("email")}`;
                  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  setEmailStatus(
                    "Continue in your email app and send the draft to get in touch. You can also email me directly.",
                  );
                }}
              >
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      name="name"
                      autoComplete="name"
                      placeholder="Alex Morgan"
                      required
                      maxLength={100}
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="alex@example.com"
                      required
                      maxLength={180}
                    />
                  </label>
                </div>
                <label>
                  What are you thinking?
                  <textarea
                    name="message"
                    placeholder="Tell me a little about your idea…"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={3}
                  />
                </label>
                <button className="button button-primary" type="submit">
                  Let’s start a conversation <Icon size={18} />
                </button>
                <p className="form-note" role="status">
                  {emailStatus ||
                    "Opens your email app with a ready-to-send draft."}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="footer-name" href="#top">
          Govind Varfa<span>.</span>
        </a>
        <span>
          © {new Date().getFullYear()} · Thoughtfully built with React.
        </span>
        <a className="back-top" href="#top">
          BACK TO TOP <Icon size={16} />
        </a>
      </footer>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
export default App;
