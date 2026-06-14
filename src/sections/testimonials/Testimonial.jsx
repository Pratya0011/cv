const Testimonial = ({ testimonial }) => {
  return (
    <div className="skill__card">
      <div className="skill__icon" style={{ color: testimonial.color }}>
        {testimonial.icon}
      </div>
      <h6>{testimonial.name}</h6>
      <small>{testimonial.profession}</small>
    </div>
  );
};

export default Testimonial;
