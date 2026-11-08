const logotext = "MURAT ASLAN";
const meta = {
  title: "Murat Aslan | Open Source Developer",
  description:
    "Open source contributor and community speaker in Ankara. 50+ merged PRs to VS Code, Coolify, Traefik, Node.js and more. I get on a call, find the real problem and ship a working fix first. Book a free 30-min call.",
  siteUrl: "https://murataslan1.github.io/",
  image: "https://murataslan1.github.io/profile.png",
  role: "Full Stack Developer",
  location: "Ankara, Turkey"
};

const introdata = {
  title: "I'm Murat Aslan",
  animated: {
    first: "Open Source Contributor 🚀",
    second: "50+ Merged PRs to Major Projects",
    third: "Microsoft | Node.js | Traefik | Vercel | Coolify",
    fourth: "Full Stack Developer"
  },
  description:
    "Passionate open source contributor with 50+ merged pull requests to major projects including VS Code (195k⭐), Coolify (66k⭐), Traefik (65k⭐), context-mode (34k⭐), Node.js, Vercel AI SDK, LangChain.js, Deno, Trivy, and more. Full stack developer with 258 public repos, specializing in TypeScript, Go, and Cloud Native technologies.",
  your_img_url: "/profile.png"
};

const dataabout = {
  title: "About Me",
  aboutme:
    "I'm a full stack developer and open source contributor in Ankara. Open source taught me how I work: use the tool, find where it actually breaks, fix it, get the fix merged. That's 200+ pull requests (50+ merged) to VS Code, Coolify, Traefik, Node.js, Vercel AI SDK, LangChain.js, Deno and more. In 2026 I spoke at ClawCon Ankara, the Claude Community meetup and HSD Türkiye. With teams I work the same way: a 30-minute call, the real problem solved first, then building and scaling."
};

