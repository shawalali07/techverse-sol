import './myAnswers.css';
import { useEffect, useState } from 'react';
import MyAnswer from './MyAnswer';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAnswers } from '../../redux-toolkit/actions/answers/answers';
import { BeatLoader } from 'react-spinners';
import NotFound from '../../components/error/NotFound';

const MyAnswers = () => {
  const dispatch = useDispatch();
  let myAnswers = useSelector((state) => state.answer.myAnswers);
  const loading = useSelector((state) => state.answer.loading);

  useEffect(() => {
    dispatch(getMyAnswers());
  }, []);
  return (
    <div style={{ paddingTop: '150px' }}>
      <div className='myAnswers'>
        {loading ? (
          <div className='d-flex justify-content-center w-100 pt-5'>
            <BeatLoader size={40} />
          </div>
        ) : !loading && !myAnswers?.length ? (
          <NotFound msg="You haven't answered any question " />
        ) : (
          myAnswers?.map((ans) => <MyAnswer key={ans._id} myAnswers={ans} />)
        )}
      </div>
    </div>
  );
};

export default MyAnswers;
