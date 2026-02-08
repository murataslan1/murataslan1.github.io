const logotext = "MURAT ASLAN";
const meta = {
  title: "Murat Aslan | Open Source Developer",
  description:
    "Full Stack Developer & Open Source Contributor with 26+ merged PRs to major projects like VS Code, Coolify, LangChain, Traefik, Deno, and more.",
  siteUrl: "https://murataslan1.github.io/",
  image: "https://media.licdn.com/dms/image/v2/D4D03AQEtN-l5vaagwA/profile-displayphoto-shrink_400_400/B4DZX7VVchG8Ag-/0/1743678430029?e=1771459200&v=beta&t=ltnrcKA62_7n5JTiFpnq0q0zKH-ZSOxDd_TYjWeGTig",
  role: "Full Stack Developer",
  location: "Ankara, Turkey"
};

const introdata = {
  title: "I'm Murat Aslan",
  animated: {
    first: "Open Source Contributor 🚀",
    second: "26+ Merged PRs to Major Projects",
    third: "Microsoft | LangChain | Deno | Coolify",
    fourth: "Full Stack Developer"
  },
  description:
    "Passionate open source contributor with 26+ merged pull requests to major projects including VS Code (165k⭐), Coolify (40k⭐), LangChain.js, Traefik (54k⭐), Deno, Trivy, and more. Full stack developer with 222 public repos, specializing in TypeScript, Go, and Cloud Native technologies.",
  your_img_url: "https://media.licdn.com/dms/image/v2/D4D03AQEtN-l5vaagwA/profile-displayphoto-shrink_400_400/B4DZX7VVchG8Ag-/0/1743678430029?e=1771459200&v=beta&t=ltnrcKA62_7n5JTiFpnq0q0zKH-ZSOxDd_TYjWeGTig"
};

const dataabout = {
  title: "About Me",
  aboutme:
    "I'm a passionate Full Stack Developer and Open Source enthusiast based in Ankara, Turkey. I believe in the power of open source to drive innovation and collaboration. As of February 2026, I've contributed 26+ merged pull requests to major projects like VS Code, LangChain.js, Coolify, Deno, Traefik, Trivy, and many more. With 222 public repositories and 69 followers, I love finding bugs, improving documentation, and adding new features to projects that millions of developers use daily."
};

const worktimeline = [
  {
    jobtitle: "Open Source Contributor",
    where: "VS Code, Cortex, Coolify",
    date: "2025-2026"
  },
  {
    jobtitle: "Full Stack Developer",
    where: "Various Projects",
    date: "2023-Present"
  },
  {
    jobtitle: "Software Engineer",
    where: "Freelance",
    date: "2021-2023"
  }
];

const skills = [
  {
    name: "TypeScript/JavaScript",
    value: 95
  },
  {
    name: "React/Next.js",
    value: 90
  },
  {
    name: "Go",
    value: 85
  },
  {
    name: "PHP/Laravel",
    value: 85
  },
  {
    name: "Docker/Kubernetes",
    value: 80
  },
  {
    name: "Python",
    value: 75
  },
  {
    name: "Rust",
    value: 70
  }
];

const services = [
  {
    title: "Open Source Contributions",
    description:
      "26+ merged PRs to major projects: VS Code (165k⭐), Coolify (40k⭐), LangChain.js, Traefik (54k⭐), Deno, Trivy, and more."
  },
  {
    title: "Full Stack Development",
    description:
      "Building modern web applications with React, Next.js, Node.js, and cloud-native technologies. Expert in TypeScript and Go."
  },
  {
    title: "DevOps & Cloud",
    description:
      "Containerization with Docker, orchestration with Kubernetes, CI/CD pipelines, and cloud infrastructure on AWS, Azure, and GCP."
  }
];

const currentFocus = [
  {
    title: "Open Source Impact",
    desc: "Shipping fixes and features to projects used by millions of developers."
  },
  {
    title: "Cloud Native Systems",
    desc: "Building reliable services with Go, Kubernetes, and modern infra."
  },
  {
    title: "Developer Experience",
    desc: "Improving workflows, tooling, and internal platforms."
  }
];

const resume = {
  url: "",
  label: "Download CV"
};

