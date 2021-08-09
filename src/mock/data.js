import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: `Eamon's Portfolio`, // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: `Eamon O'Callaghan`,
  subtitle: `I'm a Junior JavaScript FullStack Developer`,
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'steve_jobs-wide.jpg',
    title: 'Steve Jobs tribute page',
    info:
      'A custom made tribute page made to demonste the Full Bleed effect using custom CSS and CSS Grid. Made entirely custom to demonstrate CSS and design skills',
    info2: '',
    url: 'https://stevejobstribute.netlify.app/',
    repo: 'https://github.com/eamon0989/freecodecamptribute', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'toDolist.png',
    title: 'ToDo List App',
    info: `A standard toDo list app with included local storage so your changes will save when you refresh the page. The interface changes depending on whether you are using a mouse or a touch device. It can detect swipes and uses them to delete items from the list. It includes a reset button to clear local storage and reset the app. It includes smooth animations and user input sanitization. It can be installed as a PWA and used offline.`,
    info2: '',
    url: 'https://jsvanillatodo.netlify.app/',
    repo: 'https://github.com/eamon0989/vanillatodolist', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.png',
    title: 'PHP pin cracking',
    info: `A faster version of my Javascript md5 pin cracker, it converts a 4 digit pin to an md5 hash, then brute forces it. It works on the server so it's much faster and doesn't hang the browser like the Javascript version.`,
    info2: '',
    url: 'https://pincracking.000webhostapp.com/',
    repo: 'https://github.com/eamon0989/courserahashes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hashing.png',
    title: 'Md5 hashing and cracking',
    info: `A project I made to convert a 4 digit pin to it's md5 hash, then brute force it by checking against all possible options. Written using vanilla JS, it also checks the input and only allows the correct input type.`,
    info2: '',
    url: 'https://md5cracker.netlify.app/',
    repo: 'https://github.com/eamon0989/bulmapincracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'eamon0989@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Eamon74493541',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@eamonocallaghan',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eamonocallaghan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/eamon0989',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
