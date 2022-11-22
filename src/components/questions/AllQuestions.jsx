import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation, useNavigate } from 'react-router-dom';
import './AllQuestions.css';
import Questions from './Questions';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux-toolkit/actions/questions/question';
import { BeatLoader, ClipLoader } from 'react-spinners';
import ReactPaginate from 'react-paginate';
import NotFound from '../error/NotFound';
import { Badge } from '@mui/material';
import { getTopDevs } from '../../redux-toolkit/actions/developers/developers';
import SkeletonAllQ from '../../skeletons/SkeletonAllQ';

const AllQuestions = () => {
  const location = useLocation();
  console.log(location);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const query = useSelector((state) => state?.question?.questionQuery);
  const keys = ['title', 'description'];
  const loading = useSelector((state) => state?.question?.loading);

  const navigate = useNavigate();

  let questions = useSelector((state) => state.question?.questionsData);

  let searchedQuestions = useSelector(
    (state) => state.question?.searchQuestions
  );

  searchedQuestions = [...searchedQuestions]?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  questions = [...questions]?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  searchedQuestions = questions
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );

  const pageCount = Math.ceil(questions?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div
      style={{
        backgroundColor: '#fdfbfb',
      }}
      className='allQuestions'
    >
      <div className='allQuestionsContainer'>
        {loading ? (
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <BeatLoader size={40} />
          </div>
        ) : !loading && searchedQuestions?.length > 0 ? (
          <>
            <div className='d-flex flex-row align-items-center justify-content-between'>
              <h1 className='display-6 all-questions-heading fw-bold'>
                All Questions
              </h1>
              <button
                onClick={() => navigate('/askquestion')}
                type='button'
                style={{ backgroundColor: '#0f80bd', color: 'black' }}
                className='btn'
              >
                Ask Question
              </button>
            </div>

            <span className='d-flex'>
              {loading ? (
                <span style={{ marginRight: '5px', marginTop: '2px' }}>
                  <ClipLoader size={15} />
                </span>
              ) : (
                questions?.length
              )}{' '}
              questions
            </span>
            <div className='questionsComponent'>
              <Questions
                questions={
                  location?.state ? location?.state : searchedQuestions
                }
                loading={loading}
              />
              <div
                className='questionContainerbg'
                style={{ marginTop: '40px' }}
              >
                {questions?.length > 4 ? (
                  <ReactPaginate
                    previousLabel={'Prev <<'}
                    nextLabel={'Next >>'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                  />
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <NotFound msg='No Question Found' />
        )}
      </div>
    </div>
  );
};

export default AllQuestions;
