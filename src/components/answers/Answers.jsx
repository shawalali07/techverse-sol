import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './answers.css';
import ProfileCard from '../questions/ProfileCard';
import Answer from './Answer';
import { getComments } from '../../redux-toolkit/actions/answers/answers';
import Comments from '../comments/Comments';

const Answers = ({ getAnswersById, id }) => {
  const answers = useSelector((state) => state?.answer?.answersData);
  return (
    <>
      {answers?.map((answer) => (
        <Answer
          getAnswersById={getAnswersById}
          id={id}
          image={answer?.userImage}
          answer={answer}
          name={answer.userName?.split(' ')[0]}
        />
      ))}
    </>
  );
};

export default Answers;
