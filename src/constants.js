// Cleaned Portfolio Data Configuration
// Removed unused logos and redundant info for clarity and optimization

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import bsaLogo from './assets/education_logo/csjm-university-logo-big-947x1024.webp';
import Logo from './assets/education_logo/varanasi-public-school.webp';
import vpsLogo from './assets/education_logo/raj-english-school-varanasi-logo.webp';


import financeImage from './assets/finance.png';
import ecommerceImage from './assets/Mern-ecommerce-image.png';
import vehicleRentalImage from './assets/Vehicle Rental image.png';
import virtualAssistantImage from './assets/Virtual Assistant image.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: 'Csjm University, Kanpur',
    date: 'July 2023 - July 2027',
    grade: '9.24 CPI',
    desc: "Bachelor's degree in Computer Science (B.Tech). Learned DSA, Web Dev, DBMS, and worked on practical projects.",
    degree: 'Bachelor of Technology - BTECH (Computer Science)',
  },
  {
    id: 2,
    img: Logo,
    school: 'Varanasi Public School, Varanasi',
    date: 'Apr 2020 - Mar 2021',
    grade: '85.4%',
    desc: 'Class 12 with PCM and Computer Science under CBSE board.',
    degree: 'CBSE (XII)',
  },
  {
    id: 3,
    img: vpsLogo,
    school: 'Raj English School, Varanasi',
    date: 'Apr 2018 - Mar 2019',
    grade: '88.4%',
    desc: 'Class 10 with Science and Computer under CBSE board.',
    degree: 'CBSE (X)',
  },
];


export const projects = [
  {
    id: 0,
    title: 'AI Finance Manager',
    description:
      'AI-powered personal finance platform for tracking income and expenses, analyzing financial activity, and generating useful financial insights.',
    image: financeImage,
    tags: ['React JS', 'Node.js', 'Express.js', 'MongoDB', 'AI'],
    github: 'https://github.com/Shashank285-001/AI-Finance-Manager',
    webapp: '#',
  },

  {
    id: 1,
    title: 'AI Virtual Assistant',
    description:
      'Full-stack AI virtual assistant with user authentication, persistent conversations, and a React frontend connected to backend services.',
    image: virtualAssistantImage,
    tags: ['React JS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Shashank285-001/Virtual-Assistant',
    webapp: 'https://virtual-assistant-9m2b.onrender.com',
  },

  {
    id: 2,
    title: 'Vehicle Rental System',
    description:
      'Full-stack vehicle rental platform with vehicle browsing, user management, reservation workflows, REST APIs, and database integration.',
    image: vehicleRentalImage,
    tags: ['React JS', 'Node.js', 'Express.js', 'MySQL', 'REST API'],
    github: 'https://github.com/Shashank285-001/Vehicle-Rental-System',
    webapp: '#',
  },

  {
    id: 3,
    title: 'MERN E-Commerce Platform',
    description:
      'Full-stack e-commerce application with product browsing, authentication, cart management, orders, admin functionality, and REST APIs.',
    image: ecommerceImage,
    tags: ['React JS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Shashank285-001/Shopper-Website',
    webapp: '#',
  },
];