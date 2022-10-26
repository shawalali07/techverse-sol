import { useState } from 'react';
import './myAnswer.css';
const MyAnswer = (props) => {
  const { myAnswers } = props;
  const [show, setShow] = useState(false);
  console.log(myAnswers);
  return (
    <div class='accordion myAnswer' id='accordionExample'>
      <div class='accordion-item  accordionCard'>
        <h2 class='accordion-header' id='headingOne'>
          <button
            class='accordion-button collapsed'
            onClick={() => setShow(!show)}
          >
            Accordion Item #1
          </button>
        </h2>

        {show && (
          <div class='accordion-body'>
            <div
              dangerouslySetInnerHTML={{ __html: myAnswers?.description }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAnswer;