const dataportfolio = [
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/cursor-ai-tips",
    title: "Cursor AI Tips",
    desctiption: "Cursor AI IDE tips, tricks & best practices - 169⭐ community resource",
    link: "https://github.com/murataslan1/cursor-ai-tips",
    tags: ["Original", "AI"],
    stack: ["Documentation", "Developer Tools"],
    featured: true,
    caseStudy: {
      problem: "Cursor AI users lacked a central resource for tips and best practices.",
      contribution: "Created comprehensive guide with keyboard shortcuts, Composer mode tips, and .cursorrules examples.",
      impact: "169+ stars and growing community of Cursor AI enthusiasts."
    },
    testimonial: {
      quote: "This is exactly what the Cursor community needed. Great work!",
      author: "Community",
      role: "Cursor Users"
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/cortexlinux/cortex",
    title: "Cortex Linux",
    desctiption: "Cortex Linux - Implemented Docker Permission Fixer tool (Bounty Hunt) 🚀",
    link: "https://github.com/cortexlinux/cortex/pull/460",
    tags: ["Open Source", "Bounty"],
    stack: ["Linux", "DevOps"],
    featured: true,
    caseStudy: {
      problem: "Contributor setup failed due to Docker permission mismatches on Linux.",
      contribution: "Built a permissions fixer to make local setup predictable and safe.",
      impact: "Reduced onboarding friction for new contributors and bounty participants."
    },
    testimonial: {
      quote: "Excellent bounty submission! This solves a real pain point for our contributors.",
      author: "CX Linux Team",
      role: "Maintainers"
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/ai-agent-benchmark",
    title: "AI Agent Benchmark",
    desctiption: "AI Agent Benchmark - The definitive comparison of AI coding agents (Jan 2026 Data)",
    link: "https://github.com/murataslan1/ai-agent-benchmark",
    tags: ["Research", "AI"],
    stack: ["Data", "Web"],
    featured: true,
    caseStudy: {
      problem: "No transparent, reproducible way to compare coding agents.",
      contribution: "Built a benchmark harness with repeatable tasks and scoring.",
      impact: "Created a public reference dataset for agent performance discussions."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/microsoft/vscode",
    title: "VS Code",
    desctiption: "VS Code - 11 PRs: Test coverage, lifecycle fixes, UX improvements (165k⭐)",
    link: "https://github.com/microsoft/vscode/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["TypeScript", "Developer Tools"],
    featured: true,
    caseStudy: {
      problem: "Regression risk in core extension workflows and UX inconsistencies.",
      contribution: "Added targeted tests, fixed terminal lifecycle hacks, improved extension restart notifications.",
      impact: "Improved reliability for daily developer tooling usage across millions of users."
    },
    testimonial: {
      quote: "Clean PR with good test coverage. Thanks for the contribution!",
      author: "VS Code Team",
      role: "Microsoft"
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/local-ai-coding-guide",
    title: "Local AI Coding Guide",
    desctiption: "Comprehensive guide for running AI coding assistants locally - 13⭐",
    link: "https://github.com/murataslan1/local-ai-coding-guide",
    tags: ["Original", "AI"],
    stack: ["Python", "Documentation"],
    featured: true,
    caseStudy: {
      problem: "Developers needed guidance on running AI tools locally for privacy and cost.",
      contribution: "Created step-by-step guide for local LLM setup with various tools.",
      impact: "Helping developers code with AI without cloud dependencies."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/coollabsio/coolify",
    title: "Coolify",
    desctiption: "Coolify - 21 PRs: Docker fixes, Unicode support, SSH timeout, backup features ($100+ Bounty)",
    link: "https://github.com/coollabsio/coolify/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "DevOps"],
    stack: ["Cloud", "Docker"],
    featured: true,
    caseStudy: {
      problem: "Various bugs affecting deployment workflows, SSH timeouts, and server management.",
      contribution: "Fixed Docker version detection, added Unicode support, improved IP validation, SSH timeout fixes.",
      impact: "$100+ bounty earned, improved experience for thousands of self-hosters."
    },
    testimonial: {
      quote: "Solid fix! SSH timeout was a pain point for many users. Great work!",
      author: "@andrasbacsai",
      role: "Coolify Creator"
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/mindsdb/mindsdb",
    title: "MindsDB",
    desctiption: "MindsDB - Added S3 Region support for integrations (26k⭐)",
    link: "https://github.com/mindsdb/mindsdb/pull/12004",
    tags: ["Open Source", "Data"],
    stack: ["Databases", "Python"]
  },
  {
    img: "https://opengraph.githubassets.com/1/denoland/std",
    title: "Deno Standard Library",
    desctiption: "Deno Standard Library - 2 PRs: CSV parsing fix, Dedent logic (3.5k⭐)",
    link: "https://github.com/denoland/std/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["TypeScript", "Runtime"],
    testimonial: {
      quote: "Nice catch on the CSV edge case! Clean fix.",
      author: "@dsherret",
      role: "Deno Team"
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/traefik/traefik",
    title: "Traefik",
    desctiption: "Traefik - 4 PRs: ForwardAuth logging improvements & UI Fixes (54k⭐)",
    link: "https://github.com/traefik/traefik/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Infra"],
    stack: ["Networking", "Go"],
    testimonial: {
      quote: "Thanks for the logging improvement! This helps with debugging.",
      author: "Traefik Team",
      role: "Maintainers"
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/milvus-io/milvus",
    title: "Milvus",
    desctiption: "Milvus - 6 PRs: fnmatch optimization, debug logs, Go client HNSW index support (32k⭐)",
    link: "https://github.com/milvus-io/milvus/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Data"],
    stack: ["Databases", "Cloud"]
  },
  {
    img: "https://opengraph.githubassets.com/1/langchain-ai/langchainjs",
    title: "LangChain.js",
    desctiption: "LangChain.js - Contributions to the JS/TS LLM framework",
    link: "https://github.com/langchain-ai/langchainjs/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "LLM"]
  },
  {
    img: "https://opengraph.githubassets.com/1/facebookresearch/faiss",
    title: "FAISS",
    desctiption: "FAISS - 2 PRs to Meta's vector similarity search library (33k⭐)",
    link: "https://github.com/facebookresearch/faiss/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["C++", "Python"]
  },
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/awesome-devops-cheatsheet",
    title: "DevOps Cheatsheet",
    desctiption: "Comprehensive DevOps cheatsheet - Docker, Kubernetes, Terraform, CI/CD",
    link: "https://github.com/murataslan1/awesome-devops-cheatsheet",
    tags: ["Original", "DevOps"],
    stack: ["Documentation", "Infrastructure"]
  },
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/awesome-ai-tools-2025",
    title: "Awesome AI Tools 2025",
    desctiption: "Curated list of the best AI tools - Chatbots, Code Assistants, Image/Video Gen",
    link: "https://github.com/murataslan1/awesome-ai-tools-2025",
    tags: ["Original", "AI"],
    stack: ["Documentation", "Curation"]
  },
  {
    img: "https://opengraph.githubassets.com/1/SigNoz/signoz",
    title: "SigNoz",
    desctiption: "SigNoz - 5 PRs: Linting, clickable URLs, version comparison, quick filters fixes",
    link: "https://github.com/SigNoz/signoz/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Observability"],
    stack: ["Go", "React"],
    featured: true,
    caseStudy: {
      problem: "Multiple UX issues in the observability dashboard affecting user experience.",
      contribution: "Enabled staticcheck linter, made URLs clickable, fixed version comparison logic.",
      impact: "Improved code quality and user experience for the open-source APM platform."
    },
    testimonial: {
      quote: "Great additions to code quality! The linter catches real bugs.",
      author: "SigNoz Team",
      role: "Maintainers"
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/projectdiscovery/nuclei-templates",
    title: "Nuclei Templates",
    desctiption: "Nuclei Templates - 5 PRs: CVE detection templates, false positive fixes (ProjectDiscovery)",
    link: "https://github.com/projectdiscovery/nuclei-templates/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Security"],
    stack: ["Security", "YAML"],
    featured: true,
    caseStudy: {
      problem: "Missing vulnerability detection templates and false positive issues.",
      contribution: "Added CVE-2025-10210/10211 templates, fixed mailgun takeover false positive.",
      impact: "Enhanced security scanning coverage for thousands of security researchers."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/cxlinux-ai/cx-core",
    title: "CX Linux (Cortex)",
    desctiption: "CX Linux - 5 PRs: Docker Permission Fixer, Printer Wizard, Package Manager (Bounty)",
    link: "https://github.com/cxlinux-ai/cx-core/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Bounty"],
    stack: ["Linux", "DevOps"],
    featured: true,
    caseStudy: {
      problem: "Linux users needed automated tools for Docker permissions, printers, and package management.",
      contribution: "Built Docker permission fixer, printer auto-setup wizard, unified Snap/Flatpak manager.",
      impact: "Won multiple bounties, reduced onboarding friction for new Linux users."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/jgraph/drawio-desktop",
    title: "Draw.io Desktop",
    desctiption: "Draw.io Desktop - 3 PRs: Update dialog, autoupdate caching, Ubuntu dock icon fix",
    link: "https://github.com/jgraph/drawio-desktop/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["Electron", "JavaScript"],
    featured: true,
    caseStudy: {
      problem: "Desktop app had UX issues with updates and Linux integration.",
      contribution: "Added app name to update dialog, cached autoupdate checks, fixed Ubuntu dock icon.",
      impact: "Improved desktop experience for millions of Draw.io users."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/schollz/croc",
    title: "Croc",
    desctiption: "Croc - 3 PRs: BusyBox compatibility, progress bar for resume, Podman docs",
    link: "https://github.com/schollz/croc/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "CLI"],
    stack: ["Go", "Networking"],
    featured: true,
    caseStudy: {
      problem: "Install script failed on minimal systems and lacked resume progress feedback.",
      contribution: "Added BusyBox fallback, progress bar for checking existing data, Podman docs.",
      impact: "Expanded compatibility for embedded systems and improved transfer UX."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/termux/termux-packages",
    title: "Termux Packages",
    desctiption: "Termux Packages - 2 PRs: Added opustags package, improved lint script",
    link: "https://github.com/termux/termux-packages/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Android"],
    stack: ["Shell", "Linux"]
  },
  {
    img: "https://opengraph.githubassets.com/1/perspective-dev/perspective",
    title: "Perspective",
    desctiption: "Perspective - 2 PRs: D3FC tooltip date formatting, join aggregate size limit",
    link: "https://github.com/perspective-dev/perspective/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Data"],
    stack: ["JavaScript", "WebAssembly"]
  },
  {
    img: "https://opengraph.githubassets.com/1/OpenBB-finance/OpenBB",
    title: "OpenBB Finance",
    desctiption: "OpenBB Finance - 2 PRs: yfinance version fix, outdated examples update",
    link: "https://github.com/OpenBB-finance/OpenBB/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Finance"],
    stack: ["Python", "Data"]
  },
  {
    img: "https://opengraph.githubassets.com/1/greenbone/openvas-scanner",
    title: "Greenbone OpenVAS",
    desctiption: "Greenbone OpenVAS - 2 PRs: Credential validation, Ansible deployment docs",
    link: "https://github.com/greenbone/openvas-scanner/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Security"],
    stack: ["C", "Security"]
  },
  {
    img: "https://opengraph.githubassets.com/1/jj-vcs/jj",
    title: "JJ (Jujutsu VCS)",
    desctiption: "JJ VCS - 2 PRs: ASCII graphs in help docs, prevent undo to root operation",
    link: "https://github.com/jj-vcs/jj/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["Rust", "Git"]
  },
  {
    img: "https://opengraph.githubassets.com/1/microsoft/vscode-mermAId",
    title: "VS Code MermAId",
    desctiption: "VS Code MermAId - 2 PRs: Export context menu, README docs update",
    link: "https://github.com/microsoft/vscode-mermAId/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["TypeScript", "VS Code"]
  },
  {
    img: "https://opengraph.githubassets.com/1/aquasecurity/trivy",
    title: "Trivy",
    desctiption: "Trivy - Added Symfony default secret key detection (Aqua Security)",
    link: "https://github.com/aquasecurity/trivy/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Security"],
    stack: ["Go", "Security"]
  },
  {
    img: "https://opengraph.githubassets.com/1/oven-sh/bun",
    title: "Bun",
    desctiption: "Bun - Fixed console.assert() to add 'Assertion failed:' prefix",
    link: "https://github.com/oven-sh/bun/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Runtime"],
    stack: ["Zig", "JavaScript"]
  },
  {
    img: "https://opengraph.githubassets.com/1/appwrite/appwrite",
    title: "Appwrite",
    desctiption: "Appwrite - Added missing Spanish translations for session alerts",
    link: "https://github.com/appwrite/appwrite/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Backend"],
    stack: ["PHP", "i18n"]
  },
  {
    img: "https://opengraph.githubassets.com/1/supabase/supabase",
    title: "Supabase",
    desctiption: "Supabase - Added OAuth sign-in example to SvelteKit SSR guide",
    link: "https://github.com/supabase/supabase/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Backend"],
    stack: ["Documentation", "SvelteKit"]
  },
  {
    img: "https://opengraph.githubassets.com/1/prisma/prisma",
    title: "Prisma",
    desctiption: "Prisma - Improved findMany JSDoc documentation",
    link: "https://github.com/prisma/prisma/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Database"],
    stack: ["TypeScript", "Documentation"]
  },
  {
    img: "https://opengraph.githubassets.com/1/shadcn-ui/ui",
    title: "shadcn/ui",
    desctiption: "shadcn/ui - Fixed CSS variable syntax for Tailwind v4 compatibility",
    link: "https://github.com/shadcn-ui/ui/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "UI"],
    stack: ["React", "Tailwind"]
  },
  {
    img: "https://opengraph.githubassets.com/1/vercel/ai",
    title: "Vercel AI SDK",
    desctiption: "Vercel AI SDK - Fixed gateway tool-approval-response filter",
    link: "https://github.com/vercel/ai/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "AI"]
  },
  {
    img: "https://opengraph.githubassets.com/1/dotnet/aspire",
    title: "ASP.NET Aspire",
    desctiption: "ASP.NET Aspire - Fixed warning icon consistency for unresolved parameters",
    link: "https://github.com/dotnet/aspire/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", ".NET"],
    stack: ["C#", ".NET"]
  },
  {
    img: "https://opengraph.githubassets.com/1/nocodb/nocodb",
    title: "NocoDB",
    desctiption: "NocoDB - Added Turkish translation for README",
    link: "https://github.com/nocodb/nocodb/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Database"],
    stack: ["i18n", "Documentation"]
  },
  {
    img: "https://opengraph.githubassets.com/1/denoland/deno",
    title: "Deno Runtime",
    desctiption: "Deno - Fixed newline suppression after EOF in prompt()",
    link: "https://github.com/denoland/deno/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Runtime"],
    stack: ["Rust", "TypeScript"]
  }
];

