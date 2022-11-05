import moment from 'moment';
import { Link } from 'react-router-dom';
import { browserRoutes } from '../../routes/browserRoutes';
import './mySingleKnowledge.css';

const MySingleKnowledge = ({ knowledge }) => {
  return (
    <div className='snippet'>
      <div className='snipContent'>
        <div className='contentDiv'>
          <Link
            className='link'
            state={{ id: knowledge?._id }}
            to={'/knowledge/' + knowledge?._id}
          >
            <span className='contentHeadings specColor'>
              {knowledge?.title}
            </span>
          </Link>
        </div>
        <div className='contentDivRight'>
          <span className='contentHeadings'>
            {moment(knowledge?.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MySingleKnowledge;
