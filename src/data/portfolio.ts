/**
 * Central portfolio data for Vishnu Prasath V.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Vishnu Prasath V',
  displayName: 'Vishnu Prasath',
  firstName: 'VISHNU',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A VISHNU ORIGINAL',
  role: 'Data Scientist / IT Undergraduate',
  tagline: ['Data Scientist', 'IT Undergraduate', 'RDBMS & Java'],
  intro:
    'Analytical and data-driven Information Technology undergraduate with a robust foundation in Data Structures, Algorithms, RDBMS (PostgreSQL, SQL), and Object-Oriented Programming (Java). Passionate about leveraging data pipelines, database management, and backend automation to drive actionable insights and optimize systems.',
  summary:
    'Analytical and data-driven Information Technology undergraduate with a robust foundation in Data Structures, Algorithms, RDBMS (PostgreSQL, SQL), and Object-Oriented Programming (Java). Experienced in conceptualizing relational data models, writing complex database queries, and developing REST APIs. Proven ability in algorithmic problem-solving with strong competitive programming rankings (LeetCode, CodeChef). Passionate about leveraging data pipelines, database management, and backend automation to drive actionable insights and optimize systems. Eager to bring strong analytical and software engineering skills to a Data Scientist role at Blue Yonder.',
  location: 'Coimbatore, Tamil Nadu, India',
  phone: '+91 9087638248',
  email: 'vishnuprasathviswanathan2107@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/Vishnu-Prasath-V/',
    github: 'https://github.com/vishnuprasathviswanathan2107-art',
  },
  resumePdf: '/assets/Vishnu_Prasath_V_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Vishnu Prasath V',
  },
  interests: ['Data Pipelines', 'Database Management', 'Backend Automation', 'Relational Data Modeling', 'Competitive Programming'],
};

export const education = [
  {
    school: 'Karpagam College of Engineering',
    place: 'Coimbatore, Tamil Nadu',
    degree: 'B.Tech in Information Technology',
    period: 'Sept 2023 – 2027',
    score: 'CGPA 7.43',
  },
  {
    school: 'Sri Lakshmi Vidhyalaya Matriculation Higher Secondary School',
    place: 'Tamil Nadu',
    degree: 'Higher Secondary Education',
    period: '2022 – 2023',
    score: 'Percentage: 72%',
  },
];

export const experience: {
  company: string;
  role: string;
  place: string;
  period: string;
  points: string[];
}[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'flow' | 'tenants' | 'shield';
};

export const projects: Project[] = [
  {
    id: 'lets-track',
    title: "Let's Track Coding Habit Tracker",
    subtitle: 'Data Modeling & Automation Platform',
    year: '2026',
    genre: 'Data Modeling • Automation • Analytics',
    logline:
      'A systematic data modeling and automation platform engineered to track user metrics, coding challenges, dynamic leaderboards, and historical performance.',
    stack: ['Salesforce', 'Apex', 'SOQL', 'REST API', 'Data Modeling'],
    build: [
      'Architected robust relational data models utilizing custom objects and junction relationships to systematically track user metrics, coding challenges, and historical performance data.',
      'Developed complex SOQL queries to extract, aggregate, and analyze data for streak computation and dynamic leaderboards.',
      'Engineered an automated data-processing pipeline using Scheduled Apex to handle challenge rotation, data aggregation, and tokenized email engagements.',
      'Built data-driven dashboards utilizing REST APIs and wire services to visualize user performance metrics.',
    ],
    features: [
      'Relational data models with custom objects & junction relationships',
      'Complex SOQL aggregation for streak computation & dynamic leaderboards',
      'Automated Scheduled Apex pipeline for data processing & email triggers',
      'Data-driven dashboards with REST APIs and wire services',
      'Historical performance analytics and habit tracking',
    ],
    metrics: [
      { value: 'SOQL', label: 'aggregation & streak analytics' },
      { value: 'Automated', label: 'Scheduled Apex pipeline' },
      { value: 'REST API', label: 'metrics dashboard integration' },
      { value: 'Junction', label: 'relational data models' },
    ],
    github: 'https://github.com/vishnuprasathviswanathan2107-art/Let-sTrack',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'campus360',
    title: 'Campus360 - Faculty Management System',
    subtitle: 'Database Integration & Logic Development',
    year: '2025',
    genre: 'RDBMS • MVC Architecture • Backend Systems',
    logline:
      'Backend data workflows and administrative portals for processing large volumes of academic and faculty data with strict data integrity.',
    stack: ['Java', 'SQL', 'PostgreSQL', 'SOQL', 'REST API', 'MVC'],
    build: [
      'Developed backend data workflows and administrative portals for processing large volumes of academic and faculty data.',
      'Implemented optimized, data-driven components deeply integrated with backend controllers to handle complex business logic and data querying.',
      'Ensured data integrity and fast retrieval speeds by formulating efficient SQL/SOQL database queries within an MVC architecture.',
    ],
    features: [
      'High-throughput academic and faculty data processing',
      'Backend data workflows integrated deeply with MVC controllers',
      'Optimized SQL and SOQL queries for low-latency retrieval',
      'Strict relational data integrity and transaction handling',
      'Secure administrative portal for faculty management',
    ],
    metrics: [
      { value: 'High Speed', label: 'fast retrieval via optimized SQL' },
      { value: 'MVC', label: 'structured backend architecture' },
      { value: '100%', label: 'relational data integrity' },
      { value: 'End-to-End', label: 'faculty data workflows' },
    ],
    github: 'https://github.com/vishnuprasathviswanathan2107-art/Campus360',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'leetcode',
    title: '444k+ Global Rank',
    org: 'LeetCode',
    detail: 'Achieved 444k+ global ranking on LeetCode solving complex data structures and algorithmic challenges.',
    laurel: 'Global Ranking',
    link: 'https://leetcode.com',
  },
  {
    id: 'codechef',
    title: '1400+ Rating',
    org: 'CodeChef',
    detail: 'Ranked with 1400+ rating on CodeChef demonstrating strong competitive programming and problem-solving capability.',
    laurel: 'Competitive Rating',
    link: 'https://www.codechef.com',
  },
  {
    id: 'salesforce-pdi',
    title: 'Score: 91%',
    org: 'Salesforce',
    detail: 'Salesforce Certified Platform Developer I, demonstrating mastery in Apex, SOQL, and platform development (Feb 2026).',
    laurel: 'Platform Dev I',
  },
  {
    id: 'postgres-cert',
    title: 'Score: 90%',
    org: 'IIT Bombay',
    detail: 'Certified in RDBMS PostgreSQL by Spoken Tutorial, IIT Bombay, showcasing advanced relational querying and schema design (Aug 2024).',
    laurel: 'RDBMS PostgreSQL',
  },
  {
    id: 'java-cert',
    title: 'Score: 85%',
    org: 'IIT Bombay',
    detail: 'Certified in Java by Spoken Tutorial, IIT Bombay, reflecting strong foundations in Object-Oriented Programming (March 2025).',
    laurel: 'Java Certified',
  },
];

export type Certification = { issuer: string; name: string; score?: string; date: string; link?: string };

export const certifications: Certification[] = [
  {
    issuer: 'Salesforce',
    name: 'Salesforce Certified Platform Developer I',
    score: 'Score: 91%',
    date: 'Feb 2026',
  },
  {
    issuer: 'IIT Bombay',
    name: 'RDBMS PostgreSQL — Spoken Tutorial',
    score: 'Score: 90%',
    date: 'Aug 2024',
  },
  {
    issuer: 'IIT Bombay',
    name: 'Java Programming — Spoken Tutorial',
    score: 'Score: 85%',
    date: 'March 2025',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'databases',
    title: 'Databases & Query',
    subtitle: 'RDBMS • Relational Modeling • Complex Querying',
    skills: [
      { name: 'SQL', mono: 'Sq', note: 'Advanced' },
      { name: 'RDBMS PostgreSQL', mono: 'Pg', note: '90% Score' },
      { name: 'MySQL', mono: 'My' },
      { name: 'SOQL', mono: 'So', note: 'Salesforce' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Object-Oriented • Backend & Systems',
    skills: [
      { name: 'Java', mono: 'Jv', note: '85% Score' },
      { name: 'Apex', mono: 'Ax', note: 'Certified' },
      { name: 'Linux', mono: 'Lx' },
    ],
  },
  {
    id: 'core',
    title: 'Core Competencies',
    subtitle: 'Algorithmic & Architecture Foundations',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds', note: '444k LeetCode' },
      { name: 'Data Modeling', mono: 'Dm' },
      { name: 'Relational Databases', mono: 'Rd' },
      { name: 'REST API Development', mono: 'Ap' },
      { name: 'Problem Solving', mono: 'Ps', note: '1400+ CodeChef' },
      { name: 'Prompt Engineering', mono: 'Pe' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Frameworks',
    subtitle: 'DevOps • Version Control • IDEs',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'VS Code', mono: 'Vc' },
      { name: 'Eclipse', mono: 'Ec' },
      { name: 'Figma', mono: 'Fg' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  SQL: ['Campus360 - Faculty Management System', 'IIT Bombay RDBMS PostgreSQL (90%)'],
  'RDBMS PostgreSQL': ['IIT Bombay Certified (90% score)', 'Campus360 - Faculty Management System'],
  MySQL: ['Relational Database Management & Schema Design'],
  SOQL: ["Let's Track Coding Habit Tracker", 'Salesforce Certified Platform Developer I (91%)'],
  Java: ['IIT Bombay Certified (85% score)', 'Campus360 - Faculty Management System'],
  Apex: ["Let's Track Coding Habit Tracker", 'Salesforce Certified Platform Developer I (91%)'],
  Linux: ['Development environment, shell workflows & system utilities'],
  'Data Structures & Algorithms': ['444k+ Global Ranking on LeetCode', '1400+ Rating on CodeChef'],
  'Data Modeling': ["Let's Track Coding Habit Tracker (Junction Objects)", 'Campus360 Relational Schema'],
  'Relational Databases': ['IIT Bombay PostgreSQL (90%)', 'Campus360 Database Architecture'],
  'REST API Development': ["Let's Track wire services & APIs", 'Campus360 backend integration'],
  'Problem Solving': ['LeetCode 444k+ Global Ranking', 'CodeChef 1400+ Rating'],
  'Prompt Engineering': ['Generative AI workflows & automated pipelines'],
  Git: ['Version control & collaborative development'],
  GitHub: ['GitHub (Vishnu-PrasathV)', 'Project repositories & open code'],
  Docker: ['Containerization & microservice deployments'],
  'VS Code': ['Primary development environment & Salesforce extensions'],
  Eclipse: ['Java enterprise & backend software engineering'],
  Figma: ['Dashboard wireframing & UX prototyping'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2023',
    synopsis:
      'Higher Secondary Education at Sri Lakshmi Vidhyalaya Matriculation Higher Secondary School, building mathematical, analytical, and logical foundations.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Stepping Stone',
        description: 'Completed Higher Secondary Education with 72%, establishing core competencies in mathematics and analytical sciences.',
        tags: ['HSC', 'Analytical Foundations', '72%'],
        runtime: '2022 – 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering & Algorithms',
    period: '2023 – 2024',
    synopsis:
      'Commenced B.Tech in Information Technology at Karpagam College of Engineering — establishing competitive programming rankings on LeetCode and CodeChef.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The IT Undergraduate',
        description:
          'B.Tech in Information Technology at Karpagam College of Engineering (CGPA 7.43), building deep foundations in Data Structures and Algorithms.',
        tags: ['B.Tech IT', 'CGPA 7.43', 'Karpagam'],
        runtime: 'Sept 2023 – 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Competitive Coder',
        description:
          'Algorithmic problem-solving achieving a 444k+ Global Ranking on LeetCode and a 1400+ Rating on CodeChef.',
        tags: ['LeetCode 444k+', 'CodeChef 1400+', 'DSA'],
        runtime: 'Ongoing',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'RDBMS Mastery',
        description:
          'Certified in RDBMS PostgreSQL by Spoken Tutorial, IIT Bombay with a 90% score, demonstrating relational query expertise.',
        tags: ['PostgreSQL', 'IIT Bombay', 'Score 90%'],
        runtime: 'August 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Java & Logic Development',
    period: '2024 – 2025',
    synopsis:
      'Strengthening Object-Oriented Programming and building Campus360 - Faculty Management System with MVC architecture.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Java Milestone',
        description:
          'Earned Java Certification from Spoken Tutorial, IIT Bombay with an 85% score, solidifying Object-Oriented principles and architecture.',
        tags: ['Java', 'OOP', 'IIT Bombay (85%)'],
        runtime: 'March 2025',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'Campus360',
        description:
          'Engineered backend data workflows and administrative portals for processing large academic data with optimized SQL/SOQL queries in an MVC architecture.',
        tags: ['Campus360', 'MVC', 'SQL / SOQL', 'PostgreSQL'],
        runtime: '2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Data Pipelines & Automation',
    period: '2025 – 2026',
    synopsis:
      "Architected Let's Track Coding Habit Tracker and earned Salesforce Certified Platform Developer I credentials with 91%.",
    episodes: [
      {
        code: 'S04 E01',
        title: "Let's Track",
        description:
          'Architected custom relational data models with junction objects, complex SOQL queries, and Scheduled Apex data pipelines for streak analytics and leaderboards.',
        tags: ['Apex', 'SOQL', 'Data Pipelines', 'Automation'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Certified Platform Developer',
        description:
          'Achieved Salesforce Certified Platform Developer I with a 91% score, validating enterprise backend logic and automated data workflows.',
        tags: ['Salesforce PD I', 'Score 91%', 'Feb 2026'],
        runtime: 'Feb 2026',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next: Blue Yonder",
    period: 'Now streaming',
    synopsis:
      'Eager to bring strong analytical, database, and software engineering capabilities to a Data Scientist role at Blue Yonder.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Target: Data Scientist',
        description:
          'Passionate about leveraging data pipelines, database management, and backend automation to drive actionable insights and optimize systems at Blue Yonder.',
        tags: ['Data Scientist', 'Blue Yonder', 'Data Pipelines', 'Insights'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Target role', title: 'Data Scientist', detail: 'Blue Yonder • Data pipelines & actionable insights', palette: crimson },
  { label: 'Database credential', title: 'PostgreSQL 90%', detail: 'Certified by Spoken Tutorial, IIT Bombay', palette: jade },
  { label: 'Cloud & Developer', title: 'Salesforce PD I', detail: 'Certified Platform Developer I • 91% Score', palette: amber },
  { label: 'Coding ranking', title: '444k+ LeetCode', detail: 'Global Ranking • 1400+ Rating on CodeChef', palette: violet },
  { label: 'The Data Original', title: "Let's Track", detail: 'Habit Tracker • Data Modeling & Scheduled Apex', palette: amber },
  { label: 'Programming cert', title: 'Java 85%', detail: 'Certified by Spoken Tutorial, IIT Bombay', palette: ocean },
  { label: 'Backend Original', title: 'Campus360', detail: 'Faculty Management System • MVC & SQL', palette: ocean },
  { label: 'Education', title: 'B.Tech IT', detail: 'Karpagam College of Engineering • CGPA 7.43', palette: jade },
  { label: 'Key competency', title: 'Data Modeling', detail: 'Relational data models & junction relationships', palette: crimson },
  { label: 'Next mission', title: 'Data Pipelines', detail: 'Backend automation & system optimization', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Information Technology',
    lines: ['Karpagam College of Engineering, Coimbatore', 'Sept 2023 – 2027'],
    chips: ['CGPA 7.43'],
  },
  {
    kicker: 'Technical Skills',
    title: 'Databases, SQL & Java',
    lines: ['SQL, RDBMS PostgreSQL, MySQL, SOQL', 'Java, Apex, Linux · Git, Docker, REST APIs'],
    chips: ['PostgreSQL', 'Java', 'SQL', 'Apex', 'SOQL', 'Docker'],
  },
  {
    kicker: 'Competitive Coding',
    title: 'Algorithmic Problem Solving',
    lines: ['444k+ Global Ranking on LeetCode', '1400+ Rating on CodeChef', 'Data Structures & Algorithms'],
  },
  {
    kicker: 'Projects',
    title: 'Data & Software Originals',
    lines: [
      "Let's Track — Data Modeling & Automation Platform",
      'Campus360 — Faculty Management System with MVC & SQL',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Top-Tier Certifications',
    lines: [
      'Salesforce Certified Platform Developer I (91%)',
      'RDBMS PostgreSQL — IIT Bombay (90%)',
      'Java Programming — IIT Bombay (85%)',
    ],
  },
  {
    kicker: 'Career Goal',
    title: 'Target: Blue Yonder',
    lines: ['Data Scientist / IT Undergraduate', 'Coimbatore, Tamil Nadu, India'],
  },
];

export type ProfileId = 'vishnu' | 'recruiter' | 'developer' | 'data_scientist';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vishnu',
    name: 'Vishnu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'data_scientist',
    name: 'Data Scientist',
    blurb: 'Data pipelines & analytics first',
    color: '#ffb547',
    order: ['picks', 'originals', 'skills', 'journey', 'moments', 'about', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & Summary', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Data & Software`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 Highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories • RDBMS & Java`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & Download', palette: violet },
};
