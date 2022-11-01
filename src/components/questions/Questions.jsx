import { useEffect } from 'react';

import './Questions.css';
import NotFound from '../error/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswers } from '../../redux-toolkit/actions/answers/answers';
import Question from './Question';
import { BeatLoader } from 'react-spinners';

const Questions = (props) => {
  const { questions, loading } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswers());
  }, []);

  return (
    <div className='questions'>
      <div className='container d-flex flex-column justify-content-center align-items-center mt-4 px-0'>
        {loading ? (
          <div style={{ marginRight: '17vw', marginTop: '8vh' }}>
            <BeatLoader size={40} />
          </div>
        ) : !loading && !questions?.length ? (
          <NotFound msg="You haven't asked any question " />
        ) : (
          questions?.map((question) => <Question question={question} />)
        )}
      </div>
    </div>
  );
};

export default Questions;
