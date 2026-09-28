import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  baxter,
  digiata,
  grace,
  lepato,
  uct,
  portfolio3d,
  pastryshop,
  testscheduler,
  clothingclassifier,
  sandpile
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
    title: "Full‑Stack Web Developer & UI Specialist",
    icon: web,
  },
  {
    title: "AI‑Driven Software Engineer",
    icon: mobile,
  },
  {
    title: "Cloud & Deployment Engineer",
    icon: backend,
  },
  {
    title: "Data & Database Architect",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Volunteer Teacher Assistant",
    company_name: "Lepato M. High School",
    icon: lepato,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Taught Grade 12 learners during winter vacation, focusing on exam preparation and subject mastery.",
      ],
  },
  {
    title: "Disability Service Lecture Notetaker",
    company_name: "University of Cape Town",
    icon: uct,
    iconBg: "#383E56",
    date: "Jul 2023 - October 2024",
    points: [
      "Served as the primary point of contact for first-year students during Orientation Week, welcoming and guiding new students.",
      "Supported students' transition into university life through orientation events, activities, and registration processes.",
      ],
  },
  {
    title: "Orientation Leader",
    company_name: "University of Cape Town",
    icon: uct,
    iconBg: "#383E56",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Served as the primary point of contact for first-year students during Orientation Week, welcoming and guiding new students.",
      "Supported students' transition into university life through orientation events, activities, and registration processes.",
    ],
  },
  {
    title: "Statistics Tutor",
    company_name: "Grace Education",
    icon: grace,
    iconBg: "#383E56",
    date: "April 2025 - Jul 2025",
    points: [
      "Tutored UCT students in statistics, building their understanding of and confidence in course material.",
      "Helped students prepare for tests and exams through structured, one-on-one support.",
    ],
  },
  {
    title: "Theatre Usher",
    company_name: "The Baxter Theatre",
    icon: baxter,
    iconBg: "#383E56",
    date: "December 2025 - Feb 2026",
    points: [
      "Welcome and guided patrons to their seats, ensuring a smooth and enjoyable theatre experience.",
      "Assisted with crowd management, ticket verification, and venue safety protocols.",
      "Provided friendly customer service and support during performances and events.",
      "Contributed to maintaining the theatre’s professional and welcoming atmosphere.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Digiata Technology Services ",
    icon: digiata,
    iconBg: "#383E56",
    date: "Jan 2026 - Jul 2026",
    points: [
      "Collaborated with leading investment firms including Allan Gray, Sanlam Collective Investments, Momentum, Intembeko, and Old Mutual.",
      "Supported IT initiatives to design, develop, and maintain automated systems, APIs, and software solutions that streamline back-office operations.",
      "Enabled efficient processing of critical investment fund management functions, including payments and administration, across a diverse range of investment funds and financial products.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "3D Developer Portfolio",
    description:
      "Interactive 3D portfolio website showcasing my experience, skills and projects, with animated Three.js scenes and a fully responsive layout. Currently in development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio3d,
    source_code_link: "https://github.com/Geasemvx/3D-Portfolio-Website",
  },
  {
    name: "Pastry E-commerce Store",
    description:
      "Live e-commerce website built with a friend for a pastry startup, letting customers browse and order products online. Containerised with Docker and deployed to Render.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: pastryshop,
    source_code_link: "https://sweet-chantonia-1.onrender.com/",
  },
  {
    name: "Student Test Scheduler",
    description:
      "Final-year UCT capstone: a test scheduling web application built by a team of 3 that I led. Fuction of app is to enable course convenors schedule student tests, book venues, and detect any student test clashes seamlessly. The project scored above 80%.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "apache",
        color: "pink-text-gradient",
      },
    ],
    image: testscheduler,
    source_code_link: "https://github.com/Geasemvx/Capstone-Project",
  },
  {
    name: "Clothing Image Classifier",
    description:
      "Machine learning model trained in Jupyter Notebooks to classify images of different clothing items. Model achieved an accuracy of 85,7%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: clothingclassifier,
    source_code_link: "https://github.com/Geasemvx/Machine_Learning_Neural_Network",
  },
  {
    name: "Parallel Sandpile Simulator",
    description:
      "Multithreaded Abelian sandpile simulation that splits the grid across processor cores with Java's Fork/Join framework, reads CSV input and renders the result as a PNG image.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "forkjoin",
        color: "green-text-gradient",
      },
      {
        name: "multithreading",
        color: "pink-text-gradient",
      },
    ],
    image: sandpile,
    source_code_link: "https://github.com/Geasemvx/ParallelAbelianSandpile",
  },
]
export { services, technologies, experiences, testimonials, projects };