import React from 'react';
import ProfileCard from '../questions/ProfileCard';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux-toolkit/actions/answers/answers';
import Comments from '../comments/Comments';
import Comment from '../comments/Comment';

const Answer = (props) => {
  const [loading, setLoading] = useState(false);
  const { answer, name, image } = props;
  const [formData, setFormData] = useState({
    description: '',
  });
  const [isComment, setIsComment] = useState(false);
  const dispatch = useDispatch();

  const handleCommentInput = () => {
    setFormData({ ...formData });
    setIsComment(true);
  };

  const handleComment = () => {
    dispatch(addComment(formData, answer?._id, setLoading));
  };

  return (
    <>
      <div className='all-answers'>
        <div className='wrapper'>
          <p className='answerDescription'>{answer?.description}</p>
          {isComment ? (
            <div className='comment'>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className='inputComment'
                type='text'
              />
              <button
                disabled={loading}
                onClick={handleComment}
                className='commentPost'
              >
                Post
              </button>
            </div>
          ) : (
            <button onClick={() => handleCommentInput()} className='commentBtn'>
              Add a comment
            </button>
          )}
        </div>
        <div className='answer-profile'>
          <ProfileCard image={image} name={name} notShow={true} />
        </div>
      </div>
      {answer?.comments?.map((comment) => (
        <Comment description={comment.description} />
      ))}
    </>
  );
};

export default Answer;