const worktimeline = [
  {
    jobtitle: "Speaker & Community Builder",
    where: "ClawCon Ankara, Claude Community, HSD Türkiye, Ankara AI & developer communities",
    date: "2026"
  },
  {
    jobtitle: "Open Source Contributor",
    where: "VS Code, Cortex, Coolify",
    date: "2025-2026"
  },
  {
    jobtitle: "Software Engineer",
    where: "Various Projects",
    date: "2019-Present"
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
    title: "Forward-Deployed Problem Solving",
    description:
      "A 30-minute call to understand what's slowing your team down, a working fix or prototype on the real problem, and only then the plan, the product and the terms."
  },
  {
    title: "Open Source Contributions",
    description:
      "50+ merged PRs across 200+ total contributions: VS Code (41 PRs), Coolify (34 PRs), context-mode, Traefik (65k⭐), Node.js, Vercel AI SDK, T3Code, LangChain.js, Deno, and more."
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

const callCta = {
  eyebrow: "Value first",
  title: "Got a problem worth 30 minutes?",
  body:
    "Tell me what's slowing your team down. I'll ask until I understand the real constraint, then show you a working fix before we talk about anything else.",
  proof: [
    "50+ merged PRs: VS Code, Coolify, Traefik, Node.js",
    "Speaker: ClawCon Ankara, Claude Community, HSD Türkiye",
    "In 13+ community rooms in 2026"
  ],
  button: "Book a free 30-min call",
  note: "Step 1 takes 30 minutes and costs nothing. If I can't help, you'll still leave with a clearer problem."
};

const resume = {
  url: "",
  label: "Download CV"
};

const dataportfolio = [
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/cursor-ai-tips",
    title: "Cursor AI Tips",
    desctiption: "Cursor AI IDE tips, tricks & best practices - 245⭐ community resource",
    link: "https://github.com/murataslan1/cursor-ai-tips",
    tags: ["Original", "AI"],
    stack: ["Documentation", "Developer Tools"],
    featured: true,
    caseStudy: {
      problem: "Cursor AI users lacked a central resource for tips and best practices.",
      contribution: "Created comprehensive guide with keyboard shortcuts, Composer mode tips, and .cursorrules examples.",
      impact: "245+ stars and growing community of Cursor AI enthusiasts."
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
    desctiption: "AI Agent Benchmark - The definitive comparison of AI coding agents (Apr 2026 Data) - 29⭐",
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
    img: "https://opengraph.githubassets.com/1/murataslan1/n8n-workflow-collection",
    title: "n8n Workflow Collection",
    desctiption: "4,300+ n8n Automation Workflows — The Largest Open-Source Collection - 10⭐",
    link: "https://github.com/murataslan1/n8n-workflow-collection",
    tags: ["Original", "Automation"],
    stack: ["Python", "n8n"],
    featured: true,
    caseStudy: {
      problem: "n8n users lacked a centralized, searchable collection of automation templates.",
      contribution: "Curated and organized 4,300+ ready-to-import n8n workflow templates.",
      impact: "Largest open-source n8n template collection, saving hours of automation setup."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/claude-code-skills",
    title: "Claude Code Skills",
    desctiption: "85+ practical Claude Code skills for AI-powered development - 2⭐",
    link: "https://github.com/murataslan1/claude-code-skills",
    tags: ["Original", "AI"],
    stack: ["Claude Code", "Developer Tools"],
    featured: true,
    caseStudy: {
      problem: "Claude Code users needed reusable skill templates for common workflows.",
      contribution: "Created 85+ curated skills covering development, automation, and productivity.",
      impact: "Featured on portfolio with dedicated showcase page at /claude-code-skills."
    }
  },
  {
    title: "VS Code",
    desctiption: "VS Code - 41 PRs (5 merged): Lifecycle fixes, scrolling fix, UX improvements (195k⭐)",
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
    desctiption: "Comprehensive guide for running AI coding assistants locally - 31⭐",
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
    desctiption: "Coolify - 34 PRs (7 merged): Docker fixes, Unicode support, SSH timeout, backup features ($100+ Bounty)",
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
    desctiption: "MindsDB - Added S3 Region support for integrations (40k⭐)",
    link: "https://github.com/mindsdb/mindsdb/pull/12004",
    tags: ["Open Source", "Data"],
    stack: ["Databases", "Python"]
  },
  {
    img: "https://opengraph.githubassets.com/1/denoland/std",
    title: "Deno Standard Library",
    desctiption: "Deno Standard Library - 2 PRs: CSV parsing fix, Dedent logic (3.6k⭐)",
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
    desctiption: "Traefik - 6 PRs (3 merged): SameSite cookie, server weight display, ForwardAuth log level (65k⭐)",
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
    desctiption: "Milvus - 6 PRs: fnmatch optimization, debug logs, Go client HNSW index support (47k⭐)",
    link: "https://github.com/milvus-io/milvus/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Data"],
    stack: ["Databases", "Cloud"]
  },
  {
    img: "https://opengraph.githubassets.com/1/langchain-ai/langchainjs",
    title: "LangChain.js",
    desctiption: "LangChain.js - 2 PRs: DeepSeek think tag parsing + atomic write fix for LocalFileStore",
    link: "https://github.com/langchain-ai/langchainjs/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "LLM"]
  },
  {
    img: "https://opengraph.githubassets.com/1/facebookresearch/faiss",
    title: "FAISS",
    desctiption: "FAISS - 2 PRs to Meta's vector similarity search library (41k⭐)",
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
    desctiption: "Draw.io Desktop - 3 PRs (1 merged): Update dialog, autoupdate caching, Ubuntu dock icon fix",
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
    desctiption: "Croc - 4 PRs: BusyBox compatibility, progress bar for resume, Podman docs, --socks5 flag",
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
    desctiption: "Vercel AI SDK - 3 PRs: MCP OAuth trailing slash, error type prefix, gateway filter (28k⭐) - 1 merged",
    link: "https://github.com/vercel/ai/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "AI"]
  },
  {
    img: "https://opengraph.githubassets.com/1/dotnet/aspnetcore",
    title: "ASP.NET Core",
    desctiption: "ASP.NET Core - Fix pnpm execution without .cmd extension on Windows SpaProxy",
    link: "https://github.com/dotnet/aspnetcore/pull/65386",
    tags: ["Open Source", ".NET"],
    stack: ["C#", ".NET"]
  },
  {
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
  },
  {
    img: "https://opengraph.githubassets.com/1/murataslan1/ci-debugger",
    title: "CI Debugger",
    desctiption: "Debug GitHub Actions workflows locally with breakpoints — 46⭐",
    link: "https://github.com/murataslan1/ci-debugger",
    tags: ["Original", "DevOps"],
    stack: ["Go", "CI/CD"],
    featured: true,
    caseStudy: {
      problem: "Debugging GitHub Actions required blind YAML commits and waiting for CI runs.",
      contribution: "Built a local debugger with breakpoints for GitHub Actions workflows.",
      impact: "46+ stars, enabling developers to debug CI pipelines without pushing."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/pingdotgg/t3code",
    title: "T3Code",
    desctiption: "T3Code - 6 PRs (1 merged): Terminal history, checkpoint skip, mobile sidebar, iOS zoom, sticky model",
    link: "https://github.com/pingdotgg/t3code/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["TypeScript", "React"],
    featured: true,
    caseStudy: {
      problem: "Multiple UX issues in the AI coding environment affecting terminal and mobile.",
      contribution: "Fixed terminal history pollution, checkpoint logic, mobile sidebar, iOS zoom, and model persistence.",
      impact: "Improved experience across 6 PRs for desktop and mobile users."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/nodejs/node",
    title: "Node.js",
    desctiption: "Node.js - 2 PRs: test_runner improvements to avoid reading process state directly (123k⭐)",
    link: "https://github.com/nodejs/node/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Runtime"],
    stack: ["C++", "JavaScript"]
  },
  {
    img: "https://opengraph.githubassets.com/1/openai/codex-plugin-cc",
    title: "Codex Plugin CC",
    desctiption: "OpenAI Codex Plugin - 2 PRs: ANSI escape stripping, broken symlink handling",
    link: "https://github.com/openai/codex-plugin-cc/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "Developer Tools"]
  },
  {
    img: "https://opengraph.githubassets.com/1/f/prompts.chat",
    title: "prompts.chat",
    desctiption: "prompts.chat - CLI fix: add missing full_content param to API URL (✅ Merged)",
    link: "https://github.com/f/prompts.chat/pull/1122",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "Web"]
  },
  {
    img: "https://opengraph.githubassets.com/1/mksglu/context-mode",
    title: "context-mode",
    desctiption: "context-mode - 10 PRs (1 merged): OpenClaw MCP sidecar registration, Claude Desktop & JetBrains Copilot adapters (34k⭐)",
    link: "https://github.com/mksglu/context-mode/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "MCP"]
  },
  {
    img: "https://opengraph.githubassets.com/1/openclaw/openclaw",
    title: "OpenClaw",
    desctiption: "OpenClaw - Fixed exec approval modal closing without submitting decision",
    link: "https://github.com/openclaw/openclaw/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "AI"],
    stack: ["TypeScript", "UI"]
  }
];

const contactConfig = {
  YOUR_EMAIL: "murataslan0.tr@gmail.com",
  YOUR_FONE: "",
  CALENDLY_URL: "https://calendly.com/murataslan562001/30min",
  description:
    "The fastest way to work with me is a free 30-minute call: tell me what's slowing your team down, and if I can help, I'll show you with a working fix before we talk about anything else. Prefer writing? Email works too.",
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
  { project: "VS Code", stars: "195k", prs: 41, merged: 5, status: "✅ 5 Merged" },
  { project: "Coolify", stars: "66k", prs: 34, merged: 7, status: "✅ 7 Merged" },
  { project: "context-mode", stars: "34k", prs: 10, merged: 1, status: "✅ Merged" },
  { project: "Milvus", stars: "47k", prs: 6, status: "🔄 Open" },
  { project: "Traefik", stars: "65k", prs: 6, merged: 3, status: "✅ 3 Merged" },
  { project: "T3Code", stars: "52k", prs: 6, merged: 1, status: "✅ Merged" },
  { project: "SigNoz", stars: "33k", prs: 5, status: "🔄 Open" },
  { project: "Nuclei Templates", stars: "13k", prs: 5, merged: 4, status: "✅ 4 Merged" },
  { project: "CX Linux", stars: "—", prs: 5, merged: 1, status: "✅ Merged" },
  { project: "Croc", stars: "41k", prs: 4, merged: 4, status: "✅ 4 Merged" },
  { project: "Vercel AI SDK", stars: "28k", prs: 3, merged: 1, status: "✅ Merged" },
  { project: "Draw.io Desktop", stars: "64k", prs: 3, merged: 1, status: "✅ Merged" },
  { project: "Node.js", stars: "123k", prs: 2, status: "🔄 Review" },
  { project: "LangChain.js", stars: "18k", prs: 2, merged: 1, status: "✅ Merged" },
  { project: "Codex Plugin CC", stars: "35k", prs: 2, status: "🔄 Active" },
  { project: "Deno std", stars: "3.6k", prs: 2, merged: 1, status: "✅ Merged" },
  { project: "Deno Runtime", stars: "109k", prs: 2, status: "🔄 Open" },
  { project: "Trivy", stars: "39k", prs: 2, merged: 1, status: "✅ Merged" },
  { project: "Termux", stars: "17k", prs: 2, merged: 2, status: "✅ 2 Merged" },
  { project: "OpenBB", stars: "75k", prs: 2, merged: 1, status: "✅ Merged" },
  { project: "FAISS", stars: "41k", prs: 2, status: "🔄 Open" },
  { project: "Greenbone OpenVAS", stars: "4.9k", prs: 2, status: "🔄 Open" },
  { project: "JJ VCS", stars: "32k", prs: 2, status: "🔄 Open" },
  { project: "VS Code MermAId", stars: "187", prs: 2, status: "🔄 Open" },
  { project: "Perspective", stars: "11k", prs: 2, status: "🔄 Open" },
  { project: "MindsDB", stars: "40k", prs: 2, merged: 1, status: "✅ Merged" },
  { project: ".NET Aspire", stars: "6.4k", prs: 1, merged: 1, status: "✅ Merged" },
  { project: "ASP.NET Core", stars: "39k", prs: 1, status: "🔄 Open" },
  { project: "prompts.chat", stars: "177k", prs: 1, merged: 1, status: "✅ Merged" },
  { project: "OpenClaw", stars: "394k", prs: 1, status: "🔄 Submitted" }
];

const communityStats = [
  { value: "605K", label: "LinkedIn impressions in 28 days" },
  { value: "91%", label: "Reach from outside my network" }
];

const communityTalks = [
  {
    title: "Context Engineering: The page after prompt",
    event: "HSD Türkiye (Huawei Student Developers)",
    date: "May 15, 2026",
    place: "",
    link: "/huawei/",
    topics: ["Context engineering", "Claude Skills", "context-mode"]
  },
  {
    title: "Trusting Your Agents: MCP, Hooks, and What OSS Taught Me",
    event: "ClawCon Ankara",
    date: "April 29, 2026",
    place: "Ankara",
    link: "/clawcon-ankara/",
    topics: ["MCP", "Agent hooks", "Open source"]
  },
  {
    title: "Trusting Your Agents: MCP, Hooks, and What OSS Taught Me",
    event: "ClawCon İstanbul",
    date: "2026",
    place: "İstanbul",
    link: "/clawcon-istanbul/",
    topics: ["MCP", "Agent hooks", "Open source"]
  },
  {
    title: "Atölye 210: First session, free and open to everyone",
    event: "KamuKOD",
    date: "August 2026",
    place: "Ankara",
    link: "/openclaw-hermes-agustos/",
    topics: ["OpenClaw", "Hermes", "Self-hosted agents"]
  },
  {
    title: "Masa 1: Making technology understandable for everyone",
    event: "TeknoPolitika Buluşması",
    date: "August 15, 2026",
    place: "Ankara",
    link: "/teknopolitika-masa1/",
    topics: ["Tech policy", "Public speaking", "Community"]
  }
];

const fdePrinciples = [
  {
    title: "Get on a call",
    body: "30 minutes, no pitch. You tell me what's slowing your team down; I ask until I understand the real constraint.",
    proof: "Free 30-min call"
  },
  {
    title: "See the problem where it lives",
    body: "I sit with the people who have the problem, in their tools and their code, not in a slide deck about it.",
    proof: "4 community events in 8 days"
  },
  {
    title: "Solve it first",
    body: "A working fix or prototype on the real problem, before any plan or proposal. If it doesn't help, we stop there.",
    proof: "50+ merged PRs in open source"
  },
  {
    title: "Then build and scale",
    body: "Only once the value is proven do we set up the rest: the product, the process, the scope and the terms.",
    proof: "Value first, everything else after"
  }
];

const communityPosts = [
  {
    event: "Devin Meetup Ankara",
    host: "Cognition · BuilderMare",
    date: "Nov 8, 2026",
    role: "Builder session",
    img: "/img/community/devin-meetup-1.jpg",
    imgAlt: "Group photo of builders at Devin Meetup Ankara",
    quote:
      "The smartest model inside Devin AI does not write your code. It tells a cheaper one what to write.",
    fieldNote:
      "Your value moves away from writing every line. It moves toward slicing the work well and judging what comes back.",
    takeaway:
      "After the talk we closed the slides and opened our laptops. Real projects, real mistakes, real fixes.",
    engagement: { likes: 7, comments: 0, reposts: 0 },
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_the-smartest-model-inside-devin-ai-does-not-activity-7525268262104936448-pDVm",
    x: "https://x.com/iammurataslan/status/2119506607373426727"
  },
  {
    event: "FIL Network #6: AI, From Intelligence to Impact",
    host: "Future Innovation Leaders · Bilkent TEKMER",
    date: "Nov 6, 2026",
    role: "Attendee · past co-organizer",
    img: "/img/community/fil-network-0.jpg",
    imgAlt: "Attendees of FIL Network #6 at Bilkent TEKMER",
    quote:
      "Access to tools is no longer the main advantage. Seeing the right problem, asking the right question, and moving fast is.",
    fieldNote:
      "The panel went from research to product, from security to robotics. The common thread: real value, not hype.",
    takeaway:
      "We have organized similar Build and Sell sessions before. People leave with something they can use, not just notes.",
    engagement: { likes: 24, comments: 0, reposts: 3 },
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_most-ai-events-talk-about-the-future-this-ugcPost-7524541755430637568-szmh"
  },
  {
    event: "E-Ticaret Sohbetleri",
    host: "CoZone · ODTÜ Teknokent",
    date: "Nov 4, 2026",
    role: "Attendee",
    img: "/img/community/eticaret-4.jpg",
    imgAlt: "Speaker on stage at E-Ticaret Sohbetleri, CoZone ODTÜ Teknokent",
    quote:
      "Revenue looks good on a dashboard. Margin is what's left after fees, shipping, returns and ads.",
    fieldNote:
      "Checkout isn't a back-office detail. It's where sales are won or lost.",
    takeaway:
      "A local business doesn't have to stay local anymore. Ankara already makes things; the gap is getting them in front of buyers.",
    engagement: { likes: 41, comments: 0, reposts: 4 },
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_ecommerce-eticaret-ankara-ugcPost-7518403958395084802-1DR6"
  },
  {
    event: "DevFest'26 Ankara",
    host: "GDG Ankara · GDG Cloud Ankara · GDG on Campus METU",
    date: "Nov 1, 2026",
    role: "Attendee",
    img: "/img/community/devfest-1.jpg",
    imgAlt: "Murat with community members at the DevFest Ankara photo wall",
    quote: "First they asked who it's for. Then they asked if it's even a who.",
    fieldNote:
      "Give production agents hard permission limits instead of polite instructions. Someone still gets paged at 3am.",
    takeaway:
      "The talks gave me ideas. The people in between gave me reasons to actually try them.",
    engagement: { likes: 101, comments: 8, reposts: 5 },
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_first-they-asked-who-its-for-then-they-ugcPost-7522656794511532034-9CGc",
    x: "https://x.com/iammurataslan/status/2116918537940050332"
  },
  {
    event: "fal Meetup Ankara",
    host: "fal · ARDVENTURE",
    date: "Oct 23, 2026",
    role: "Attendee",
    img: "/img/community/fal-ankara-0.jpg",
    imgAlt: "fal presenting generative media to a full room at ARDVENTURE, Ankara",
    quote:
      "It's not every day a team behind one of the fastest-growing AI platforms comes to Ankara.",
    fieldNote:
      "Your storyboard can be the input. Give the model a few keyframes and it builds the shot between them.",
    takeaway:
      "Speed matters as much as quality now. Seeing the same clip from different models side by side made that very clear.",
    engagement: { likes: 22, comments: 2, reposts: 1 },
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_generativeai-ai-ankara-ugcPost-7519137496681750528-6gAX"
  },
  {
    event: "Kodun Ötesi #1 with Fatih Arslan",
    host: "Yazılımcı Buluşmaları Ankara",
    date: "Oct 3, 2026",
    role: "Attendee",
    img: "/img/community/kodun-otesi-0.jpg",
    imgAlt: "Fatih Arslan on stage at Kodun Ötesi #1, Yazılımcı Buluşmaları Ankara",
    quote: "Ankara has a developer community. Today it showed up.",
    fieldNote:
      "120 people signed up. No seats left: people sat on the stairs and leaned over the railing, on a Saturday afternoon.",
    takeaway:
      "Work used by developers all over the world, like vim-go and the Go language itself, can be built from Ankara.",
    engagement: { likes: 64, comments: 0, reposts: 5 },
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_ankara-opensource-softwareengineering-ugcPost-7512215390580740098-uNvy"
  },
  {
    event: "Claude Community Meetup Ankara",
    host: "Claude Community · CoZone, ODTÜ Teknokent",
    date: "Sep 27, 2026",
    role: "Speaker",
    img: "/img/community/claude-community-0.jpg",
    imgAlt: "Murat speaking at the Claude Community meetup at ODTÜ Teknokent",
    quote:
      "Today I stood in front of a room full of people who are quietly changing how we teach and research.",
    fieldNote:
      "People talked openly about what didn't work. Failed prompts, broken prototypes, dead ends. Then we opened our laptops and built something together.",
    takeaway:
      "The hardest questions weren't technical. They were about trust: how do we teach students to think with AI, not through it?",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_claudecommunity-aiineducation-ankara-activity-7509979678355456001-LIvh"
  },
  {
    event: "Personal Data Protection in the Age of AI, 5G and Smart Technologies",
    host: "KVKK · Anadolu Bilişim Buluşmaları · KamuYZ",
    date: "Sep 24, 2026",
    role: "Attendee",
    img: "/img/community/kvkk-summit-0.jpg",
    imgAlt: "Personal data protection summit hosted by KVKK",
    quote: "AI didn't break your data compliance. A spreadsheet did.",
    fieldNote:
      "Breach notification runs on a 72-hour clock. Most teams would spend the first 48 just figuring out who owns the decision.",
    takeaway:
      "AI changes the blast radius, not the rules. The teams doing this well have people who pause before hitting export.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_kvkk-dataprotection-dataprivacy-share-7509277036734033920-idcM"
  },
  {
    event: "GITEX AI Türkiye",
    host: "Istanbul Expo Center · First edition",
    date: "Sep 2026",
    role: "Attendee",
    img: "/img/community/gitex-ai-0.jpg",
    imgAlt: "Murat at GITEX AI Türkiye, Istanbul Expo Center",
    quote: "The most expensive AI is the one nobody uses.",
    fieldNote:
      "300+ booths, investors in the building, models everywhere. The gap is still go-live: exploration to production.",
    takeaway:
      "One problem, wired into systems people already open, and someone still there after the pilot. Pilot or production?",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_gitexaiturkiye-aideployment-agenticai-ugcPost-7505496196812210177-tuW_"
  },
  {
    event: "TOBB Business AI Summit",
    host: "TOBB Türkiye Yazılım Meclisi · KamuYZ",
    date: "Jul 2026",
    role: "Attendee",
    img: "/img/community/tobb-ai-summit-0.jpg",
    imgAlt: "Full hall at the TOBB Business AI Summit in Ankara",
    quote:
      "Wrong question: which tool should we buy? Right question: which business result will we improve in 90 days?",
    fieldNote:
      "The hall was full, with people from 53 cities. “Keep the data at home” is not just a slogan anymore.",
    takeaway:
      "Don't start with a huge AI transformation plan. Start with one problem, one process and one pilot you can measure.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_ai-digitaltransformation-sovereignai-share-7488621134435737602-Hygn"
  },
  {
    event: "Defense Industry Integrated Technologies Summit 2026",
    host: "Anadolu Bilişim Buluşmaları · BTK",
    date: "Jul 2026",
    role: "KamuYZ delegate",
    img: "/img/community/defense-summit-0.jpg",
    imgAlt: "KamuYZ team at the Defense Industry Integrated Technologies Summit 2026",
    quote:
      "Talking about where AI is heading in the public and defense space.",
    fieldNote:
      "AI, 5G and cybersecurity on one stage, with public institutions and industry in the same room.",
    takeaway:
      "Representing KamuYZ alongside people who work on AI in the public sector every day.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_defensetech-ai-5g-share-7486434849197572096-063_"
  },
  {
    event: "WORLDEF Istanbul 2026",
    host: "WORLDEF · Executive pass",
    date: "Jun 2026",
    role: "Attendee",
    img: "/img/community/worldef-0.jpg",
    imgAlt: "Murat at WORLDEF Istanbul 2026",
    quote:
      "An Executive pass gave me the chance to engage directly with several speakers.",
    fieldNote:
      "AI agents and voice AI, generative content workflows and digital revenue models: practical and easy to apply.",
    takeaway:
      "I left with valuable connections and clear ideas to apply right away in e-commerce and AI.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_worldef-worldefistanbul2026-ecommerce-share-7472314138195595265-BOP5"
  },
  {
    event: "ClawCon Ankara",
    host: "ClawCon · OpenClaw · BuilderMare",
    date: "Apr 29, 2026",
    role: "Speaker",
    img: "/img/community/clawcon-ankara-0.jpg",
    imgAlt: "Murat on stage at ClawCon Ankara",
    quote: "Your agent says “Done.” Did it actually do anything?",
    fieldNote:
      "Three real cases where the screen lied: Codex, Vercel AI SDK and context-mode. All three filed, fixed and merged.",
    takeaway:
      "Don't trust the screen. Read the logs. I caught these because I was using the tools while contributing to them.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_clawcon-mcp-aiagents-share-7455632402145533952-26oa"
  }
];

const communityMoreNotes = [
  {
    event: "Grok Bot Meetup Ankara",
    date: "Oct 2026",
    line: "Nearly 100 developers on a Saturday morning. Agent talks have moved from what's possible to what a job costs.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_grokbot-spacexsi-spacexai-ugcPost-7520149620694347776-xJdF"
  },
  {
    event: "Ankara Data Community #4",
    date: "Oct 2026",
    line: "Good AI starts with boring data work: who owns it, is it good enough, where did it come from, who can use it.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_ankaradatacommunity-datagovernance-veriyaemnetiagnimi-activity-7517877781901385728-Ngaa"
  },
  {
    event: "YönetişimZeka: AI Governance, Law & Security Summit",
    date: "Oct 2026",
    line: "Lawyers, security people and engineers in the same conversation, not in separate rooms.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_kamuyz-yaemnetiagnimzeka-etikyz-activity-7516163350741884928-3JTt"
  },
  {
    event: "Google for Developers Day Istanbul",
    date: "Oct 2026",
    line: "Building an agent is the easy part. The hard part starts the day it goes live.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_on-october-9-was-google-for-developers-day-activity-7515479413745078272-OBI0"
  },
  {
    event: "Ankara AI Community Meetup",
    date: "Oct 2026",
    line: "Some communities talk about AI. This one builds with it, with real code on the screen and laptops open.",
    linkedin:
      "https://www.linkedin.com/posts/murataslan1_ankaraaicommunity-promptengineering-gepa-activity-7514282375036686336-nL85"
  }
];

const communities = [
  "GDG Ankara",
  "GDG Cloud Ankara",
  "KamuYZ",
  "KamuKOD",
  "ClawCon",
  "HSD Türkiye",
  "Future Innovation Leaders",
  "BuilderMare",
  "Claude Community",
  "Yazılımcı Buluşmaları Ankara",
  "Ankara AI Community",
  "Ankara Data Community"
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
  callCta,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  opensourceContributions,
  communityStats,
  communityTalks,
  communityPosts,
  communityMoreNotes,
  communities,
  fdePrinciples
};
