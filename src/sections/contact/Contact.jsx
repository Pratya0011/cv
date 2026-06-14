import contacts from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Open to opportunities — reach out via any of the channels below.</p>
      <div className="container contact__container">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <span className="contact__icon">{contact.icon}</span>
            <div className="contact__info">
              <h5>{contact.title}</h5>
              <small>{contact.value}</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
