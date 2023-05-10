import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiInstagram, SiFacebook, SiLinkedin,SiGithub, SiTypescript, SiJest, SiGraphql, SiGit, SiJira, SiGmail, SiD3Dotjs, SiNodedotjs, SiPostgresql } from "react-icons/si";
import { figmaLogo, nonogramAnimate } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    url: "/ani-portfolio/",
  },
  {
    id: "resume",
    title: "About Me",
    url: "/ani-portfolio/me",
  },
  {
    id: "projects",
    title: "My Works",
    url: "/ani-portfolio/my-works",
  },
  {
    id: "contact",
    title: "Contact",
    url: "/ani-portfolio/contact",
  },
];


export const socialMedia = [
  {
    id: "linkedIn",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/anirudhan-srisudhan/",
    color: "#0072b1"
  },
  {
    id: "instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/anirudhan94s/",
    color: "#C13584"
  },
  {
    id: "facebook",
    icon: <SiFacebook />,
    link: "https://www.facebook.com/anirudhan94s/",
    color: "#3b5998"
  },
  {
    id: "github",
    icon: <SiGithub />,
    link: "https://github.com/ani94s",
    color: "#fafafa"
  },
  {
    id: "email",
    icon: <SiGmail />,
    link: "mailto:anirudhan94s@gmail.com",
    color: "#ea4335"
  },
];

export const allSkills = [
  {
    id: 'html',
    label: 'HTML',
    icon: <SiHtml5 />,
    color: "#FC490B"
  },
  {
    id: 'css',
    label: 'CSS',
    icon: <SiCss3 />,
    color: "#2196F3"
  },
  {
    id: 'javascript',
    label: 'Javascript',
    icon: <SiJavascript />,
    color: "#FFDF00"
  },
  {
    id: 'react',
    label: 'React',
    icon: <SiReact />,
    color: "#00ACEA"
  },
  {
    id: 'node',
    label: 'Node.js',
    icon: <SiNodedotjs />,
    color: "#68a063"
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    icon: <SiTypescript />,
    color: "#3178C6"
  },
  {
    id: 'jest',
    label: 'Jest',
    icon: <SiJest />,
    color: "#969696"
  },
  {
    id: 'graphql',
    label: 'GraphQL',
    icon: <SiGraphql />,
    color: "#f4447c"
  },
  {
    id: 'git',
    label: 'git',
    icon: <SiGit />,
    color: "#F1502F"
  },
  {
    id: 'jira',
    label: 'Jira',
    icon: <SiJira />,
    color: "#2684FF"
  },
  {
    id: 'tailwind',
    label: 'Tailwind',
    icon: <SiTailwindcss />,
    color: "#3490dc"
  },
  {
    id: 'd3',
    label: 'D3.js',
    icon: <SiD3Dotjs />,
    color: "#f26d58"
  },
  {
    id: 'figma',
    label: 'Figma',
    icon: <img src={figmaLogo} alt="figma" className="w-20 h-20" />,
    color: "#f26d58"
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: "#0064a5"
  },
]

export const resumeSkills =[
  {
      id:'front-end',
      title:'Front End',
      skillClassName:'bg-[#ffb766]',
      skillList:['HTML','CSS','Tailwind','JavaScript','React','TypeScript','FIGMA','LabVIEW']
  },
  {
      id:'back-end',
      title:'Back End',
      skillClassName:'bg-[#c2edda]',
      skillList:['C','C++','GraphQL','REST','JSON','Node','AWS DynamoDB','Clickhouse']
  },
  {
      id:'tools',
      title:'Tools and IDE',
      skillClassName:'bg-[#68d388]',
      skillList:['VS code','Eclipse','Sublime Text','Mixpanel','Retool','Shopify','LaunchDarkly','Postman','Appsheet']
  },
  {
      id:'version-control',
      title:'Version Control',
      skillClassName:'bg-[#fceed1]',
      skillList:['GIT','SVN','GitHub','BitBucket','TortoiseSVN']
  },
  {
      id:'project-management',
      title:'Project Management',
      skillClassName:'bg-[#fff5d7]',
      skillList:['Agile','SCRUM','Kanban','JIRA','Trello']
  },
  {
      id:'others',
      title:'Additional Skills',
      skillClassName:'bg-[#f9c5bd]',
      skillList:['Mentorship and Training','Leadership','Team Player','Planning and Coordination']
  }
]

