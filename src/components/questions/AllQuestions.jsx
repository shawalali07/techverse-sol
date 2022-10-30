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
import { Badge } from '@mui/material';

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
      {loading ? (
        <></>
      ) : (
        <div className='allQuestLeft'>
          <div className='achievements'>
            <span className='achievementInfo allQuestInfo'>
              Total Questions{' '}
              <span className='totalQuestBadge'>
                <Badge
                  className='rankBadge'
                  color='warning'
                  badgeContent={questions?.length || 0}
                  showZero
                ></Badge>
              </span>
            </span>
            <span className='achievementInfo allQuestInfo'>
              Total Answers
              <span className='totalQuestBadge'>
                <Badge
                  className='pointBadge'
                  color='success'
                  badgeContent='7,039'
                  showZero
                ></Badge>
              </span>
            </span>
            <span className='achievementInfo allQuestInfo'>
              Total Devs{' '}
              <span className='totalQuestBadge'>
                <Badge
                  className='ansBadge'
                  color='primary'
                  badgeContent='19,224'
                  showZero
                ></Badge>
              </span>
            </span>
            <span className='achievementInfo allQuestInfo'>
              Total Tutorials{' '}
              <span className='totalQuestBadge'>
                <Badge
                  className='ansBadge'
                  color='secondary'
                  badgeContent='19,224'
                  showZero
                ></Badge>
              </span>
            </span>
          </div>
        </div>
      )}
      <div
        className='container allQuestionsContainer d-flex'
        style={{ padding: '90px 220px 0px' }}
      >
        <div className='d-flex flex-column w-100' style={{ border: '0' }}>
          {/* <div className=' d-flex justify-content-end'>
            <ButtonGroup
            style={{ boxShadow: 'none' }}
            color='success'
            variant='contained'
            aria-label='outlined primary button group'
            >
            <Button className='mainQueryBtn'>Javascript</Button>
            <Button className='mainQueryBtn'>Python</Button>
            <Button className='mainQueryBtn'>Solidity</Button>
            <Button className='mainQueryBtn'>Kotlin</Button>
            </ButtonGroup>
          </div> */}
        </div>
        {loading ? (
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <BeatLoader size={40} />
          </div>
        ) : !loading && searchedQuestions?.length > 0 ? (
          <>
            <div className='d-flex flex-row align-items-center justify-content-between'>
              <h2 className='all-questions-heading'>All Questions</h2>
              <button
                onClick={() => navigate('/askquestion')}
                type='button'
                className='btn btn-primary'
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
              <Questions questions={searchedQuestions} loading={loading} />
              <div style={{ marginTop: '40px' }}>
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
          </>
        ) : (
          <NotFound msg='No Question Found' />
        )}
      </div>
    </div>
  );
};

export default AllQuestions;
