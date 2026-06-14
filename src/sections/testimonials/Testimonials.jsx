import { useState } from "react";
import testimonials from "./data";
import Testimonial from "./Testimonial";
import "./testimonials.css";

const CATEGORIES = ["Frontend", "Backend", "APIs", "Build & Deploy", "Testing & Tools"];

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const filtered = testimonials.filter((s) => s.category === activeCategory);

  return (
    <section id="testimonials">
      <h2>Skills</h2>
      <p>Technologies I Work With</p>
      <div className="container">
        <div className="skills__categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`btn cat__btn ${activeCategory === cat ? "primary" : "white"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="skills__container">
          {filtered.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
