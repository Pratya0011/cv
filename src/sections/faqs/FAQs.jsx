import faqs from "./data";
import FAQ from "./FAQ";
import "./faqs.css";

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Certificates</h2>
      <p>Achievements &amp; Continuous Learning</p>
      <div className="container certs__container">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
