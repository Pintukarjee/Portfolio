// ─── Navigation ───────────────────────────────────
export const navSections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

// ─── Skills ───────────────────────────────────────
export const skills = {
  backend:  ['Core Java', 'Spring Boot', 'Spring MVC', 'Spring Framework', 'Hibernate / JPA', 'RESTful APIs', 'Microservices', 'JUnit'],
  frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Angular', 'JSP'],
  database: ['MySQL', 'AWS EC2', 'AWS S3'],
  tools:    ['Git / GitHub', 'Postman', 'IntelliJ IDEA', 'Eclipse / STS', 'VS Code', 'Agile / Scrum'],
};

// ─── Experience ────────────────────────────────────
export const experience = [
  {
    role: 'Backend Development',
    company: 'Personal & Academic Projects',
    location: 'CUTM , Paralakhemundi (Odisha)',
    period: '2023 – Present',
    points: [
      'Designed and developed applications using Spring MVC architecture and REST APIs',
      'Implemented service layer with abstraction and repositories for DB operations in Spring Boot',
      'Established RestController with ResponseEntity and implemented RESTful Web Services',
      'Integrated email services, applied Pagination & sorting with Sort class',
      'Deployed applications on AWS EC2 instances and configured S3 storage buckets',
      'Used ModelMapper to convert Entity ↔ DTO',
      'Tested microservices using Postman; used Git & GitHub for version control',
    ],
  },
  {
    role: 'API & Web Development',
    company: 'University & Self-Learning Projects',
    location: 'CUTM , Paralakhemundi (Odisha)',
    period: '2021 – 2023',
    points: [
      'Built and explored Spring Boot projects during university coursework and free time',
      'Developed controller, entity, and repository layers while learning Spring Boot',
      'Created JSP views with Spring form validation as part of academic practice',
      'Exposed and consumed RESTful Web Services; tested via Postman',
      'Set up MySQL databases and implemented Hibernate/JPA repositories independently',
      'Applied concepts like Pagination and ModelMapper through self-driven projects',
      'Deployed practice applications on AWS EC2 & S3 to learn cloud deployment',
    ],
  },
];

// ─── Projects ──────────────────────────────────────
export const projects = [
  {
    title: 'Spring Boot Microservice System',
    desc:  'Designed and deployed a scalable microservice architecture using Spring Boot, with inter-service communication via RESTful APIs. Deployed on AWS EC2 with S3 storage integration.',
    tags:  ['Java', 'Spring Boot', 'MySQL', 'AWS'],
  },
  {
    title: 'RESTful API Platform',
    desc:  'Built a robust backend API platform with Spring Boot implementing JWT authentication, MySQL persistence, Pagination, ModelMapper DTO conversion, and email notification services.',
    tags:  ['Spring Boot', 'REST API', 'JWT', 'MySQL'],
  },
  {
    title: 'Spring MVC Web Application',
    desc:  'Developed a full-stack web application using Spring MVC with JSP views, Spring form validation, Hibernate/JPA ORM for database operations, and role-based access control.',
    tags:  ['Spring MVC', 'JSP', 'Hibernate', 'MySQL'],
  },
];

// ─── Contact ───────────────────────────────────────
export const contactLinks = [
  { icon: '✉', label: 'Email',    value: 'pintukarjee6@gmail.com',         href: 'mailto:pintukarjee6@gmail.com' },
  { icon: '✆', label: 'Phone',    value: '+91 8847876574',                  href: 'tel:+918847876574' },
  { icon: '⌖', label: 'Location', value: 'Madiwala, Bengaluru, Karnataka',  href: 'https://maps.google.com/?q=Madiwala,Bengaluru' },
];