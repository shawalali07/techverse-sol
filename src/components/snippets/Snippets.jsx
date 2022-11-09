import { Link } from 'react-router-dom';
import { browserRoutes } from '../../routes/browserRoutes';
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
            <table class='table tHeader'>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className='linkCont'>
                  <Link className='link' to={browserRoutes.SNIPPETS + '/1/1'}>
                    <th className='contentHeadings specColor' scope='row'>
                      useMousePosition
                    </th>
                  </Link>
                  <td>Store the user's cursor position in React state</td>
                  <td>React hook</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
