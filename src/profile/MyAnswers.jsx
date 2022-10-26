import './myAnswers.css';
import { useEffect } from 'react';
import MyAnswer from './MyAnswer';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAnswers } from '../redux-toolkit/actions/answers/answers';
const MyAnswers = () => {
  const dispatch = useDispatch();
  const myAnswers = useSelector((state) => state.answer.myAnswers);

  useEffect(() => {
    dispatch(getMyAnswers());
  }, []);

  return (
    <div className='myAnswers container'>
      {myAnswers?.map((ans) => (
        <MyAnswer key={ans._id} myAnswers={ans} />
      ))}
    </div>
  );
};

export default MyAnswers;
