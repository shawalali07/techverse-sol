import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import ProfileCard from './ProfileCard';
import TextEditor from '../textEditor/TextEditor';
import { useDispatch } from 'react-redux';
import {
  getAnswersById,
  submitAnswer,
} from '../../redux-toolkit/actions/answers/answers';
import { ReactDOM } from 'react';
import Answers from '../answers/Answers';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useToken } from '../../hooks/register/useToken';
import { Link } from 'react-router-dom';
const QuestionDetails = () => {
  const token = useToken();
  const [invoke, setInvoke] = useState(false);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    questionId: '',
    description: '',
  });

  const location = useLocation();
  const {
    state: { question },
  } = location;

  const answers = useSelector((state) => state?.answer?.answersData);
  const name = question?.userName?.split(' ')?.slice(0, 1)?.join('');

  const createdAt = moment(question?.createdAt).startOf('hour').fromNow();
  const updatedAt = moment(question?.updatedAt).startOf('hour').fromNow();

  const handleSubmitAnswer = () => {
    setInvoke(true);
    dispatch(submitAnswer(formValues, setLoading));
  };

  useEffect(() => {
    setFormValues({ ...formValues, questionId: question?._id });
  }, []);

  const getNumOfAnswers = (id) => {
    return answers?.filter((a) => a.questionId === id).length;
  };

  useEffect(() => {
    dispatch(getAnswersById(id));
    if (invoke) dispatch(getAnswersById(id));
  }, [invoke]);

  return (
    <>
      <div className='mainDetails pt-4'>
        <div className='details'>
          <div className='mt-4'>
            <h3 className='detailsTitle'>{question?.title}</h3>
          </div>
          <span className='text-secondary '>Asked </span>
          <span>{createdAt}</span>
          <span className='text-secondary'>Modified</span>
          <span>{updatedAt}</span>
          <hr />
          <div className='question-text'>
            <div
              dangerouslySetInnerHTML={{ __html: question?.description }}
              id='text'
              className='questionDetails'
            ></div>
            <div>
              <ProfileCard
                image={question?.userImage}
                name={name}
                createdAt={createdAt}
              />
            </div>
          </div>
          <div className='total-answers'>
            <h4>{getNumOfAnswers(id)} Answers</h4>
          </div>
          <div>
            <Answers />
          </div>

          {token ? (
            <>
              <div className='your-answer'>
                <h4>Your Answer</h4>
              </div>
              <div className='card' style={{ width: '70rem', height: '20rem' }}>
                <div class='form-group'></div>
                <div class='form-group'>
                  <label
                    style={{
                      textAlign: 'left',
                      marginLeft: '0.5rem',
                      fontWeight: 'bold',
                    }}
                    className='d-block s-label mt-3'
                  >
                    Description
                  </label>
                </div>
                <div className='card-body'>
                  <TextEditor
                    setFormValues={setFormValues}
                    formValues={formValues}
                  />
                </div>
              </div>
              <Button
                variant='contained'
                onClick={handleSubmitAnswer}
                style={{
                  marginRight: '75.5rem',
                  width: '9vw',
                  marginBottom: '20px',
                }}
                className='mt-4'
              >
                Submit
              </Button>
            </>
          ) : (
            <h6 className='loginToAnswer'>
              You must <Link to='/signin'>Login</Link> to answer
            </h6>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionDetails;
