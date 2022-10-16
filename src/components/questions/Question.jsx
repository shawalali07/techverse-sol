import { useSelector } from 'react-redux';
import { browserRoutes } from '../../routes/browserRoutes';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const Question = (props) => {
  const { question } = props;

  const allAnswers = useSelector((state) => state?.answer?.allAnswersData);
  const getNumOfAnswers = (id) => {
    return allAnswers?.filter((a) => a.questionId === id).length;
  };

  return (
    <div
      key={question?._id}
      className='card'
      style={{ width: '55rem', height: '9.5rem' }}
    >
      <div className='mainDiv mt-3' style={{ width: '10rem', height: '10rem' }}>
        <span className='display-block'>0 votes</span>
        <span className='display-block'>
          {getNumOfAnswers(question?._id)} answers
        </span>
        <span className='display-block'>0 views</span>
      </div>
      <div className='mainDiv2'>
        <Link
          style={{ textDecoration: 'none' }}
          state={{ question: question, id: question?._id }}
          to={browserRoutes.QUESTION_DETAILS + '/' + question?._id}
        >
          <span className='title display-block'>{question?.title}</span>
        </Link>{' '}
        <div
          dangerouslySetInnerHTML={{ __html: question?.description }}
          className='questionDescription display-block'
        ></div>
        <div className='tags'>
          {question?.tags?.map((tag, key) => (
            <span className='tag' key={key}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
