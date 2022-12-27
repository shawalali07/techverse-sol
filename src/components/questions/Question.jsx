import { useDispatch, useSelector } from 'react-redux';
import { browserRoutes } from '../../routes/browserRoutes';
import { Link } from 'react-router-dom';
const Question = (props) => {
  const loading = useSelector((state) => state?.question?.loading);

  const { question } = props;
  const allAnswers = useSelector((state) => state?.answer?.allAnswersData);
  const getNumOfAnswers = (id) => {
    return allAnswers?.filter((a) => a.questionId === id).length;
  };

  return (
    <div
      key={question?._id}
      className='card qCard p-3 d-flex flex-row align-items-center gap-5'
      // style={{ width: '55rem', height: '11rem' }}
    >
      <div className='mainDiv'>
        <div
          style={{ backgroundColor: '#2E5266FF' }}
          className='text-center questionStatus'
        >
          {question?.voted ? 'voted' : 'no vote'}
        </div>
        <div
          className='text-center questionStatus'
          style={{ backgroundColor: '#6E8898FF', whiteSpace: 'nowrap' }}
        >{`${getNumOfAnswers(question?._id)} ${' '} answers`}</div>
      </div>
      <div>
        <Link
          style={{ textDecoration: 'none' }}
          state={{ id: question?._id }}
          to={browserRoutes.QUESTION_DETAILS + '/' + question?._id}
        >
          <strong>
            <span className='title display-block'>{question?.title}</span>
          </strong>
        </Link>{' '}
        <div
          dangerouslySetInnerHTML={{ __html: question?.description }}
          className='questionDescription'
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
