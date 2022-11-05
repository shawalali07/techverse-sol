import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificUserQuestions } from '../../redux-toolkit/actions/questions/question';
import Questions from '../../components/questions/Questions';
import NotFound from '../../components/error/NotFound';
import { BeatLoader } from 'react-spinners';
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

  return loading ? (
    <div
      style={{ paddingTop: '90px' }}
      className='d-flex justify-content-center align-items-center'
    >
      <BeatLoader size={40} />
    </div>
  ) : !loading && questions?.length > 0 ? (
    <div style={{ paddingTop: '90px' }}>
      <h1>Your Questions</h1>
      <Questions questions={questions} loading={loading} />
    </div>
  ) : (
    <NotFound msg="You haven't asked any question" />
  );
};

export default MyQuestions;
