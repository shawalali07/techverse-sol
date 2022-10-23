import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import './AllQuestions.css';
import Questions from './Questions';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux-toolkit/actions/questions/question';
import { BeatLoader, ClipLoader } from 'react-spinners';
import ReactPaginate from 'react-paginate';
import NotFound from '../error/NotFound';

const AllQuestions = () => {
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
      className='allQuestions'
      style={{ backgroundColor: 'white', height: '100vh' }}
    >
      <div className='container' style={{ paddingTop: '90px' }}>
        <div
          className='card allQCard'
          style={{ backgroundColor: 'antiquewhite' }}
        >
          <h2 className='all-questions-heading mt-1'>All Questions</h2>
          <span className='btnAsk'>
            <button
              style={{ marginRight: '1.8vw' }}
              onClick={() => navigate('/askquestion')}
              type='button'
              className='btn btn-primary ask-question'
            >
              Ask Question
            </button>
          </span>
          <span className='all-questions-number'>
            {loading ? <ClipLoader size={15} /> : questions?.length} questions
          </span>

          <div className='btn-filter-questions'>
            <ButtonGroup
              variant='outlined'
              aria-label='outlined primary button group'
            >
              <Button>Newest</Button>
              <Button>Active</Button>
              <Button>Bountied</Button>
              <Button>Unanswered</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      {loading ? (
        <div style={{ marginRight: '17vw', marginTop: '8vh' }}>
          <BeatLoader size={40} />
        </div>
      ) : !loading && searchedQuestions?.length > 0 ? (
        <div className='questionsComponent'>
          <Questions questions={searchedQuestions} loading={loading} />
          <div style={{ marginTop: '40px', marginRight: '50px' }}>
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
          </div>
        </div>
      ) : (
        <NotFound msg='No Question Found' />
      )}
    </div>
  );
};

export default AllQuestions;
