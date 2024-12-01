import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];

  useEffect(() => {
    const filterProjects = data?.filter(
      (project) => project.category === "Techademy"
    );
    setProjects(filterProjects);
  }, []);

  const filterProjectsHandler = (category) => {
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on. Use the buttons to
        toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
