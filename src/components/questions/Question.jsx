import { useSelector } from 'react-redux';
import { browserRoutes } from '../../routes/browserRoutes';
import { Link } from 'react-router-dom';
const Question = (props) => {
  const { question } = props;

  const allAnswers = useSelector((state) => state?.answer?.allAnswersData);
  const getNumOfAnswers = (id) => {
    return allAnswers?.filter((a) => a.questionId === id).length;
  };

  return (
    <div
      key={question?._id}
      className='card qCard p-4 d-flex flex-row align-items-center gap-5'
      // style={{ width: '55rem', height: '11rem' }}
    >
      <div className='mainDiv'>
        <div>0 votes</div>
        <div style={{ whiteSpace: 'nowrap' }}>{`${getNumOfAnswers(
          question?._id
        )} ${' '} answers`}</div>
        <div>0 views</div>
      </div>
      <div>
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
        <div className='tags mt-5'>
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
