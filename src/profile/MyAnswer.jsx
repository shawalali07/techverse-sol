import { useState } from 'react';
import './myAnswer.css';
const MyAnswer = (props) => {
  const { myAnswers } = props;

  return (
    <div className='newMyAns'>
      <div className='myCard'>
        <div className='topMyContainer'>
          <h5 className='myTitle'>{myAnswers?.questionTitle}</h5>
          <div className='myAuthorInfo'>
            <span className='myAuthor'>Shali 2 hours ago</span>
            {myAnswers?.userImage ? (
              <img className='myAnsImg' src={myAnswers?.userImage} />
            ) : (
              <div className='myAnsImg'>{myAnswers?.userName?.slice(0, 2)}</div>
            )}
          </div>
        </div>
        <div className='descContainer'>
          <h6 className='yourAnswer'>
            <b>Your Answer</b>
          </h6>
          <p
            dangerouslySetInnerHTML={{ __html: myAnswers?.description }}
            className='myDesc'
          ></p>
        </div>
      </div>
    </div>
  );
};

export default MyAnswer;
