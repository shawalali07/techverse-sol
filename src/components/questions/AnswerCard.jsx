import { Badge, Button } from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { browserRoutes } from '../../routes/browserRoutes';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState } from 'react';
import {
  getAnswersById,
  addComment,
  addVote,
} from '../../redux-toolkit/actions/answers/answers';
import { useDispatch } from 'react-redux';
const AnswerCard = ({ answer, answerId }) => {
  const [comLoading, setComLoading] = useState(false);
  const [voteLoading, setVoteLoading] = useState(false);
  const [commentDesc, setCommentDesc] = useState({});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='detAnsContainer'>
      <div className='detCard'>
        <div className='detTopCard'>
          <div className='detAnsLeft'>
            {answer?.userImage ? (
              <img className='detImg' src={answer?.userImage} />
            ) : (
              <div className='detImg'>{answer?.userName?.slice(0, 2)}</div>
            )}
            <Link
              className='link'
              to={browserRoutes.DEVELOPERS + '/' + answer?.userId}
              state={{ data: { data: answer?.userId } }}
            >
              <span className='detAnsAuthor'>{answer?.userName}</span>
            </Link>
            <span className='detAnsAnswered'>answered</span>
            <span className='detAnsTime'>
              {moment(answer?.updatedAt).startOf('hour').fromNow()}
            </span>
          </div>
          <div className='align-items-center gap-4 d-none d-md-flex'>
            <ThumbUpOffAltIcon
              onClick={() =>
                dispatch(addVote({ answerId: answer?._id }, setVoteLoading))
              }
              style={{
                cursor: 'pointer',
                color: voteLoading && 'darkGray',
              }}
            />
            <Badge
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
                <Link
                  className='link'
                  to={browserRoutes.DEVELOPERS + '/' + comment?.user}
                  state={{ data: { data: comment?.user } }}
                >
                  <span className='detAnsComment'>
                    {comment?.userName?.split(' ')[0]}
                  </span>
                </Link>
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
                disabled={comLoading}
                onClick={() => {
                  dispatch(
                    addComment(
                      commentDesc,
                      answer?._id,
                      setComLoading,
                      getAnswersById,
                      answerId
                    )
                  );
                }}
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
  );
};

export default AnswerCard;
