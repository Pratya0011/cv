const Project = ({ project }) => {
  const bullets = project.desc
    .split("\n")
    .map((s) => s.replace(/^[•\-]\s*/, "").trim())
    .filter(Boolean);

  return (
    <div className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt={project.title} />
        {project?.category !== "Techademy" && (
          <div className="portfolio__project-overlay">
            <div className="portfolio__project-links">
              <a
                href={project.demo}
                className="btn sm primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="btn sm outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="portfolio__project-info">
        <span className="portfolio__project-category">{project.category}</span>
        <h4>{project.title}</h4>
        {project?.category === "Techademy" ? (
          <ul className="portfolio__project-bullets">
            {bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{project.desc}</p>
        )}
      </div>
    </div>
  );
};

export default Project;
