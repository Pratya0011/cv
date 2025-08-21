import AboutImage from "../../assets/image.jpg";
import CV from "../../assets/Pratya_Tagore_Resume_Frontend_Engineer.pdf";
import { HiDownload } from "react-icons/hi";
import value from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {value.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Frontend React.js Engineer with expertise in React.js, JavaScript
            (ES6+), and TypeScript, building scalable, high-performance, and
            user-focused web applications. Skilled in developing responsive UIs,
            reusable components, and interactive dashboards using Material UI,
            Ant Design, and modern frontend tooling. Hands-on experience with
            REST APIs, WebSockets, and Keycloak authentication. Strong knowledge
            of Redux, Redux-Saga, Webpack, and Babel for efficient state and
            build management. Adept at cross-browser compatibility, performance
            optimization, and testing (Jest). Recognized for strong
            problem-solving, collaboration, attention to detail, adaptability,
            and continuous learning mindset.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
