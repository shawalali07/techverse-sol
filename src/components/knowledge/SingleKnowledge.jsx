import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getKnowledgeById } from '../../redux-toolkit/actions/knowledge/knowledge';
import './singleKnowledge.css';

const SingleKnowledge = ({ k, setTag }) => {
  return (
    <div className='singleKnowledge'>
      <div
        style={{ backgroundColor: 'white' }}
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
            <span onClick={() => setTag([tag])} className='tag'>
              {tag}
            </span>
          ))}
          <span>by {k.userName.split(' ')[0]} 2,130</span>
          {k?.userImage ? (
            <img className='knowImg' src={k?.userImage} />
          ) : (
            <div className='knowImg'>{k?.userName?.slice(0, 2)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleKnowledge;
