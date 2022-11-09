import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { baseURL } from '../config/congif';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const { designation, country, skills, rate } = useSelector(
    (state) => state?.authSlice
  );
  const { user } = useSelector((state) => state?.authSlice);

  useEffect(() => {}, []);
  console.log(user);
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>
          {designation ? designation : 'No Desgination Provided'}
        </span>
        <img className='sidebarImg' src={user?.image} alt='' />
        {country ? (
          <div className='sidebarItemContent'>
            <span>Country</span>
            <span>{country}</span>
          </div>
        ) : null}
        {skills?.length ? (
          <div className='sidebarItemContent'>
            <span>Skills</span>
            <span>{skills}</span>
          </div>
        ) : null}
        {rate ? (
          <div className='sidebarItemContent'>
            <span>Hourly Rate</span>
            <span>${rate}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
