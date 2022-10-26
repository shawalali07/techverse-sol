import { useState } from 'react';

import './myAnswer.css';
const MyAnswer = (props) => {
  const { myAnswers } = props;
  const [show, setShow] = useState(false);

  return (
    <div class='accordion myAnswer' id='accordionExample'>
      <div class='accordion-item  accordionCard'>
        <h2 class='accordion-header' id='headingOne'>
          <button
            style={{ backgroundColor: '#042743', color: 'white' }}
            class='accordion-button collapsed'
            onClick={() => setShow(!show)}
          >
            Accordion Item #1
          </button>
        </h2>

        {show && (
          <div class='accordion-body'>
            <div
              className='myAnswerDescription'
              dangerouslySetInnerHTML={{ __html: myAnswers?.description }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAnswer;
