import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getKnowledgeById } from '../../redux-toolkit/actions/knowledge/knowledge';
import './knowledgeDetails.css';
import { BeatLoader } from 'react-spinners';
import NotFoundResult from '../error/NotFoundResult';

const KnowledgeDetails = () => {
  let knowledge = useSelector((state) => state?.knowledge?.knowledgeId);
  let loading = useSelector((state) => state?.knowledge?.loading);

  const dispatch = useDispatch();
  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    dispatch(getKnowledgeById(id));
  }, []);

  return (
    <div style={{ paddingTop: '90px' }} className='knowledgeDetails'>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <BeatLoader size={40} />
        </div>
      ) : (
        <div className='knowledgeCardDetails'>
          <h1 className='knowledetitle'>{knowledge?.title}</h1>
          <h6 className='knowledgeExample mb-3'>
            <b>Example</b>
          </h6>
          <div
            dangerouslySetInnerHTML={{ __html: knowledge?.description }}
            className='knowledgeCode'
          ></div>

          <span className='knowAuthDetails'>
            by {knowledge?.userName?.split(' ')[0]} 2,130
          </span>
          {knowledge?.tags?.map((tag) => (
            <span className='tag knowTag'>{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default KnowledgeDetails;
