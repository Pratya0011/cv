import { FaAward } from "react-icons/fa";

const FAQ = ({ faq }) => {
  return (
    <div className="cert__card">
      <div className="cert__icon">
        <FaAward />
      </div>
      <div className="cert__info">
        <h5>{faq.question}</h5>
        <small>{faq.answer}</small>
      </div>
    </div>
  );
};

export default FAQ;
