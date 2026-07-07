const PORTFOLIO = {
  name: "Muhammad Hasham",
  initials: "MH",
role:"Software Engineering Student | AI Engineer",
tagline:"Building AI-powered applications, scalable backend systems, and production-ready software.",

bio:"Software Engineering student at FAST-NUCES currently building an AI-powered stock market analysis platform. Experienced in Python, FastAPI, React, C++, SQL, Linux, machine learning, and data structures, with projects spanning full-stack development, operating systems, and intelligent analytics.",
  email: "hashamrashid55@gmail.com",
  location: "Faisalabad, Punjab, Pakistan",

  github: "https://github.com/hashamrashid55-cmd",
  linkedin: "https://linkedin.com/in/muhammad--hasham",
  portfolio: "https://hashamrashid55-cmd.github.io/Projects",

  phone: "03027092522",

  stats: [
    { value: "10+", label: "Projects" },
    { value: "4+", label: "Major Systems" },
    { value: "8+", label: "Technologies" },
    { value: "3.67", label: "Latest SGPA" },
  ],

  skills: [
    "Python",
    "FastAPI",
    "React",
    "SQL",
    "C++",
    "Linux",
    "Machine Learning",
    "Data Structures",
    "REST APIs",
    "Node.js",
    "MySQL",
    "Git",
  ],

  projects: [

    {
      slug: "fitcore",
      title: "FitCore",
      summary:
        "Full-stack fitness management system with scalable REST APIs and analytics dashboards.",
      fullDescription: [
        "Built a complete fitness management platform using React, Node.js, and MySQL.",
        "Implemented scalable backend APIs and modern frontend architecture.",
        "Developed separate dashboards for administrators and users with analytics and management features.",
      ],
      highlights: [
        "React + Node.js architecture",
        "REST API development",
        "MySQL database integration",
        "Analytics dashboards",
      ],
      tags: ["React", "Node.js", "MySQL"],
      github: "https://github.com/hashamrashid55-cmd/Fitness-wellness-Database",
      video: "assets/videos/fitcore-demo.mp4",
      thumbnail: "assets/images/fitcore.png",
      screenshots: [],
      // Put files in assets/docs/ then list them here, e.g.:
      // { title: "Architecture", description: "System design overview", file: "assets/docs/fitcore-architecture.pdf" }
      documents: [],
    },

    {
      slug: "marineguard",
      title: "MarineGuard",
      summary:
        "Machine learning system predicting maritime piracy risks using historical incident data.",
      fullDescription: [
        "Built an end-to-end ML pipeline trained on over 6,500 maritime piracy incidents.",
        "Used Gradient Boosting models to predict attack risk and identify high-risk regions.",
        "Created interactive dashboards with Streamlit and Plotly for geospatial visualization and analytics.",
      ],
      highlights: [
        "Gradient Boosting model",
        "6,500+ incident dataset",
        "Interactive Streamlit dashboard",
        "Plotly geospatial analytics",
      ],
      tags: ["Python", "Machine Learning", "Streamlit"],
      github: "https://github.com/Mzt00/MarineGuard",
      video: "assets/videos/marineguard-demo.mp4",
      thumbnail: "assets/images/marine.png",
      screenshots: [],
      documents: [],
    },

    {
      slug: "Getinvestage",
      title: "Getinvestage",
      summary:
        "AI-powered stock market analysis platform with real-time data and a RAG-grounded research assistant.",
      fullDescription: ["Getinvestage turns scattered, jargon-heavy market data into clear, instant answers — solving the problem every retail investor faces: too much noise, too little insight, and no time to dig through it",
      "Built on a fast React terminal-style dashboard and a Python/FastAPI backend pulling live data (Finnhub + Yahoo), it puts real-time quotes, charts, and fundamentals in one clean, deployed workspace",
      "Its RAG-first architecture goes further than a dashboard: a grounded AI research assistant that answers real questions with cited sources and live numbers — not another ChatGPT wrapper, but analysis you can actually trust"
   ],
      highlights: [
"        ⚡ Real-time market data — quotes, charts, fundamentals, and watchlists via Finnhub + Yahoo.",
"🖥️ Terminal-style dashboard — fast, clean, and built for people who read markets, not decorations.",
"🤖 Grounded AI assistant (RAG-first) — ask real questions, get answers with citations and live figures.",
"🛡️ Reliable by design — caching, graceful fallbacks, and handled error states so the data is always there.",
"🚀 Deployed and open — live URL, CI/CD pipeline, clean FastAPI + React architecture."
   ],
      tags: ["Python", "Fast-Api", "RAG", "Agentic AI", "Langchain"],
      github: "https://github.com/hashamrashid55-cmd/Stock-market",
      video: "",
      thumbnail: "assets/images/stockmarket.png",
      screenshots: [
        { src: "assets/images/stockmarket.png", caption: "Dashboard overview" },
        { src: "assets/images/stockmarket2.png", caption: "Market analysis view" },
      ],
      documents: [],
    },

    {
      slug: "skynet-atc",
      title: "SkyNet Air Traffic Control Simulator",
      summary:
        "Real-time air traffic control simulator built entirely in C++ with custom data structures.",
      fullDescription: [
        "Developed a simulator managing flight operations and emergency protocols.",
        "Implemented weighted directed graphs, AVL trees, min-heaps, and hash tables from scratch without STL.",
        "Focused on efficient scheduling and high-performance data management.",
      ],
      highlights: [
        "Custom graph implementation",
        "AVL trees without STL",
        "Min-heaps and hash tables",
        "Real-time simulation",
      ],
      tags: ["C++", "Data Structures"],
      github: "https://github.com/hashamrashid55-cmd/ATC_simulator",
      video: "assets/videos/skynet-demo.mp4",
      thumbnail: "assets/images/projects/skynet.svg",
      screenshots: [],
      documents: [],
    },

    {
      slug: "leunuxos",
      title: "LeunuxOS",
      summary:
        "A modular operating system simulation implementing scheduling, memory management, and IPC in C.",
      fullDescription: [
        "Built a modular OS simulator featuring process scheduling and memory management.",
        "Implemented synchronization mechanisms, IPC, and a virtual file system.",
        "Designed scalable kernel-like architecture with concurrency control.",
      ],
      highlights: [
        "Process scheduling",
        "Memory management",
        "Inter-process communication",
        "Virtual file system",
      ],
      tags: ["C", "Operating Systems", "Systems Programming"],
      github: "https://github.com/hashamrashid55-cmd/LunuxOS-Operating-System-Lab-Project-",
      video: "assets/videos/leunuxos-demo.mp4",
      thumbnail: "assets/images/projects/leunuxos.svg",
      screenshots: [],
      documents: [],
    },
  ],

  // Resources page — books, notes, and blog-style thoughts.
  // type: "book" | "notes" | "thought"
  // Optional per entry: file (download — put files in assets/resources/), link (external URL), tags
  resources: [
    {
      type: "thought",
      title: "Welcome to my resources page",
      date: "2026-07-06",
      tags: ["Meta"],
      body: [
        "This is where I share books I'm reading, course notes, and my thoughts on software engineering and AI.",
        "To add a post, edit the resources array in js/data.js — each entry becomes a card on this page, newest first.",
      ],
    },
    {
      type: "notes",
      title: "Data Structures & Algorithms Notes",
      date: "2026-07-05",
      tags: ["C++", "DSA"],
      body: [
        "Working notes from my data structures coursework at FAST-NUCES — AVL trees, heaps, graphs, and hash tables, including the implementations used in the SkyNet ATC simulator.",
      ],
      // file: "assets/resources/dsa-notes.pdf",
    },
    {
      type: "book",
      title: "Currently Reading",
      date: "2026-07-04",
      tags: ["Reading List"],
      body: [
        "Add books here with a short review or key takeaways. Attach a link to the book, or a PDF of your summary notes.",
      ],
      // link: "https://example.com/book",
    },
  ],

  education: [
    {
      date: "2024 – Present",
      degree: "Bachelor of Software Engineering",
      institution: "FAST-NUCES",
      description:
        "Current CGPA: 3.20 (after four semesters). Semester 4 SGPA: 3.67.",
    },
    {     
      date: "2022 – 2024",
      degree: "A-Level",
      institution: "First Steps School of Arts and Sciences",
      description:
        "Achieved 3 As and 1 B in Accounting, Business, Economics, Mathematics, and IT. Served as President of the Student Council and represented the school as an All Pakistan National Debater.",
    },
    {
      date: "2019 – 2021",
      degree: "O-Level",
      institution: "Divisional Model College",
      description:
        "Achieved 6 A* and 3 A grades and earned a Provincial Distinction in Cambridge International Examinations.",
    },
  ],

  recommendations: [
    {
      quote:
        "Passionate about building production-ready software with a strong focus on backend engineering and AI-driven applications.",
      name: "Portfolio Highlight",
      role: "Software Engineering Student",
      initials: "MH",
      rating: 5,
    },
  ],
};