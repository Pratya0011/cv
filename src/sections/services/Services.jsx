import Card from "../../components/Card";
import data from "./data";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h2>Experience &amp; Education</h2>
      <p>My Professional Journey</p>
      <div className="container" data-aos="fade-up">
        <div className="timeline">
          {data.map((item) => (
            <div key={item.id} className="timeline__item">
              <div className="timeline__marker">{item.icon}</div>
              <Card className="timeline__card">
                <h4>{item.title}</h4>
                <div
                  className="service__desc"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
