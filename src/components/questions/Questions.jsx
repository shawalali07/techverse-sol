import { useEffect } from 'react';

import './Questions.css';
import NotFound from '../error/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswers } from '../../redux-toolkit/actions/answers/answers';
import Question from './Question';

const Questions = (props) => {
  const { questions } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswers());
  }, []);
  return (
    <div className='questions'>
      <div className='container'>
        {questions?.map((question) => (
          <Question question={question} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
