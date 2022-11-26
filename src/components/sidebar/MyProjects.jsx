import React from 'react';
import { useSelector } from 'react-redux';

const MyProjects = ({ project }) => {
  return (
    <>
      <span style={{ fontWeight: 'bold' }}>{project?.projectTitle}</span>
      <p>{project?.projectDescription}</p>
      <div style={{ fontWeight: 'bold' }}>Website</div>
      <div className='pb-3'>
        <i className=''>{project?.projectLink}</i>
      </div>
    </>
  );
};

export default MyProjects;
