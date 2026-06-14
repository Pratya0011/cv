import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiRedux, SiMaterialui, SiAntdesign,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiPostman, SiSocketdotio,
  SiWebpack, SiBabel, SiNpm, SiYarn, SiVercel,
  SiJest, SiGit, SiGithub, SiScrumalliance, SiLighthouse,
} from "react-icons/si";
import { MdDynamicForm } from "react-icons/md";

const data = [
  // ── Frontend ────────────────────────────────────────────────
  { id: 1,  icon: <SiHtml5 />,        name: "HTML5",           profession: "Markup Language",       color: "#E34F26", category: "Frontend" },
  { id: 2,  icon: <SiCss3 />,         name: "CSS3",            profession: "Styling",               color: "#1572B6", category: "Frontend" },
  { id: 3,  icon: <SiJavascript />,   name: "JavaScript",      profession: "ES6+ / Core Language",  color: "#F7DF1E", category: "Frontend" },
  { id: 4,  icon: <SiTypescript />,   name: "TypeScript",      profession: "Typed JavaScript",      color: "#3178C6", category: "Frontend" },
  { id: 5,  icon: <SiReact />,        name: "React.js",        profession: "Frontend Library",      color: "#61DAFB", category: "Frontend" },
  { id: 6,  icon: <SiReact />,        name: "React Native",    profession: "Mobile Development",    color: "#00D8FF", category: "Frontend" },
  { id: 7,  icon: <SiRedux />,        name: "Redux",           profession: "State Management",      color: "#764ABC", category: "Frontend" },
  { id: 8,  icon: <SiRedux />,        name: "Redux Saga",      profession: "Async Middleware",      color: "#86D46B", category: "Frontend" },
  { id: 9,  icon: <SiMaterialui />,   name: "Material UI",     profession: "UI Component Library",  color: "#007FFF", category: "Frontend" },
  { id: 10, icon: <SiAntdesign />,    name: "Ant Design",      profession: "UI Component Library",  color: "#0170FE", category: "Frontend" },
  { id: 11, icon: <MdDynamicForm />,  name: "Formik",          profession: "Form Management",       color: "#9B59B6", category: "Frontend" },

  // ── Backend ─────────────────────────────────────────────────
  { id: 12, icon: <SiNodedotjs />,    name: "Node.js",         profession: "Backend Runtime",       color: "#339933", category: "Backend" },
  { id: 13, icon: <SiExpress />,      name: "Express.js",      profession: "Backend Framework",     color: "#eeeeee", category: "Backend" },
  { id: 14, icon: <SiMongodb />,      name: "MongoDB",         profession: "NoSQL Database",        color: "#47A248", category: "Backend" },
  { id: 15, icon: <SiFirebase />,     name: "Firebase",        profession: "BaaS Platform",         color: "#FFCA28", category: "Backend" },

  // ── APIs ────────────────────────────────────────────────────
  { id: 16, icon: <SiPostman />,      name: "REST APIs",       profession: "API Development",       color: "#FF6C37", category: "APIs" },
  { id: 17, icon: <SiSocketdotio />,  name: "WebSocket",       profession: "Real-time Comms",       color: "#eeeeee", category: "APIs" },

  // ── Build & Deploy ──────────────────────────────────────────
  { id: 18, icon: <SiWebpack />,      name: "Webpack",         profession: "Module Bundler",        color: "#8DD6F9", category: "Build & Deploy" },
  { id: 19, icon: <SiBabel />,        name: "Babel",           profession: "JS Compiler",           color: "#F9DC3E", category: "Build & Deploy" },
  { id: 20, icon: <SiNpm />,          name: "NPM",             profession: "Package Manager",       color: "#CB3837", category: "Build & Deploy" },
  { id: 21, icon: <SiYarn />,         name: "Yarn",            profession: "Package Manager",       color: "#2C8EBB", category: "Build & Deploy" },
  { id: 22, icon: <SiVercel />,       name: "Vercel",          profession: "Deployment Platform",   color: "#eeeeee", category: "Build & Deploy" },

  // ── Testing & Tools ─────────────────────────────────────────
  { id: 23, icon: <SiJest />,         name: "Jest",            profession: "Testing Framework",     color: "#C21325", category: "Testing & Tools" },
  { id: 24, icon: <SiGit />,          name: "Git",             profession: "Version Control",       color: "#F05032", category: "Testing & Tools" },
  { id: 25, icon: <SiGithub />,       name: "GitHub",          profession: "Code Hosting",          color: "#eeeeee", category: "Testing & Tools" },
  { id: 26, icon: <SiScrumalliance />,name: "Agile / Scrum",   profession: "Dev Methodology",       color: "#009FDA", category: "Testing & Tools" },
  { id: 27, icon: <SiLighthouse />,   name: "Performance",     profession: "Optimization",          color: "#F44B21", category: "Testing & Tools" },
];

export default data;
