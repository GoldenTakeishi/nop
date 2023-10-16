import './FaQ.scss';
import { useState } from 'react';

const FaQ = props => {
  const [isOpen, setOpen] = useState(false);
  const {answer, question} = props;

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`faq${isOpen ? ' faq__open' : ''}`} onClick={handleClick}>
      <div className="faq__inline">
        <span className="faq__question">{question}</span>
        <span className="faq__button">{ isOpen ? '-' : '+' }</span>
      </div>
      <span className="faq__answer">
        { answer }
      </span>
    </div>
  );
};

export default FaQ;