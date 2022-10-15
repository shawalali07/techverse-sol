import { useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import './AllQuestions.css';
import Questions from './Questions';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux-toolkit/actions/questions/question';
import { ClipLoader } from 'react-spinners';
import withSidebar from '../../hoc/withSidebar';

const AllQuestions = () => {
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

  return (
    <>
      <div className='container '>
        <div className='card ' style={{ width: '55rem', height: '7.5rem' }}>
          <h2 className='all-questions mt-1'>All Questions</h2>
          <span>
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
            {questions?.length ? questions?.length : <ClipLoader size={15} />}{' '}
            questions
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

      <Questions
        questions={searchedQuestions.length ? searchedQuestions : questions}
        loading={loading}
      />
    </>
  );
};

export default withSidebar(AllQuestions);
