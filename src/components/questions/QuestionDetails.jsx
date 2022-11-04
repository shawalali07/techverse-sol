import './questionDetails.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Badge, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import TextEditor from '../textEditor/TextEditor';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnswersById,
  submitAnswer,
  addComment,
  addVote,
  canVote,
} from '../../redux-toolkit/actions/answers/answers';
import { browserRoutes } from '../../routes/browserRoutes';
import { BeatLoader } from 'react-spinners';
import NotFound from '../error/NotFound';
import AnswerCard from './AnswerCard';
import { useToken } from '../../hooks/register/useToken';
import { getQuestionsById } from '../../redux-toolkit/actions/questions/question';
const QuestionDetails = () => {
  const token = useToken();
  const idd = useSelector((state) => state.authSlice.id);
  const question = useSelector((state) => state.question.questionId);
  const [subLoading, setSubLoading] = useState(false);
  const [comLoading, setComLoading] = useState(false);

  const {
    state: { id },
  } = useLocation();
  const [formValues, setFormValues] = useState({ questionId: id });

  const dispatch = useDispatch();
  const answers = useSelector((state) => state?.answer?.answersData);
  const loading = useSelector((state) => state?.answer?.loading);
  useEffect(() => {
    dispatch(getAnswersById(id));
    dispatch(getQuestionsById(id));
  }, []);

  return (
    <div className='questionDet'>
      {loading ? (
        <div className='justify-content-center align-items-center mt-5'>
          <BeatLoader size={40} />
        </div>
      ) : (
        <>
          <div className='detTop'>
            <h1 className='detTitle'>{question?.title}</h1>
            <div className='detInfo'>
              <span>asked {moment(question?.updatedAt).fromNow()},</span>
              <Link
                className='link'
                to={browserRoutes.DEVELOPERS + '/' + question.userId}
                state={{ data: { data: question?.userId } }}
              >
                <span>
                  by{' '}
                  <b style={{ textTransform: 'capitalize' }}>
                    {question?.userName}
                  </b>
                </span>
              </Link>
            </div>
          </div>
          <div className='detCenter'>
            <p
              dangerouslySetInnerHTML={{ __html: question?.description }}
              className='detDesc'
            ></p>

            {answers?.map((answer) => (
              <AnswerCard
                canVote={question?.canVote}
                userId={question?.userId}
                id={id}
                setComLoading={setComLoading}
                comLoading={comLoading}
                answer={answer}
                answerId={id}
              />
            ))}
          </div>
          {token ? (
            <div className='detCenter'>
              <div className='detAnsContainer'>
                <div className='detCard'>
                  <div className='detTopCard'>
                    <div className='detAnsLeft'>
                      <h1 className='detWrite'>Write</h1>
                    </div>
                  </div>
                  <div className='detCenterCard'>
                    <div className='detAnsDesc'>
                      <TextEditor
                        setFormValues={setFormValues}
                        formValues={formValues}
                      />
                    </div>
                  </div>
                  <div className='detBottomCard'>
                    <div className='detBtnContainer'>
                      <Button
                        disabled={subLoading}
                        onClick={() =>
                          dispatch(
                            submitAnswer(
                              formValues,
                              setSubLoading,
                              getAnswersById,
                              id
                            )
                          )
                        }
                        style={{ borderRadius: '15px' }}
                        className='detWriteBtn'
                        size='medium'
                        variant='contained'
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <span className='mustLogin'>
              You must{' '}
              <Link className='link mustLoginLink' to={browserRoutes.SIGNIN}>
                login
              </Link>{' '}
              to answer
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
