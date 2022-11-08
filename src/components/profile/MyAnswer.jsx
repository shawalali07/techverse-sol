import './myAnswer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { browserRoutes } from '../../routes/browserRoutes';
import { useSelector } from 'react-redux';
const MyAnswer = (props) => {
  const { myAnswers } = props;

  return (
    <div className='newMyAns'>
      <Link
        state={{ id: myAnswers?.questionId }}
        to={browserRoutes.QUESTION_DETAILS + '/' + myAnswers?.questionId}
      >
        <h5>{myAnswers?.questionTitle}</h5>
      </Link>
      <div className='myAuthorInfo'>
        <span className='myAuthor'>Shali 2 hours ago</span>
        {myAnswers?.userImage ? (
          <img className='myAnsImg' src={myAnswers?.userImage} />
        ) : (
          <div className='myAnsImg'>{myAnswers?.userName?.slice(0, 2)}</div>
        )}
      </div>
      <div className='descContainer'>
        <b>Your Answer</b>
        <p dangerouslySetInnerHTML={{ __html: myAnswers?.description }}></p>
      </div>
    </div>
  );
};

export default MyAnswer;
