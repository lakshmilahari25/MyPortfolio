


import {
  mobile,
  backend,
  creator,
  web,
  c, java, python, r, javascript, sql, php, html, css, react, node, typescript, mysql, mongodb, flask, tens, pytorch, aspnet, angular, threejs, git, excel, tableau, vscode, jupyter, eclipse, colab,

tailwind,

  
  
  del,
  gsuu,
  techo,
  air,
  movie,
  
  home,
  chase,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Engineer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = {
  "Programming Languages": [
    { name: "C", icon: c },
    { name: "Java", icon: java },
    { name: "Python", icon: python },
    { name: "R", icon: r},
    { name: "JavaScript", icon: javascript },
    { name: "SQL", icon: sql },
    { name: "PHP", icon: php }
  ],
  "Web Technologies": [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "TypeScript", icon: typescript },
    { name: "TailWind", icon: tailwind}
  ],
  "Databases": [
    { name: "MySQL", icon: mysql },
    { name: "MongoDB", icon: mongodb }
  ],
  "Tools & Frameworks": [
    { name: "Flask", icon: flask },
    { name: "TensorFlow", icon: tens },
    { name: "PyTorch", icon: pytorch },
    { name: "ASP.NET", icon: aspnet },
    { name: "Angular", icon: angular },
    { name: "Three.js", icon: threejs },
    { name: "GitHub", icon: git },
    { name: "Microsoft Excel", icon: excel },
    { name: "Tableau", icon: tableau },
    { name: "VSCode", icon: vscode },
    { name: "Jupyter Notebook", icon: jupyter },
    { name: "Eclipse", icon: eclipse },
    { name: "Google Colab", icon: colab }
  ]
};

// src/constants/index.js

 const education = [
  {
    college_name: "GEORGIA STATE UNIVERSITY",
    degree: "Master of Science in Computer Science",
    date: "Jan 2024 - Present",
    gpa: "3.97",
    description: "Full fee waiver along with GRA.",
  },
  {
    college_name: "V R SIDDHARTHA ENGINEERING COLLEGE",
    degree: "Bachelor of Technology in Computer Science",
    date: "June 2019 - May 2023",
    gpa: "3.6",
    description: "Full fee waiver.",
  },
  // Add more education entries here
];



const experiences = [
  {
    title: "Graduate Research Assistant",
    company_name: "Georgia State University",
    icon: gsuu,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Successfully developed scalable and efficient RESTful APIs to manage dynamic data requests for a front-end JavaScript application, resulting in robust handling of over 50,000 concurrent users and ensuring a seamless user experience.",
      " Led multiple user testing sessions to collect feedback, refining the app's user interface, and successfully reducing post-launch bug reports by 41%, thereby enhancing user satisfaction and app reliability. ", " Collaborated with a developer to implement RESTful APIs using Node.js, optimizing performance and significantly boosting reporting speed by 24%, thereby improving the efficiency of the analytics team.",
      " Designed and developed an MVP for a store delivery management platform with React and JavaScript, enabling over 200 business customers to manage and monitor their deliveries efficiently.",
      " Conducted meticulous code reviews and comprehensive testing for three new features on a donor-facing web app, enhancing functionality and reliability, which led to a 12% increase in contributions."
      
    ],
  },
  {
    title: "Software Engineer 1",
    company_name: "Deloitte",
    icon: del,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      


    "Spearheaded end-to-end development of Intela, a tax-based internal application, contributing to three new version releases and improving tax processing efficiency by 30%. "," Enhanced software quality by writing comprehensive integration tests, boosting code coverage by 70-80% across frontend (Angular) and backend (.NET) systems.",
      
     " Increased application efficiency by 20% through strategic performance enhancements and code refactoring initiatives."," Expanded application reach to 10+ languages using the Angular framework, improving user accessibility and engagement."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Techolution",
    icon: techo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2023",
    points: [
      


      "Integrated third-party APIs using Python, enhancing app functionality and increasing user satisfaction by 24%. Improved database performance by optimizing MySQL queries, resulting in an 11% boost in query response times.",
      " Streamlined the CI/CD pipeline, reducing build times by 27% and improving deployment efficiency. Contributed to the e-commerce team by designing algorithms to match users to products, boosting sales by 16%.",
      " Participated in code reviews and collaborated with senior engineers, enhancing code quality by 18% and reducing merge conflicts by 13% using Git."
    ],
  },
  
];



const projects = [
 
  {
    name: "HOME HIVE",
    description:
    "Developed a comprehensive real estate platform featuring a centralized property database, simplified transaction procedures, and a marketplace linking users to service providers. Implemented user registration, role-based dashboards, and property management through a card system.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "yellow-text-gradient",
      },
    ],
    image: home,
    source_code_link: "https://github.com/lakshmilahari25/Home-Hive",
  },
  {
    name: "Fortune Game",
    description:
      "The project introduces a web-based game modeled after the renowned television show 'Who Wants to Be a Millionaire'. Users can register, sign in, and partake in a succession of multiple-choice questions, accumulating scores based on their accurate responses.",
      tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: chase,
    source_code_link: "https://github.com/lakshmilahari25/ChaseyourFortune",
  },
  {
    name: "MovieMatch",
    description:
      "A movie recommendation system similar to Netflix Content Based Recommender System recommends movies similar to the movie, the user likes and analyses the sentiments on the reviews given by the user for that movie.",
        tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Lahari25/MovieMatch",
  },
];

export { services, technologies,education, experiences, projects };
