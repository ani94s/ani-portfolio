import {
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    url: "/ani-portfolio",
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
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const resumeSkills =[
  {
      id:'front-end',
      title:'Front End',
      skillList:['HTML','CSS','Tailwind','JavaScript','React','TypeScript','FIGMA','LabVIEW']
  },
  {
      id:'back-end',
      title:'Back End',
      skillList:['C','C++','GraphQL','REST','JSON','Node','AWS DynamoDB','Clickhouse']
  },
  {
      id:'tools',
      title:'Tools and IDE',
      skillList:['VS code','Eclipse','Sublime Text','Mixpanel','Retool','Shopify','LaunchDarkly','Postman','Appsheet']
  },
  {
      id:'version-control',
      title:'Version Control',
      skillList:['GIT','SVN','GitHub','BitBucket','TortoiseSVN']
  },
  {
      id:'project-management',
      title:'Project Management',
      skillList:['Agile','SCRUM','Kanban','JIRA','Trello']
  },
  {
      id:'others',
      title:'Additional Skills',
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
      'Developed and implemented innovative front-end designs utilizing React, TypeScript, and D3.js, resulting in more than a 40% increase in user engagement',
      'Collaborated with cross-functional teams, including designers and backend engineers, to integrate GraphQL APIs with the application’s backend, resulting in a reduction in API response times',
      'Generated unit tests using Jest and worked with the QA engineers on the testing of new features for the application, resulting in a reduction of more than 50% of release issues',
      'Developed a comprehensive, user-friendly application for pro golfers and coaches, that increased their daily efficiency by 35% and reduced the time spent on administrative tasks by 40%, as proven through user feedback surveys',
      'Implemented crucial updates and feature enhancements to the app every sprint, resulting in a 99% user satisfaction rating among professional golfers worldwide',
      'Coordinated with project managers and stakeholders to successfully launch the application, resulting in over 100 golfers within the first month of release.'
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
      'Developed and implemented a customized order fulfilment software solution that reduced processing time by 40% and increased the accuracy of orders by 25%, resulting in a 15% increase in customer satisfaction.',
      'Collaborated with the inventory management team to design and implement an innovative software system that reduced stockouts by 50% while simultaneously decreasing overstocking incidents, saving the company £10K annually.',
      'Created user-friendly interfaces for employees and customers within the e-commerce grocery shop\'s software, resulting in a 30% decrease in customer support tickets and increased online sales.'
    ]
  },
  {
    id:'soliton',
    institution:'Soliton Technologies',
    location: 'Coimbatore,India',
    from: 'Jun 2016',
    to: 'Nov 2019',
    link: 'https://www.solitontech.com/',
    role:'Senior Project Engineer',
    keyPoints: [
      'Developed automated testing software using the OOPS framework for three different industries, resulting in a reduction in manual testing efforts by 75%.',
      'Collaborated with the QA team to identify potential bugs and improve product quality, resulting in a 60% decrease in bug reports.',
      'Collaborated with cross-functional teams to ensure seamless integration of the testing application, leading to an increase in overall product quality.',
      'Worked onsite with the client to Develop and deploy a comprehensive testing application for medical monitors and screens, resulting in a 75% reduction in testing time.',
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
