const PORTFOLIO = {
  name: "Alex Chen",
  initials: "AC",
  role: "Software Engineer",
  tagline: "Building clean, scalable systems & elegant interfaces.",
  bio: "Passionate about full-stack development, open source, and turning complex problems into simple solutions. I enjoy working with modern web technologies and contributing to the developer community.",
  email: "alex.chen@email.com",
  location: "San Francisco, CA",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",

  stats: [
    { value: "12+", label: "Projects" },
    { value: "5", label: "Years Exp." },
    { value: "8", label: "Technologies" },
    { value: "3", label: "Open Source" },
  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "REST APIs",
  ],

  projects: [
    {
      slug: "devflow",
      title: "DevFlow — Task Automation CLI",
      summary:
        "CLI tool that automates git hooks, linting, and deployment pipelines with a plugin architecture.",
      fullDescription: [
        "DevFlow is a command-line tool built to eliminate repetitive tasks from daily development workflows. It wraps git hooks, lint runners, test suites, and deploy scripts into a single configurable pipeline.",
        "The plugin system lets teams add custom steps without forking the core. Configuration lives in a simple YAML file, and each stage reports clear pass/fail output with timing metrics.",
        "I built this after noticing our team spent ~30 minutes daily on manual pre-push checks. DevFlow reduced that to under 2 minutes while improving consistency across environments.",
      ],
      highlights: [
        "Plugin-based pipeline architecture",
        "YAML config with environment overrides",
        "Parallel stage execution for faster runs",
        "Cross-platform support (Windows, macOS, Linux)",
      ],
      tags: ["Node.js", "CLI", "Open Source"],
      github: "https://github.com/yourusername/devflow",
      video: "assets/videos/devflow-demo.mp4",
      thumbnail: "assets/images/projects/devflow-1.svg",
      screenshots: [
        {
          src: "assets/images/projects/devflow-1.svg",
          caption: "CLI pipeline overview — stages run in sequence with live status",
        },
        {
          src: "assets/images/projects/devflow-2.svg",
          caption: "Plugin configuration and custom stage definitions",
        },
        {
          src: "assets/images/projects/devflow-3.svg",
          caption: "Deployment summary with timing and exit codes",
        },
      ],
    },
    {
      slug: "nexus-dashboard",
      title: "Nexus Dashboard",
      summary:
        "Real-time analytics dashboard with WebSocket updates, widgets, and role-based access control.",
      fullDescription: [
        "Nexus Dashboard is a full-stack monitoring interface for microservices. It aggregates metrics from multiple backends and streams live updates over WebSockets so teams see incidents as they happen.",
        "Users can arrange draggable widgets — charts, log tailers, health checks — and save layouts per role. Admins get full visibility; on-call engineers see a focused incident view.",
        "The frontend uses React with a lightweight state layer; the backend proxies service health endpoints and normalizes responses into a unified schema.",
      ],
      highlights: [
        "Live WebSocket metric streaming",
        "Drag-and-drop widget layouts",
        "Role-based views and permissions",
        "Dark theme optimized for NOC screens",
      ],
      tags: ["React", "TypeScript", "WebSocket"],
      github: "https://github.com/yourusername/nexus-dashboard",
      video: "assets/videos/nexus-dashboard-demo.mp4",
      thumbnail: "assets/images/projects/nexus-1.svg",
      screenshots: [
        {
          src: "assets/images/projects/nexus-1.svg",
          caption: "Main dashboard with service health overview",
        },
        {
          src: "assets/images/projects/nexus-2.svg",
          caption: "Custom widget layout editor",
        },
        {
          src: "assets/images/projects/nexus-3.svg",
          caption: "Real-time alert stream and incident panel",
        },
      ],
    },
    {
      slug: "api-gateway",
      title: "API Gateway Microservice",
      summary:
        "Lightweight gateway with rate limiting, JWT auth, and Redis-backed caching at 10k+ req/s.",
      fullDescription: [
        "This API gateway sits in front of internal microservices and handles authentication, rate limiting, request routing, and response caching. It is built with FastAPI for async performance and uses Redis for distributed rate-limit counters.",
        "JWT validation runs on every request with configurable issuer and audience checks. Routes map to upstream services via a declarative config file, making it easy to add new endpoints without code changes.",
        "Load tests showed stable throughput above 10,000 requests per second on a modest 2-vCPU instance, with p99 latency under 45ms for cached responses.",
      ],
      highlights: [
        "JWT authentication middleware",
        "Sliding-window rate limiting via Redis",
        "Declarative route configuration",
        "Structured logging and request tracing",
      ],
      tags: ["Python", "FastAPI", "Redis"],
      github: "https://github.com/yourusername/api-gateway",
      video: "assets/videos/api-gateway-demo.mp4",
      thumbnail: "assets/images/projects/gateway-1.svg",
      screenshots: [
        {
          src: "assets/images/projects/gateway-1.svg",
          caption: "Route configuration and upstream service mapping",
        },
        {
          src: "assets/images/projects/gateway-2.svg",
          caption: "Rate limit dashboard and blocked request logs",
        },
      ],
    },
    {
      slug: "pixel-portfolio",
      title: "Pixel Portfolio Generator",
      summary:
        "Markdown-driven static site generator for developer portfolios with one-command deploy.",
      fullDescription: [
        "Pixel Portfolio Generator turns Markdown files and a JSON config into a polished static portfolio site. It supports dark/light themes, project pages, and automatic sitemap generation.",
        "Written in Go for fast builds, it compiles a full site in under 200ms. A single command deploys to GitHub Pages via the gh CLI.",
        "The goal was a zero-JavaScript-runtime portfolio tool — output is pure HTML/CSS that loads instantly and ranks well for SEO.",
      ],
      highlights: [
        "Markdown + JSON content model",
        "Built-in dark/light theme switching",
        "GitHub Pages deploy command",
        "Sub-200ms build times",
      ],
      tags: ["Go", "SSG", "GitHub Pages"],
      github: "https://github.com/yourusername/pixel-portfolio",
      video: "assets/videos/pixel-portfolio-demo.mp4",
      thumbnail: "assets/images/projects/pixel-1.svg",
      screenshots: [
        {
          src: "assets/images/projects/pixel-1.svg",
          caption: "Generated portfolio home page preview",
        },
        {
          src: "assets/images/projects/pixel-2.svg",
          caption: "Project detail page template output",
        },
        {
          src: "assets/images/projects/pixel-3.svg",
          caption: "Theme toggle — dark and light variants",
        },
      ],
    },
  ],

  education: [
    {
      date: "2018 — 2022",
      degree: "B.S. Computer Science",
      institution: "University of California, Berkeley",
      description:
        "Focus on distributed systems and software engineering. Dean's List. Capstone: real-time collaborative code editor.",
    },
    {
      date: "2023",
      degree: "AWS Solutions Architect — Associate",
      institution: "Amazon Web Services",
      description:
        "Certification covering cloud architecture, security, and cost optimization on AWS.",
    },
    {
      date: "2022",
      degree: "Full-Stack Web Development",
      institution: "freeCodeCamp",
      description:
        "600+ hours covering responsive design, JavaScript algorithms, APIs, and microservices.",
    },
  ],

  recommendations: [
    {
      quote:
        "Alex consistently delivers high-quality code and thinks deeply about architecture. Their DevFlow project saved our team hours every week.",
      name: "Sarah Mitchell",
      role: "Engineering Lead · TechCorp",
      initials: "SM",
      rating: 5,
    },
    {
      quote:
        "One of the most reliable collaborators I've worked with. Strong communicator, fast learner, and always willing to mentor junior developers.",
      name: "James Rodriguez",
      role: "Senior Developer · StartupXYZ",
      initials: "JR",
      rating: 5,
    },
    {
      quote:
        "The Nexus Dashboard Alex built transformed how we monitor our services. Clean UI, rock-solid backend, and excellent documentation.",
      name: "Emily Watson",
      role: "Product Manager · DataFlow Inc",
      initials: "EW",
      rating: 5,
    },
    {
      quote:
        "Alex's open-source contributions are thoughtful and well-tested. A true asset to any engineering team.",
      name: "David Kim",
      role: "Open Source Maintainer",
      initials: "DK",
      rating: 5,
    },
  ],
};
