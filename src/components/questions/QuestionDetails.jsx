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
} from '../../redux-toolkit/actions/answers/answers';
import { browserRoutes } from '../../routes/browserRoutes';
import { BeatLoader } from 'react-spinners';
import NotFound from '../error/NotFound';
import AnswerCard from './AnswerCard';
const QuestionDetails = () => {
  const id = useSelector((state) => state.authSlice.id);
  console.log(id);
  const [subLoading, setSubLoading] = useState(false);
  const [comLoading, setComLoading] = useState(false);

  const {
    state: {
      question: {
        title,
        description,
        userName,
        userImage,
        tags,
        updatedAt,
        _id,
        userId,
      },
    },
  } = useLocation();
  const [formValues, setFormValues] = useState({ questionId: _id });

  const dispatch = useDispatch();
  const answers = useSelector((state) => state?.answer?.answersData);
  const loading = useSelector((state) => state?.answer?.loading);
  console.log(useLocation());
  useEffect(() => {
    dispatch(getAnswersById(_id));
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
            <h1 className='detTitle'>{title}</h1>
            <div className='detInfo'>
              <span>asked {moment(updatedAt).startOf('hour').fromNow()},</span>
              <Link
                className='link'
                to={browserRoutes.DEVELOPERS + '/' + userId}
                state={{ data: { data: userId } }}
              >
                <span>
                  by <b style={{ textTransform: 'capitalize' }}>{userName}</b>
                </span>
              </Link>
            </div>
          </div>
          <div className='detCenter'>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className='detDesc'
            ></p>

            {answers?.map((answer) => (
              <AnswerCard
                userId={userId}
                id={id}
                setComLoading={setComLoading}
                comLoading={comLoading}
                answer={answer}
                answerId={_id}
              />
            ))}
          </div>
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
                        dispatch(submitAnswer(formValues, setSubLoading))
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
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
