import Image1 from "../../assets/project1.png";
import Image2 from "../../assets/project2.png";
import Image3 from "../../assets/project3.png";
import Image4 from "../../assets/project4.png";
import Image5 from "../../assets/project5.png";
import b2a from "../../assets/techademyCampus.jpg";
import yaksha from "../../assets/yaksha.jpeg";
import plugin from "../../assets/plugin.png";

const data = [
  {
    id: 1,
    category: "Techademy",
    image: yaksha,
    title: "Yaksha Assessment Platform",
    desc: `• Developed  coding assessments, integrating an in-browser IDE with non-editable code sections,Enabled functionality for test case execution and dynamic coding language changes.
  • Designed the user flow for viewing upcoming, live, qualified, and not qualified assessments, along with results displayed in an analytical format.
  • Implemented a feature to download results for offline use.
  • Built a product catalogue feature allowing tenants to view, request, and add skills and categories to their catalog for personalized training content.
  • Implemented a timer to enforce a minimum submission duration during the test•taking flow.
  • Developed a leaderboard integrated into user profiles, displaying ranks and performance in hackathons.
  • Created a user analytics dashboard for admins to view assessment data for enrolled users, enabling better monitoring and insights.`,
  },
  {
    id: 2,
    category: "Techademy",
    image: b2a,
    title: "Techademy Campus (B2A)",
    desc: `• Integrated Keycloak Identity Provider for secure authentication and role-based access control.
• Developed a user management system to onboard and manage users with different roles (students, instructors, and admins).
• Implemented program management features for annual patterns, semester-based courses, and short-term programs.
• Built dynamic role-specific dashboards to provide actionable insights and improve user productivity.
• Designed an Assessment Repository feature, enabling instructors to create, assign, and manage assessments while allowing students to take them seamlessly.`,
  },
  {
    id: 3,
    category: "Mern",
    image: Image1,
    title: "Flixxit (Mern)",
    desc: `Flixxit combines the power of MongoDB, Express, React, and Node.js into an immersive OTT platform that delivers a dynamic experience.`,
    demo: "https://flixxit-2i45.onrender.com/",
    github: "https://github.com/Pratya0011/Flixxit",
  },
  {
    id: 4,
    category: "React",
    image: Image2,
    title: "Pizza Mania (Frontend)",
    desc: `Pizza Ordering and Recipe Searching Website using
    React.js,
    Axios for seamless data fetching,
    Font Awesome icons,
    Context to manage global state`,
    demo: "https://pizzamania-md28.onrender.com/",
    github: "https://github.com/Pratya0011/pizzamania",
  },
  {
    id: 5,
    category: "Javascript",
    image: Image3,
    title: "Arenamart E-commerce",
    desc: `Designed and developed Arenamart Ecommerce, a dynamic e-commerce platform built from the ground up using vanilla JavaScript.`,
    demo: "https://pratya0011.github.io/ArenaMart-Ecommerce/",
    github: "https://github.com/Pratya0011/ArenaMart-Ecommerce",
  },
  {
    id: 6,
    category: "Javascript",
    image: Image4,
    title: "Movie Mania",
    desc: `Designed and developed Movie Mania, a dynamic movie searching platform built from the ground up using vanilla JavaScript.`,
    demo: "https://pratya0011.github.io/mini-project-builder-movie-mania/",
    github: "https://github.com/Pratya0011/mini-project-builder-movie-mania",
  },
  {
    id: 7,
    category: "Javascript",
    image: Image5,
    title: "Smart Watch",
    desc: `Designed and developed smart Watch, a dynamic smartwatch built from the ground up using vanilla JavaScript.`,
    demo: "https://pratya0011.github.io/project-builder-smartwatch-timer/",
    github: "https://github.com/Pratya0011/project-builder-smartwatch-timer",
  },
  {
    id: 8,
    category: "Techademy",
    image: plugin,
    title: "Techademy CodeBridge VS Code Extension",
    desc: `• Built a VS Code extension integrated with Yaksha Assessment Platform to support VM-based coding assessments.
• Implemented secure login via email & OTP , automatic Git repo cloning, and workspace initialization.
• Developed Webview UI with timer sync, save code, execute test cases, and submit assessment features through WebSocket
and local server.
• Integrated real-time proctoring by dynamically loading React-based monitoring scripts in the plugin for proctored vs non-
proctored assessments.
• Ensured seamless assessment submission with bidirectional timer communication and automated repo cleanup post-
submission.`,
  },
];

export default data;
