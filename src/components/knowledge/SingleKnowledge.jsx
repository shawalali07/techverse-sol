import { Link } from 'react-router-dom';
import './singleKnowledge.css';

const SingleKnowledge = ({ k }) => {
  return (
    <div>
      <div className='singleKnowledge'>
        <div
          style={{ backgroundColor: 'antiquewhite' }}
          key={k._id}
          className='knowledgeCard'
        >
          <Link state={{ data: k }} className='link' to={`/knowledge/1`}>
            <h3 className='knowledgeTitle'>{k.title}</h3>
          </Link>
          <span className='tag'>{k.tags[0]}</span>
          <span>by {k.userName.split(' ')[0]} 2,130</span>
        </div>
      </div>
    </div>
  );
};

export default SingleKnowledge;
