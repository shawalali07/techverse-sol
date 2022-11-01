import './questionDetails.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Badge, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import TextEditor from '../textEditor/TextEditor';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnswersById,
  submitAnswer,
  addComment,
} from '../../redux-toolkit/actions/answers/answers';
const QuestionDetails = () => {
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
      },
    },
  } = useLocation();
  const [formValues, setFormValues] = useState({ questionId: _id });
  const [commentDesc, setCommentDesc] = useState({});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const answers = useSelector((state) => state?.answer?.answersData);
  console.log(answers);
  useEffect(() => {
    dispatch(getAnswersById(_id));
  }, []);

  return (
    <div className='questionDet'>
      <div className='detTop'>
        <h1 className='detTitle'>{title}</h1>
        <div className='detInfo'>
          <span>asked {moment(updatedAt).startOf('hour').fromNow()},</span>
          <span>
            by <b style={{ textTransform: 'capitalize' }}>{userName}</b>
          </span>
        </div>
      </div>
      <div className='detCenter'>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className='detDesc'
        ></p>

        {answers?.map((answer) => (
          <div className='detAnsContainer'>
            <div className='detCard'>
              <div className='detTopCard'>
                <div className='detAnsLeft'>
                  <img className='detImg' src={answer?.userImage} />
                  <span className='detAnsAuthor'>{answer?.userName}</span>
                  <span className='detAnsAnswered'>answered</span>
                  <span className='detAnsTime'>
                    {moment(answer?.updatedAt).startOf('hour').fromNow()}
                  </span>
                </div>
                <div className='align-items-center gap-4 d-none d-md-flex'>
                  <ThumbUpOffAltIcon />
                  <Badge
                    // style={{ width: '20px', height: '20px' }}
                    color='primary'
                    badgeContent={answer?.voteCount}
                    showZero
                  ></Badge>
                </div>
              </div>
              <div className='detCenterCard'>
                <p
                  dangerouslySetInnerHTML={{ __html: answer?.description }}
                  className='detAnsDesc'
                ></p>
                {answer?.comments?.map((comment) => (
                  <div>
                    <div className='detCommentContainer'>
                      <span className='detAnsComment'>
                        {comment?.userName?.split(' ')[0]}
                      </span>
                      <span className='detCommented'>commented</span>
                      <span className='detCommentTime'>
                        {' '}
                        {moment(comment?.updatedAt).startOf('hour').fromNow()}
                      </span>
                    </div>
                    <p className='detAnsCommentText'>{comment?.description}</p>
                  </div>
                ))}
              </div>
              <div className='detBottomCard'>
                <div className='detBtnContainer'>
                  <Button
                    onClick={() => setShow(!show)}
                    style={{ borderRadius: '10px' }}
                    className='detCommentBtn'
                    size='small'
                    variant='contained'
                  >
                    Add Comment
                  </Button>
                  {show ? (
                    <Button
                      disable={comLoading}
                      onClick={() =>
                        dispatch(
                          addComment(commentDesc, answer?._id, setComLoading)
                        )
                      }
                      style={{ borderRadius: '10px' }}
                      className='detPublishBtn'
                      size='small'
                      variant='contained'
                    >
                      Publish
                    </Button>
                  ) : null}
                </div>
                {show ? (
                  <textarea
                    onChange={(e) =>
                      setCommentDesc({
                        description: e.target.value,
                      })
                    }
                    rows='8'
                    className='detWriteComment'
                  ></textarea>
                ) : null}
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default QuestionDetails;
