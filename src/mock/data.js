import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Harrison lau | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I am a software developer from Hong Kong', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Harrison',
  subtitle: 'Software Engineer',
  cta: 'to-do',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Motivated full-stack software engineer with a passion for problem solving and product engineering.',
  paragraphTwo:
    'My solid experience in the e-commerce industry enable me to understand business processes and anticipate users’ requirements. With a strong interest in systems and optimization, I incorporated programming tools to automate and streamline workflows, developed data analytic tools, and increased operation efficiency.',
  // 'Prior to pursuing my passion for software, I incorporated programming tools to automate and streamline workflows, and developed data analytics tools in the e-commerce industry.',
  paragraphThree:
    "My keen interest in digital products and solving users' problems have led me to pursure a career in software.",
  paragraphFour: "Here are a few technologies I've been working with recently:",
  tech: [
    'Javascript',
    'Node.js',
    'React',
    'Redux',
    'Ruby',
    'Rails',
    'Python',
  ],
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'lulukittens',
    info:
      'A class booking platform for trainers and students. Created as mini-site for an e-commerce brand to tie community and commerce.',
    info2: 'Built with MERN, Redux, Material-UI, and Styled-Components.',
    url: 'https://hidden-retreat-15215.herokuapp.com/',
    repo: 'https://github.com/thisisharrison/class-pass-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Algo Visualizer',
    info:
      'An algorithm visualizer to educate users on how different algorithms work and the differences in their run time.',
    info2: 'Build with React and Redux.',
    url: 'https://thisisharrison.github.io/algo-visualizer/',
    repo: 'https://github.com/thisisharrison/algo-visualizer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SolutionBase',
    info:
      'An idea exchange application targeting problem-solvers to brainstorm solutions to United Nations 17 Sustainable Development Goals.',
    info2: 'Built with Ruby, Ruby on Rails, React, Redux, Boostrap, and Styled-Components',
    url: 'https://solution-base.herokuapp.com/',
    repo: 'https://github.com/thisisharrison/solution-base', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'harrison.lau@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/harrisonhlau/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/thisisharrison',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

// SKILLS DATA
export const skillsData = [
  { id: nanoid(), name: 'Bootstrap', icon: 'bootstrap' },
  { id: nanoid(), name: 'CSS3', icon: 'css3' },
  { id: nanoid(), name: 'Django', icon: 'django' },
  { id: nanoid(), name: 'Express', icon: 'express' },
  { id: nanoid(), name: 'Flask', icon: 'flask' },
  { id: nanoid(), name: 'Gatsby', icon: 'gatsby' },
  { id: nanoid(), name: 'Git', icon: 'git' },
  { id: nanoid(), name: 'GitHub', icon: 'github' },
  { id: nanoid(), name: 'HTML5', icon: 'html5' },
  { id: nanoid(), name: 'Javascript', icon: 'javascript' },
  { id: nanoid(), name: 'Material UI', icon: 'materialui' },
  { id: nanoid(), name: 'MongoDB', icon: 'mongodb' },
  { id: nanoid(), name: 'Node.js', icon: 'nodejs' },
  { id: nanoid(), name: 'PostgreSQL', icon: 'postgresql' },
  { id: nanoid(), name: 'Python', icon: 'python' },
  { id: nanoid(), name: 'Rails', icon: 'rails' },
  { id: nanoid(), name: 'React', icon: 'react' },
  { id: nanoid(), name: 'Redux', icon: 'redux' },
  { id: nanoid(), name: 'Ruby', icon: 'ruby' },
  { id: nanoid(), name: 'SASS', icon: 'sass' },
  { id: nanoid(), name: 'SQLalchemy', icon: 'sqlalchemy' },
  { id: nanoid(), name: 'jQuery', icon: 'jquery' },
];