import { Link } from 'react-router-dom';
import './singleKnowledge.css';
const SingleKnowledge = () => {
  return (
    <div className='singleKnowledge'>
      <div className='knowledgeCard mt-2'>
        <Link className='link' to={`/knowledge/1`}>
          <h3 className='knowledgeTitle'>For loop</h3>
        </Link>
        <span>by Shali 2,130</span>
      </div>
    </div>
  );
};

export default SingleKnowledge;
