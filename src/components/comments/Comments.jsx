import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';

const Comments = (props) => {
  const { id } = props;
  const comments = useSelector((state) => state.answer?.comments);

  return (
    <>
      {comments?.map((comment) => (
        <Comment key={comment?._id} comment={comment} />
      ))}
    </>
  );
};

export default Comments;
