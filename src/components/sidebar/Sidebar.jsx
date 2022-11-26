import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyProjectModal from './MyProjectModal';
import MyProjects from './MyProjects';
import './sidebar.css';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const {
    designation,
    country,
    skills,
    rate,
    profilePic,
    projectTitle,
    projectDescription,
    projectLink,
    projects,
  } = useSelector((state) => state?.authSlice);

  useEffect(() => {}, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>
          {designation ? designation : 'No Desgination Provided'}
        </span>
        {profilePic && <img className='sidebarImg' src={profilePic} alt='' />}
        {country ? (
          <div className='sidebarItemContent'>
            <span>Country</span>
            <span>{country}</span>
          </div>
        ) : null}
        {skills?.length ? (
          <div className='sidebarItemContent'>
            <span>Skills</span>
            {skills?.map((skill) => (
              <span>{skill}</span>
            ))}
          </div>
        ) : null}
        {rate ? (
          <div className='sidebarItemContent'>
            <span>Hourly Rate</span>
            <span>${rate}</span>
          </div>
        ) : null}
        <span className='sidebarTitle'>{'My Projects'}</span>
        <div className='sidebarItemContent'>
          <Button onClick={() => setShow(true)} variant='contained'>
            Add Project
          </Button>
        </div>
        <div className='pt-3'>
          {projects?.map((project) => (
            <MyProjects project={project} />
          ))}
        </div>
        <MyProjectModal setShow={setShow} show={show} />
      </div>
    </div>
  );
};

export default Sidebar;
