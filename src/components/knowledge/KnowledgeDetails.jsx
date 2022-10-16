import './knowledgeDetails.css';

const KnowledgeDetails = () => {
  return (
    <div className='mt-2 knowledgeDetails'>
      <div className='knowledgeCard'>
        <h1 className='knowledetitle'>for loop</h1>
        <h6 className='knowledgeExample'>
          <b>Example</b>
        </h6>
        <p className='knowledgeCode'>
          <code>
            {`if(data.length === 0 ){
            console.log(data)
          } `}{' '}
          </code>
        </p>
      </div>
    </div>
  );
};

export default KnowledgeDetails;