const contactConfig = {
  YOUR_EMAIL: "murataslan0.tr@gmail.com",
  YOUR_FONE: "",
  description:
    "I'm always open to discussing new opportunities, open source collaborations, or just having a chat about technology. Feel free to reach out!",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
  GOOGLE_SHEETS_URL: ""
};

const socialprofils = {
  github: "https://github.com/murataslan1",
  linkedin: "https://linkedin.com/in/murataslan1",
  twitter: "https://twitter.com/iammurataslan",
  medium: "https://medium.com/@murataslan1"
};

const opensourceContributions = [
  { project: "Coolify", stars: "40k", prs: 8, status: "✅ Merged" },
  { project: "VS Code", stars: "165k", prs: 3, status: "✅ Merged" },
  { project: "Nuclei Templates", stars: "10k", prs: 4, status: "✅ Merged" },
  { project: "Croc", stars: "30k", prs: 3, status: "✅ Merged" },
  { project: "Termux", stars: "35k", prs: 2, status: "✅ Merged" },
  { project: "LangChain.js", stars: "15k", prs: 1, status: "✅ Merged" },
  { project: "Deno std", stars: "3.5k", prs: 1, status: "✅ Merged" },
  { project: "Traefik", stars: "54k", prs: 1, status: "✅ Merged" },
  { project: "Trivy", stars: "25k", prs: 1, status: "✅ Merged" },
  { project: ".NET Aspire", stars: "4k", prs: 1, status: "✅ Merged" },
  { project: "OpenBB", stars: "35k", prs: 1, status: "✅ Merged" },
  { project: "CX Linux", stars: "2k", prs: 1, status: "✅ Merged" }
];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  currentFocus,
  resume,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  opensourceContributions
};
