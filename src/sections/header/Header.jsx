import { useEffect } from "react";
import HeaderImage from "../../assets/image.jpg";
import CV from "../../assets/Pratya_Tagore_Resume_Frontend_Engineer.pdf";
import data from "./data";
import { HiDownload } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__content" data-aos="fade-right">
          <div className="header__tag">
            <span className="status__dot"></span>
            Available for Hire — Immediate Joiner
          </div>
          <h1>
            Pratya Kumar{" "}
            <span className="gradient-text">Tagore</span>
          </h1>
          <h4 className="header__role">
            Jr Frontend Engineer · Full Stack Developer
          </h4>
          <p className="header__desc">
            Passionate about building innovative, scalable web applications.
            Specialized in React.js, TypeScript &amp; modern frontend
            architectures.
          </p>
          <div className="header__cta">
            <a href="#contact" className="btn primary">
              Let's Talk
            </a>
            <a href={CV} download className="btn outline">
              Download CV <HiDownload />
            </a>
          </div>
          <div className="header__socials">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="header__visual" data-aos="fade-left">
          <div className="header__image-glow"></div>
          <div className="header__image-wrapper">
            <img src={HeaderImage} alt="Pratya Kumar Tagore" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
