import React from 'react';
import { useSelector } from 'react-redux';

const ProjectDetails = () => {
  const projects = useSelector((state) => state?.authSlice?.projects);
  console.log(projects);
  return (
    <div style={{ paddingTop: '120px' }} className='user projectCont'>
      {projects?.map((project) => (
        <div className='userUpdate'>
          <span className='userUpdateTitle'>{project?.projectTitle}</span>
          <p className='devAboutText'>{project?.projectDescription}</p>
          <div style={{ fontWeight: 'bold' }}>Website</div>

          <div className='pb-3'>
            <i className=''>{project?.projectLink}</i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
