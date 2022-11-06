import { Link } from 'react-router-dom';
import './snippet.css';
import { browserRoutes } from '../../routes/browserRoutes';
const Snippet = () => {
  return (
    <div className='snippet'>
      <div className='snipContent'>
        <div className='contentDiv'>
          <Link className='link' to={browserRoutes.SNIPPETS + '/1/1'}>
            <span className='contentHeadings specColor'>useMousePosition</span>
          </Link>
          <span className='contentHeadings'>
            Store the user's cursor position in React state asad sssdsa add sdsd
            dsdas ads
          </span>
        </div>
        <div className='contentDivRight'>
          <span className='contentHeadings'>React Hook</span>
          <span className='contentHeadings'>Mar 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Snippet;
