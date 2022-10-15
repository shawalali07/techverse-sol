import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFullName, useToken } from '../hooks/register/useToken';
import './Header.css';
import SearchQuestions from '../components/questions/SearchQuestions';
import { signout } from '../redux-toolkit/actions/auth/Signin';
import { store } from '../redux-toolkit';
import { browserRoutes } from '../routes/browserRoutes';
import Profile from '../profile/Profile';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo.png';

const Header = () => {
  const user = useSelector((state) => state?.authSlice);

  const token = useToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark topBar'>
        {token && <Profile />}
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
                <NavLink className='link' to='/tutorial'>
                  Tutorial
                </NavLink>
              </li>
              <li className='nav-item topListItem'>
                <NavLink className='link' to={browserRoutes.USERSLIST}>
                  Top Developers
                </NavLink>
              </li>
              <li className='nav-item'></li>
            </ul>
            <form className='d-flex searchInput' role='search'>
              <SearchQuestions />
            </form>
            {token &&
              (user?.profilePic ? (
                <Link to={browserRoutes.SETTINGS}>
                  <img className='topImg' src={user?.profilePic} />
                </Link>
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
