import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { browserRoutes } from '../../routes/browserRoutes';
import './snippets.css';
import { getSnippets } from '../../redux-toolkit/actions/snippet/snippet';
import Snippet from './Snippet';
import { BeatLoader } from 'react-spinners';
import NotFound from '../error/NotFound';

const Snippets = () => {
  const snippets = useSelector((state) => state?.snippetSlice?.snippets);
  const loading = useSelector((state) => state?.snippetSlice?.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSnippets());
  }, []);

  return (
    <div className='snippets'>
      {loading ? (
        <div className='d-flex justify-content-center mt-5'>
          <BeatLoader size={40} />
        </div>
      ) : !loading && snippets?.length > 0 ? (
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
                  {snippets?.map((snippet) => (
                    <Snippet snippet={snippet} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <NotFound msg='No snippet posted' />
      )}
    </div>
  );
};

export default Snippets;
