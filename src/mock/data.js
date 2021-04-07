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
  cta: 'to-do', // Using network buttons instead
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Motivated full-stack software engineer with a passion for problem-solving and digital products.',
  paragraphTwo:
    `My solid experience in the e-commerce industry enables me to understand business processes and anticipate users’ requirements. 
    With a strong interest in systems and optimization, I have incorporated programming in automating workflows, 
    developing data analytic tools, and increasing operational efficiency.`,
  // V2: 'Prior to pursuing my passion for software, I incorporated programming tools to automate and streamline workflows, and developed data analytics tools in the e-commerce industry.',
  paragraphThree:
    "My keen interest in product engineering and solving users' problems have led me to pursue a career in software.",
  paragraphFour: "Here are a few technologies I've been working with recently:",
  technologies: ['Javascript', 'Node.js', 'React', 'Redux', 'Ruby', 'Rails', 'Python'],
  resume: 'https://www.dropbox.com/s/krtegk2b287cpop/Harrison_Lau.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lulukittens.png',
    video: '',
    title: 'lulukittens',
    info:
      'A class booking platform for trainers and students. Created as mini-site for an e-commerce brand to connect community and commerce.',
    info2: 'React, Redux, MongoDB, Express, Node.js',
    url: 'https://hidden-retreat-15215.herokuapp.com/',
    repo: 'https://github.com/thisisharrison/class-pass-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'algocafe.png',
    video: '',
    title: 'Algo Visualizer',
    info:
      'An algorithm visualizer to educate users on how different sorting algorithms work and the differences of their run time.',
    info2: 'React, Redux',
    url: 'https://thisisharrison.github.io/algo-visualizer/',
    repo: 'https://github.com/thisisharrison/algo-visualizer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'solutionbase.png',
    video: '',
    title: 'SolutionBase',
    info:
      'An idea exchange application targeting problem-solvers to brainstorm solutions to United Nations 17 Sustainable Development Goals.',
    info2: 'React, Redux, Ruby, Ruby on Rails, PostgreSQL',
    url: 'https://solution-base.herokuapp.com/',
    repo: 'https://github.com/thisisharrison/solution-base', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'jQuery Games',
  //   info:
  //     'Games like Snake and Tower of Hanoi build with jQuery.',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/thisisharrison/app-academy/tree/master/Javascript/3_jQuery', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'digitaltools.png',
  //   title: 'Digital Tools',
  //   info:
  //     'An interal business tool for website merchandisers to streamline operation process, QA data and automate tasks.',
  //   info2: 'Built with Python, Flasks, and Boostrap',
  //   url: 'http://digital-tools-app.herokuapp.com/',
  //   repo: 'https://github.com/thisisharrison/digital-tools', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  fullname: 'Harrison Lau',
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

// EDUCATION DATA
export const educationData = {
  schools: [
    {
      id: nanoid(),
      name: 'App Academy Open',
      url: 'https://www.appacademy.io/course/app-academy-open',
      description: 'Software Engineering Immersive',
      year: '2021',
    },
    {
      id: nanoid(),
      name: 'Ivey Business School',
      url: 'https://www.ivey.uwo.ca/',
      description: 'Honors Business Administration',
      year: '2015',
    },
  ],
  certifications: [
    {
      id: nanoid(),
      name: 'Hack Reactor Professional Development',
      url: 'https://www.hackreactor.com/professional-development-software-engineering',
      description: 'Algorithms and Data Structures',
      year: '2021',
    },
    {
      id: nanoid(),
      name: 'HarvardX',
      url: 'https://www.edx.org/school/harvardx',
      description: 'Computer Science for Web Programming',
      year: '2020',
    },
    {
      id: nanoid(),
      name: 'Scrum.org',
      url: 'https://www.scrum.org/',
      description: 'Professional Scrum Product Owner',
      year: '2020',
    },
    {
      id: nanoid(),
      name: 'Scrum.org',
      url: 'https://www.scrum.org/',
      description: 'Professional Scrum Master',
      year: '2020',
    },
  ],
};