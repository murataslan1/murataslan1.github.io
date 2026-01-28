const logotext = "MURAT ASLAN";
const meta = {
  title: "Murat Aslan | Open Source Developer",
  description:
    "Full Stack Developer & Open Source Contributor with 75+ PRs to major projects like VS Code, Cortex, Coolify, Deno, Traefik, and more.",
  siteUrl: "https://murataslan1.github.io/",
  image: "/avatar.png",
  role: "Full Stack Developer",
  location: "Ankara, Turkey"
};

const introdata = {
  title: "I'm Murat Aslan",
  animated: {
    first: "Open Source Contributor 🚀",
    second: "75+ PRs to Major Projects",
    third: "Microsoft | Meta | Deno | Cortex",
    fourth: "Full Stack Developer"
  },
  description:
    "Passionate open source contributor with 75+ pull requests to 30+ major projects including VS Code (165k⭐), Coolify (40k⭐), Traefik (54k⭐), Cortex Linux, and more. Full stack developer specializing in TypeScript, Go, and Cloud Native technologies.",
  your_img_url: "/avatar.png"
};

const dataabout = {
  title: "About Me",
  aboutme:
    "I'm a passionate Full Stack Developer and Open Source enthusiast based in Ankara, Turkey. I believe in the power of open source to drive innovation and collaboration. As of January 2026, I've contributed 75+ pull requests to major projects like VS Code, Cortex Linux, MindsDB, Coolify, and many more. I love finding bugs, improving documentation, and adding new features to projects that millions of developers use daily."
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
      "75+ PRs to major projects: VS Code (165k⭐), Coolify (40k⭐), Deno (3.5k⭐), Traefik (54k⭐), Cortex Linux, and more."
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
    desctiption: "VS Code - Contributed test coverage improvements to the repo (165k⭐)",
    link: "https://github.com/microsoft/vscode/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["TypeScript", "Developer Tools"],
    featured: true,
    caseStudy: {
      problem: "Regression risk in core extension workflows.",
      contribution: "Added targeted tests and tightened coverage for key flows.",
      impact: "Improved reliability for daily developer tooling usage."
    }
  },
  {
    img: "https://opengraph.githubassets.com/1/mindsdb/mindsdb",
    title: "MindsDB",
    desctiption: "MindsDB - Added S3 Region support for integrations",
    link: "https://github.com/mindsdb/mindsdb/pull/12004",
    tags: ["Open Source", "Data"],
    stack: ["Databases", "Python"]
  },
  {
    img: "https://opengraph.githubassets.com/1/coollabsio/coolify",
    title: "Coolify",
    desctiption: "Coolify - 14 PRs: Docker version fix, Unicode support, IPv4/IPv6 validation, SSH Fixes ($100 Bounty)",
    link: "https://github.com/coollabsio/coolify/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "DevOps"],
    stack: ["Cloud", "Docker"]
  },
  {
    img: "https://opengraph.githubassets.com/1/denoland/std",
    title: "Deno Standard Library",
    desctiption: "Deno Standard Library - 2 PRs: CSV parsing fix, Dedent logic",
    link: "https://github.com/denoland/std/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Tooling"],
    stack: ["TypeScript", "Runtime"]
  },
  {
    img: "https://opengraph.githubassets.com/1/traefik/traefik",
    title: "Traefik",
    desctiption: "Traefik - 4 PRs: ForwardAuth logging improvements & UI Fixes",
    link: "https://github.com/traefik/traefik/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Infra"],
    stack: ["Networking", "Go"]
  },
  {
    img: "https://opengraph.githubassets.com/1/milvus-io/milvus",
    title: "Milvus",
    desctiption: "Milvus - 4 enhancement PRs to the vector database",
    link: "https://github.com/milvus-io/milvus/pulls?q=author%3Amurataslan1",
    tags: ["Open Source", "Data"],
    stack: ["Databases", "Cloud"]
  }
];

const contactConfig = {
  YOUR_EMAIL: "murataslan0.tr@gmail.com",
  YOUR_FONE: "",
  description:
    "I'm always open to discussing new opportunities, open source collaborations, or just having a chat about technology. Feel free to reach out!",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id"
};

const socialprofils = {
  github: "https://github.com/murataslan1",
  linkedin: "https://linkedin.com/in/murataslan1",
  twitter: "https://twitter.com/iammurataslan"
};

const opensourceContributions = [
  { project: "VS Code", stars: "165k", prs: 1, status: "✅ Merged" },
  { project: "Cortex", stars: "2k", prs: 1, status: "🚀 Bounty" },
  { project: "Coolify", stars: "40k", prs: 14, status: "✅ 7 Merged" },
  { project: "MindsDB", stars: "26k", prs: 1, status: "✅ Merged" },
  { project: "Traefik", stars: "54k", prs: 4, status: "✅ 2 Merged" },
  { project: "Milvus", stars: "32k", prs: 5, status: "🔄 Open" },
  { project: "Deno std", stars: "3.5k", prs: 2, status: "✅ Merged" },
  { project: "FAISS", stars: "33k", prs: 2, status: "🔄 Open" }
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
