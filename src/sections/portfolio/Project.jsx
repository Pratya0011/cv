import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project Image" />
      </div>
      <h4>{project.title}</h4>
      {project?.category === "Techademy" ? (
        <ul>
          {project.desc.split("\n").map((item, index) => (
            <li style={{ padding: 2 }} key={index}>
              {item.replace("-", "").trim()}
            </li>
          ))}
        </ul>
      ) : (
        <p>{project.desc}</p>
      )}
      {project?.category !== "Techademy" && (
        <div className="portfolio__project-cta">
          <a
            href={project.demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.github}
            className="btn sm primary"
            target="_blank"
            rel="noopner noreferrer"
          >
            Gitbub
          </a>
        </div>
      )}
    </Card>
  );
};

export default Project;
