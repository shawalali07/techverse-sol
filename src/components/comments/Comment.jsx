import './comment.css';

const Comment = (props) => {
  const { description } = props;
  return (
    <div className='commentsContainer'>
      <div className='commentWrapper'>
        <p className='commentText'>
          {description}
          <span className='author'>Shawal</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
