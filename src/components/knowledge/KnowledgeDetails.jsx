import { useLocation } from 'react-router-dom';
import './knowledgeDetails.css';

const KnowledgeDetails = () => {
  const {
    state: { data },
  } = useLocation();

  return (
    <div style={{ paddingTop: '90px' }} className='mt-2 knowledgeDetails'>
      <div className='knowledgeCardDetails'>
        <h1 className='knowledetitle'>{data?.title}</h1>
        <h6 className='knowledgeExample mb-3'>
          <b>Example</b>
        </h6>
        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className='knowledgeCode'
        ></div>

        <span className='knowAuthDetails'>
          by {data?.userName?.split(' ')[0]} 2,130
        </span>
        <span className='tag knowTag'>{data?.tags[0]}</span>
      </div>
    </div>
  );
};

export default KnowledgeDetails;
