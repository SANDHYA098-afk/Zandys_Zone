// Four shipped projects. Every one is deployed, so `live` is always present.
export const projects = [
  {
    id: 'devcouncil',
    image: '/dev-council.png',
    title: 'DevCouncil AI',
    kind: 'Multi-agent AI engineering team',
    blurb:
      'Specialised agents review a GitHub repository for architecture, security and code quality, then reach a consensus. Findings stream back as they happen, with Bandit running the security pass.',
    tech: ['Next.js', 'FastAPI', 'Groq / Llama-3.3-70B', 'PostgreSQL', 'Bandit', 'SSE'],
    live: 'https://dev-council-ai.netlify.app',
  },
  {
    id: 'neurocopilot',
    image: '/neuro.png',
    title: 'NeuroCopilot',
    kind: 'AI-powered RAG chatbot',
    blurb:
      'Answers from a knowledge base instead of from memory. Questions are embedded and matched against a FAISS index, and Groq writes the reply from whichever passages come back.',
    tech: [
      'Next.js',
      'FastAPI',
      'Python',
      'Groq',
      'FAISS',
      'Sentence Transformers',
      'Tailwind',
      'Netlify',
    ],
    live: 'https://neurocopilot.netlify.app/login',
  },
  {
    id: 'reachcraft',
    image: '/reachcraft.png',
    title: 'ReachCraft',
    kind: 'AI agent for content strategy',
    blurb:
      'Turns a business brief into a content strategy through a multi-stage pipeline that decides, simulates the result, then refines its own output on the feedback.',
    tech: ['React', 'FastAPI', 'LangChain', 'Groq', 'Python', 'Vercel'],
    live: 'https://reachcraft.netlify.app/',
  },
  {
    id: 'notestack',
    image: '/notestack.png',
    title: 'NoteStack',
    kind: 'Serverless notes and file sharing',
    blurb:
      'Notes and file sharing with authentication, search, sharing and notifications, running entirely serverless on AWS with event-driven workflows behind it.',
    tech: [
      'Next.js',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'S3',
      'Cognito',
      'TypeScript',
      'Vercel',
    ],
    live: 'https://notestack-tawny.vercel.app/',
  },
];

export const certifications = [
  {
    name: 'Code in Place 2026',
    issuer: 'Stanford University',
    href: 'https://codeinplace.stanford.edu/cip6/certificate/q69jy2',
  },
  {
    name: 'Introduction to AI with Python (CS50 AI)',
    issuer: 'Harvard University',
    href: 'https://cs50.harvard.edu/certificates/4d3724e7-cd63-4b46-8b19-47285ae1269d',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    href: 'https://freecodecamp.org/certification/sandy0102/responsive-web-design',
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    href: 'https://www.hackerrank.com/certificates/iframe/4d0468d16ddc',
  },
];

// Grouped by the job each tool does, so the section reads as capability
// rather than as one long wall of names. Icons live in /public/icons and are
// tinted to one grey, so the set reads as a family instead of a logo salad.
export const techStack = [
  {
    group: 'Languages',
    items: [
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'HTML/CSS', icon: '/icons/htmlcss.svg' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'FastAPI', icon: '/icons/fastapi.svg' },
      { name: 'Flask', icon: '/icons/flask.svg' },
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Hugging Face', icon: '/icons/huggingface.svg' },
      { name: 'Vercel', icon: '/icons/vercel.svg' },
      { name: 'Netlify', icon: '/icons/netlify.svg' },
    ],
  },
];

export const startingFeatures = [
  'JEPPIAAR ENGINEERING COLLEGE, Chennai',
  'CGPA: 9.0 / 10 (up to 6th semester)',
];

export const newFeatures = [
  {
    imgUrl: '/anchor.svg',
    title: 'NCC CADET',
    subtitle:
        'CADET OF JEC-NCC Attended NATIONAL LEVEL camp and FIRING camp that emphasized discipline, endurance, and pushing limits',
  },
  {
    imgUrl: '/paintbrush.svg',
    title: 'SKETCHING',
    subtitle:
        'Enjoy drawing and sketching anime and cartoon characters, spending time turning interest into art whenever I get the chance.',
  },
];

// Strongest result first.
export const insights = [
  {
    imgUrl: '/certf.png',
    title: '🏆 GLOBAL RANK 51–100 ~ HACKHAZARDS ’26',
    subtitle:
        'NAMESPACE Community. Ranked among the Top 100 projects out of 2,600+ submissions in a global hackathon with 31,000+ registered builders.',
  },
  {
    imgUrl: '/event_02.jpeg',
    title: 'WINNER ~ ENGLISH ADZAP',
    subtitle:
        'Won first prize with a cash award at a national-level symposium conducted by ST. JOSEPH\'S COLLEGE OF ENGINEERING. With very limited preparation time, my team Supernova had to quickly develop the concept, write the script and dialogues, assign roles, and deliver the presentation effectively',
  },
  {
    imgUrl: '/event_1.jpeg',
    title: 'WEB-A-THON25 ~ The Ultimate Web Quest',
    subtitle:
        'Planned and coordinated a vibe-coding based web-a-thon at my college, where participants had just 2 hours to build a website, introducing a new quest every 15 minutes. Along with my team, I was involved in planning, execution, designing posters and certificates.',
  },
];

export const socials = [
  {
    name: 'linkedin',
    url: '/lin.svg',
    link: { text: 'Where I share my journey and connect with people', href: 'https://www.linkedin.com/in/sandhiya-sl-149569291' },
  },
  {
    name: 'github',
    url: '/github.svg',
    link: { text: 'Where I build, break, and learn through projects', href: 'https://github.com/SANDHYA098-afk' },
  },
];
