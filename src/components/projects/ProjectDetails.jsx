import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
  const {
    state: { data: projects },
  } = useLocation();
  return (
    <div style={{ paddingTop: '120px' }} className='user projectCont'>
      {projects?.map((project, index) => (
        <div className='projDetDevCard'>
          <h1>Project # {index + 1}</h1>
          <span className=''>{project?.projectTitle}</span>
          <p className=''>{project?.projectDescription}</p>
          <div style={{ fontWeight: 'bold' }}>Website</div>

          <div className=''>
            <a href={project?.projectLink} className=''>
              {project?.projectLink}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
