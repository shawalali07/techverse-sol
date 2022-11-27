import React from 'react';
import { useSelector } from 'react-redux';

const MyProjects = ({ project, index }) => {
  return (
    <>
      <div className='mb-2'>
        <b>Project #{index + 1}</b>
      </div>
      <span style={{ fontWeight: 'bold' }}>{project?.projectTitle}</span>
      <p>{project?.projectDescription}</p>
      <div style={{ fontWeight: 'bold' }}>Website</div>
      <div className='pb-3'>
        <a href={project?.projectLink}>
          <i className=''>{project?.projectLink}</i>
        </a>
      </div>
    </>
  );
};

export default MyProjects;
