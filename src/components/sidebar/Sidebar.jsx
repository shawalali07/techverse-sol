import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux-toolkit/actions/profile/profile';
import MyProjectModal from './MyProjectModal';
import MyProjects from './MyProjects';
import './sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { designation, country, skills, rate, profilePic, id, projects } =
    useSelector((state) => state?.authSlice);

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>
          {designation ? designation : 'No Desgination Provided'}
        </span>
        {profilePic && <img className='sidebarImg' src={profilePic} alt='' />}
        {country ? (
          <div className='sidebarItemContent'>
            <span>Country:</span>
            <span>{country}</span>
          </div>
        ) : null}
        {skills?.length ? (
          <div className='sidebarItemContent'>
            <span>Skills:</span>
            {skills?.map((skill) => (
              <span>{skill}</span>
            ))}
          </div>
        ) : null}
        {rate ? (
          <div className='sidebarItemContent'>
            <span>Hourly Rate:</span>
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
          {projects?.map((project, index) => (
            <MyProjects project={project} index={index} />
          ))}
        </div>
        <MyProjectModal setShow={setShow} show={show} />
      </div>
      <Link state={{ data: id }} className='link' to='/download'>
        <Button
          color='success'
          variant={'contained'}
          className='userShowInfoTitle followBtn'
        >
          View Resume
        </Button>
      </Link>
    </div>
  );
};

export default Sidebar;
