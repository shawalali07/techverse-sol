import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/register/useToken';
import './Header.css';
import SearchQuestions from '../components/questions/SearchQuestions';
import { browserRoutes } from '../routes/browserRoutes';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo.png';
import ProfileDropdown from './ProfileDropdown';
import { Badge, Button } from '@mui/material';
import { Mail } from '@mui/icons-material';
import Darkmode from 'darkmode-js';
const Header = () => {
  const [count, setCount] = useState(0);
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true, // default: true
  };

  const darkmode = new Darkmode(options);
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const user = useSelector((state) => state?.authSlice);
  const token = useToken();
  const refOutside = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  const handleClickOutside = ({ target }) => {
    if (!refOutside.current.contains(target)) {
      setDropdown(false);
    } else {
    }
  };

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setCount(count + 1);
  //   }, 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [count]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark topBar`}>
        <div className='container'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <img className='logo' src={logo} />
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 topUl'>
              <li className='nav-item topListItem'>
                <NavLink className='link' to='/'>
                  Home
                </NavLink>
              </li>
              {token && (
                <li className='nav-item topListItem'>
                  <NavLink className='link' to='/askquestion'>
                    Ask Question
                  </NavLink>
                </li>
              )}
              <li className='nav-item topListItem'>
                <NavLink className='link' to={browserRoutes.KNOWLEDGE}>
                  Knowledge
                </NavLink>
              </li>
              <li className='nav-item topListItem'>
                <NavLink className='link' to={browserRoutes.DEVELOPERS}>
                  Top Devs
                </NavLink>
              </li>
              {token && (
                <li className='nav-item topListItem'>
                  <NavLink className='link' to={browserRoutes.FOLLOWING}>
                    Following
                  </NavLink>
                </li>
              )}
              <li className='nav-item'></li>
            </ul>
            {pathname === '/' && (
              <form className='d-flex searchInput' role='search'>
                <SearchQuestions />
              </form>
            )}
            <div className='topRightSide'>
              {token && (
                <Badge
                  className='msgIcon'
                  color='secondary'
                  badgeContent={count}
                  showZero
                >
                  <Mail />
                </Badge>
              )}
              {token ? (
                user?.profilePic ? (
                  <ProfileDropdown
                    name={user?.fullName}
                    setDropdown={setDropdown}
                    dropdown={dropdown}
                    profilePic={user?.profilePic}
                    refOutside={refOutside}
                  />
                ) : (
                  // <Link to={browserRoutes.SETTINGS}>
                  //   <div className='topImg topNA'>
                  //     {user?.fullName.slice(0, 2)}
                  //   </div>
                  // </Link>
                  <ProfileDropdown
                    name={user?.fullName}
                    setDropdown={setDropdown}
                    dropdown={dropdown}
                    profilePic={user?.profilePic}
                    refOutside={refOutside}
                  />
                )
              ) : pathname === '/signin' ? (
                <Button
                  onClick={() => navigate('/signup')}
                  color='success'
                  variant='contained'
                >
                  Create Account
                </Button>
              ) : pathname === '/signup' ? (
                <Button onClick={() => navigate('/signin')} variant='contained'>
                  Login
                </Button>
              ) : (
                <div className='noAuthLoginBtn'>
                  <Button
                    onClick={() => navigate('/signin')}
                    variant='contained'
                  >
                    Login
                  </Button>
                </div>
              )}
              {token && (
                <div className={`form-check form-switch text-light`}>
                  <input
                    onClick={() => darkmode.toggle()}
                    className='form-check-input'
                    type='checkbox'
                    id='flexSwitchCheckDefault'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexSwitchCheckDefault'
                  ></label>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
