import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { browserRoutes } from '../../routes/browserRoutes';
import './singleKnowledge.css';

const SingleKnowledge = ({ k, setTag }) => {
  return (
    <>
      <div
        style={{ backgroundColor: 'antiqueWhite' }}
        key={k._id}
        className='knowledgeCard'
      >
        <Link
          state={{ id: k?._id }}
          className='link'
          to={`/knowledge/${k?._id}`}
        >
          <h3 className='knowledgeTitle'>{k.title}</h3>
        </Link>
        <div className='knowContent'>
          {k?.tags?.map((tag) => (
            <span onClick={() => setTag([tag])} className='singleKnowTag'>
              {tag}
            </span>
          ))}
          <span>by {k.userName.split(' ')[0]} 2,130</span>
          {k?.userImage ? (
            <Link to={browserRoutes.KNOWLEDGE + '/' + k?.userId}>
              <img className='knowImg' src={k?.userImage} />
            </Link>
          ) : (
            <Link
              className='link'
              to={browserRoutes.KNOWLEDGE + '/' + k?.userId}
            >
              <div className='knowImg'>{k?.userName?.slice(0, 2)}</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleKnowledge;
