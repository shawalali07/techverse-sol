import Snippet from './Snippet';
import './snippets.css';

const Snippets = () => {
  return (
    <div className='snippets'>
      <div className='container'>
        <div className='snipContainer'>
          <div className='snipHeader'>
            <h1>Snippets.</h1>
            <p>
              Short solutions to discrete problems which can be copied and
              pasted.
            </p>
            <div className='snipHeadings'>
              <div className='headings'>
                <span>Name</span>
                <span>Description</span>
              </div>
              <div className='headings'>
                <span>Category</span>
                <span>Last Updated</span>
              </div>
            </div>
          </div>
          <Snippet />
        </div>
      </div>
    </div>
  );
};

export default Snippets;
