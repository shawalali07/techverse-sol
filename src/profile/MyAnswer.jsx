import { useState } from 'react';
import './myAnswer.css';
const MyAnswer = () => {
  const [show, setShow] = useState(false);

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
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAnswer;
