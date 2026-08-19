export const profile = {
  name: "Anuvind P P",
  role: "Full Stack Developer",
  tagline: "I build responsive web applications end to end — Python and Django on the server, React and JavaScript on the client, MySQL underneath.",
  location: "Bengaluru, India",
  status: "Available — immediate start",
  email: "anuvindpp77@gmail.com",
  phone: "+91 73067 74693",
  drawnBy: "ANUVIND",
  scale: "NTS", 
  socials: [
    { label: "GitHub", url: "https://github.com/AnuvindMokeri" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/anuvindpp/" },
    { label: "Resume", url: "public/resume.pdf" },
  ],
};

export const about = {
  summary:
    "Motivated full-stack developer with a strong foundation in Python, Django, and modern front-end technologies. Skilled in building responsive web applications using HTML5, CSS3, JavaScript, Bootstrap, and React, with database experience in MySQL and version control in Git. A quick learner with strong problem-solving ability, ready for an immediate start.",
  points: [
    { label: "Focus", value: "Full-stack web development, Python/Django, React" },
    { label: "Based in", value: "Bengaluru, India" },
    { label: "Education", value: "Diploma in Computer Application (DCA), 2023–2025" },
    { label: "Certified", value: "Python Full Stack Developer — B-Learn Academy" },
  ],
};


export const stackSchematic = {
  layers: [
    {
      id: "client",
      label: "CLIENT",
      sub: "front-end",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "React"],
      note: "Responsive interfaces built with React and vanilla JavaScript, styled with Bootstrap and hand-written CSS.",
    },
    {
      id: "server",
      label: "SERVER",
      sub: "back-end",
      tech: ["Python", "Django"],
      note: "Application logic and views built in Django, following its MVT structure for maintainable server-side code.",
    },
    {
      id: "data",
      label: "DATA",
      sub: "database",
      tech: ["MySQL"],
      note: "Relational schema design and querying with MySQL for persistent application data.",
    },
    {
      id: "tooling",
      label: "TOOLING",
      sub: "workflow",
      tech: ["Git", "GitHub", "VS Code"],
      note: "Version control with Git and GitHub, daily development in VS Code.",
    },
  ],
};


export const projects = [
  {
    sheet: "A-01",
    name: "Add Your Project",
    rev: "1.0",
    year: "2026",
    description:
      "Describe what you built, the problem it solves, and the impact — a sentence or two is enough. Edit this in src/data/content.js.",
    tech: ["Django", "React", "MySQL"],
    role: "Your role on this project",
    links: { live: "#", code: "#" },
  },
  {
    sheet: "A-02",
    name: "Add Another Project",
    rev: "1.0",
    year: "2026",
    description:
      "A second project shows range — pick something with a different tech mix or a different kind of problem than the first.",
    tech: ["Python", "JavaScript", "Bootstrap"],
    role: "Your role on this project",
    links: { live: "#", code: "#" },
  },
  {
    sheet: "A-03",
    name: "Add a Third Project",
    rev: "1.0",
    year: "2026",
    description:
      "Even a small course project or personal build works well here — recruiters want to see real, working code.",
    tech: ["HTML5", "CSS3", "jQuery"],
    role: "Your role on this project",
    links: { live: "#", code: "#" },
  },
];


export const experience = [
  {
    period: "2026",
    org: "B-Learn Academy, Bengaluru",
    role: "Python Full Stack Developer Certificate",
    detail: "Certification covering Python, Django, front-end development, and full-stack project workflows.",
  },
  {
    period: "2023 — 2025",
    org: "Diploma in Computer Application (DCA)",
    role: "Diploma in Computer Application",
    detail: "Foundation in programming, databases, and application development.",
  },
  {
    period: "06/2021 — 03/2023",
    org: "Rajeev Gandhi Memorial Higher Secondary School, Moker, Kerala",
    role: "Higher Secondary Education (Commerce)",
    detail: "",
  },
  {
    period: "06/2020 — 03/2021",
    org: "PR Memorial Higher Secondary School, Panoor, Kerala",
    role: "Secondary School Education",
    detail: "",
  },
];