export const workExperience = [
  {
    id:'clippd',
    institution:'Clippd Pvt Ltd',
    location: 'London,UK',
    from: 'Jun 2021',
    to: 'Nov 2022',
    link: 'https://www.clippd.com/',
    role:'Application Developer',
    keyPoints: [
      'Developed and proposed innovative, comprehensive, user-friendly front-end solutions for pro golfers and coaches with React, TypeScript, Tailwind CSS, and D3.js, resulting in more than a 40% increase in user engagement.',
      'Collaborated with cross-functional teams, including designers and backend engineers, to integrate GraphQL APIs and AWS services with the application’s backend.',
      'Generated unit tests using Jest and worked with the QA engineers on the testing of new features for the application, resulting in a reduction of more than 50% of release issues',
      'Coordinated with project managers and stakeholders, using project management tools like JIRA and Trello, to successfully launch the application, resulting in over 100 golfers within the first month of release.'
    ]
  },
  {
    id:'megacart',
    institution:'Megacart',
    location: 'Leicester,UK',
    from: 'Feb 2021',
    to: 'Jun 2021',
    link: '',
    role:'Software Engineer Intern',
    keyPoints: [
      'Built a customized order fulfilment software solution that reduced processing time by 40% and increased the accuracy of orders by 25%, resulting in a 15% increase in customer satisfaction.',
      'Partnered with the inventory management team to design and implement an innovative software system that reduced stockouts by 50% while simultaneously decreasing overstocking incidents, saving the company £10K annually.',
      'Devised user-friendly interfaces for employees and customers within the e-commerce grocery shop\'s software, resulting in a 30% decrease in customer support tickets and increased online sales.'
    ]
  },
  {
    id:'soliton-sr',
    institution:'Soliton Technologies',
    location: 'Coimbatore,India',
    from: 'Jun 2018',
    to: 'Nov 2019',
    link: 'https://www.solitontech.com/',
    role:'Senior Project Engineer',
    keyPoints: [
      'Developed automated testing software using the OOPS framework for three different industries, resulting in a reduction in manual testing efforts by 75%.',
      'Indulged in owning different projects and guiding junior engineers to ensure seamless integration of the testing application, leading to an increase in overall product quality of 50%.',
      'Collaborated with cross-functional teams to ensure seamless integration of the testing application, leading to an increase in overall product quality.',
      'Worked onsite with the client to Develop and deploy a comprehensive testing application for medical monitors and screens, resulting in a 75% reduction in testing time.',
    ]
  },
  {
    id:'soliton-jr',
    institution:'Soliton Technologies',
    location: 'Coimbatore,India',
    from: 'May 2016',
    to: 'Jun 2018',
    link: 'https://www.solitontech.com/',
    role:'Project Engineer',
    keyPoints: [
      'Produced automated testing software using the OOPS framework in LabVIEW for three different industries, resulting in a 75% reduction in manual testing efforts.',
    ]
  },
]

export const otherExperience = [
  {
    id:'hot-fudge',
    institution:'Hot Fudge',
    location: 'Leicester,UK',
    from: 'Mar 2020',
    to: 'Mar 2021',
    link: '',
    role:'Team Member, Part-time',
    keyPoints: [
      'Worked as a team member at a dessert shop in Leicester, managing customers, prioritizing online orders, and preparing food simultaneously, which resulted in a revenue increase of about 60%.',
      'The orders received a high level of customer satisfaction and turnover, which helped us increase the business on 2 more online platforms and add additional 10 items to the menu.'
    ]
  },
  {
    id:'soliton-training',
    institution:'Soliton Technologies',
    location: 'Coimbatore,India',
    from: 'Mar 2019',
    to: 'Jun 2019',
    link: 'https://www.solitontech.com/',
    role:'Senior Project Engineer',
    keyPoints: [
      'Drove the internship training program and mentored 25 junior engineers on software development best practices, resulting in a 90% retention rate of engineers hired in permanent roles.',
      'The internship focused on and provided insights into LabVIEW and programming fundamentals, along with the software development lifecycle.'
    ]
  }
]

export const education = [
  {
    id:'uol',
    institution:'University of Leicester',
    location: 'Leicester,UK',
    from: 'Jan 2020',
    to: 'May 2022',
    link: 'https://le.ac.uk',
    course:'MSc - Advanced Software Engineering',
    keyPoints: [
    ]
  },
  {
    id:'srec',
    institution:'Shri Ramakrishna Engineering College',
    location: 'Coimbatore,India',
    from: 'Jun 2012',
    to: 'May 2016',
    link: 'https://www.srec.ac.in',
    course:'BE - Electronics and Communication Engineering',
    keyPoints: [
    ]
  }
]

export const projects = [
  {
    id:"nonogram",
    title: "Nonogram Puzzle Solver",
    desc: "A web application or a web UI to play nonogram puzzles",
    githubLink:"",
    techstack: ['html','css', 'javascript','react'],
    image: nonogramAnimate,
  },
  {
    id:"social-feed",
    title: "Social Feed for Golfers",
    desc: "Teamed up with senior developers to design and code a visually appealing prototype of the social feed",
    githubLink:"",
    techstack: ['html','css', 'javascript','react','typescript','jest','tailwind'],
    image: "",
  },
  {
    id:"spl",
    title: "Soliton Premier League",
    desc: "A gaming platform that is used for the company's annual hackathon, where players upload their bots and observe their gameplay",
    githubLink:"",
    techstack: ['html','css', 'javascript'],
    image: "",
  },
]
