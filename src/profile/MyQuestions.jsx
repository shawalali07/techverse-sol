import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificUserQuestions } from '../redux-toolkit/actions/questions/question';
import Questions from '../components/questions/Questions';
import Table from '../Table';
const MyQuestions = () => {
  const loading = useSelector((state) => state?.question?.loading);

  let questions = useSelector(
    (state) => state?.question?.specificUserQuestions
  );
  questions = [...questions]?.sort(
    (a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecificUserQuestions());
  }, []);

  return (
    <div style={{ paddingTop: '90px' }}>
      <Questions questions={questions} loading={loading} />
    </div>
  );
};

export default MyQuestions;
