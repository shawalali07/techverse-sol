import axios from 'axios';
import { useEffect, useState } from 'react';
// import { baseURL } from '../config/congif';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      // const { data } = await axios.get(`${baseURL}/categories`);
      // setCats(data);
    };
    getCats();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themses-holiday-gift-guide.jpg'
          alt=''
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          corrupti officiis nesciunt possimus earum incidunt natus animi.
        </p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fa-brands fa-square-facebook'></i>
          <i className='sidebarIcon fa-brands fa-square-twitter'></i>
          <i className='sidebarIcon fa-brands fa-square-pinterest'></i>
          <i className='sidebarIcon fa-brands fa-square-instagram'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
