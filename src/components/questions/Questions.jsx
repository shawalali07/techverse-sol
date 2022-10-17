import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import Pagination from '../Pagination';
import './Questions.css';
import NotFound from '../error/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnswers,
  getAnswersById,
} from '../../redux-toolkit/actions/answers/answers';
import Question from './Question';

const Questions = (props) => {
  const { questions, loading } = props;

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(4);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = questions?.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAnswers());
  }, []);

  return (
    <>
      <div className='container'>
        {loading ? (
          <div style={{ marginRight: '17vw', marginTop: '8vh' }}>
            <BeatLoader size={40} />
          </div>
        ) : !loading && questions?.length > 0 ? (
          currentQuestion?.map((question) => <Question question={question} />)
        ) : (
          <NotFound msg='No Question Found' />
        )}
        {!loading && questions?.length > 0 && (
          <div className='mt-3'>
            <Pagination
              postsPerPage={questionsPerPage}
              totalPosts={questions?.length}
              paginate={paginate}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Questions;
