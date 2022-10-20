import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useToken } from '../hooks/register/useToken';
import './Header.css';
import SearchQuestions from '../components/questions/SearchQuestions';
import { browserRoutes } from '../routes/browserRoutes';
import Profile from '../profile/Profile';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo.png';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
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

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark topBar'>
        <div className='container-fluid'>
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
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
              <li className='nav-item topListItem'>
                <NavLink className='link' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item topListItem'>
                <NavLink className='link' to={browserRoutes.KNOWLEDGE}>
                  Knowledge
                </NavLink>
              </li>
              <li className='nav-item topListItem'>
                <NavLink className='link' to={browserRoutes.USERSLIST}>
                  Top Developers
                </NavLink>
              </li>
              <li className='nav-item'></li>
            </ul>
            {pathname === '/' && (
              <form className='d-flex searchInput' role='search'>
                <SearchQuestions />
              </form>
            )}
            {token &&
              (user?.profilePic ? (
                <ProfileDropdown
                  setDropdown={setDropdown}
                  dropdown={dropdown}
                  profilePic={user?.profilePic}
                  refOutside={refOutside}
                />
              ) : (
                <Link to={browserRoutes.SETTINGS}>
                  <div className='topImg topNA'>
                    {user?.fullName.slice(0, 2)}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
