import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { getMyKnowledge } from '../../redux-toolkit/actions/knowledge/knowledge';
import NotFound from '../error/NotFound';
import './myKnowledge.css';
import MySingleKnowledge from './MySingleKnowledge';

const MyKnowledge = () => {
  const myKnowledge = useSelector((state) => state.knowledge.myKnowledge);
  const loading = useSelector((state) => state.knowledge.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyKnowledge());
  }, []);

  return (
    <div className='myKnowledge'>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <BeatLoader size={40} />
        </div>
      ) : !loading && myKnowledge?.length > 0 ? (
        <div className='container'>
          <div className='myKnowContainer'>
            <div className='myKnowHeader'>
              <h1>Your Knowledge</h1>
              <div className='myKnowHeadings'>
                <div className='myKnowheadings'>
                  <span>Title</span>
                </div>
                <div className='myKnowheadings'>
                  <span>Last Updated</span>
                </div>
              </div>
            </div>
            {myKnowledge?.map((knowledge) => (
              <MySingleKnowledge knowledge={knowledge} />
            ))}
          </div>
        </div>
      ) : (
        <NotFound msg="You haven't shared any knowledge yet!" />
      )}
    </div>
  );
};

export default MyKnowledge;
