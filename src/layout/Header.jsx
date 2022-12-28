import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import './Header.css';
import SearchQuestions from '../components/questions/SearchQuestions';
import { browserRoutes } from '../routes/browserRoutes';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/logo.png';
import ProfileDropdown from './ProfileDropdown';
import { Button } from '@mui/material';
import MessageDropdown from './MessageDropdown';
import ReplyModal from '../components/messages/ReplyModal';
import { getTopDevs } from '../redux-toolkit/actions/developers/developers';
import { getLanguages } from '../redux-toolkit/actions/language/language';
const Header = () => {
  const id = useSelector((state) => state.authSlice.id);
  const dispatch = useDispatch();
  const replyModal = useSelector((state) => state.modal.replyModal);
  let topDev = useSelector((state) => state.developer.topDevelopers);
  topDev = topDev
    .filter((msg) => msg?._id === id)
    ?.sort((a, b) => new Date(a?.updatedAt) - new Date(b?.updatedAt));
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [msgDropdown, setMsgDropdown] = useState(false);
  const { pathname } = useLocation();
  const user = useSelector((state) => state?.authSlice);
  const token = useToken();

  useEffect(() => {
    dispatch(getTopDevs());
    dispatch(getLanguages());
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark topBar`}>
        <div className='w-100 px-5'>
          <div className='d-block d-lg-none'>
            <button
              class='btn btn-primary '
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasWithBothOptions'
              aria-controls='offcanvasWithBothOptions'
              onClick={() => setShow(!show)}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            {show && (
              <div
                class='offcanvas offcanvas-start'
                data-bs-scroll='true'
                tabindex='-1'
                id='offcanvasWithBothOptions'
                aria-labelledby='offcanvasWithBothOptionsLabel'
              >
                <div class='offcanvas-header'>
                  <h5
                    class='offcanvas-title'
                    id='offcanvasWithBothOptionsLabel'
                  >
                    Backdrop with scrolling
                  </h5>
                  <button
                    type='button'
                    class='btn-close'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                <div class='offcanvas-body'>
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className='collapse navbar-collapse d-none d-lg-flex justify-content-between w-100'
            id='navbarSupportedContent'
          >
            <div className='d-flex align-items-center'>
              <img className='logo' src={logo} />
              <ul className='navbar-nav me-auto mb-2 mb-lg-0 topUl'>
                <li className='nav-item topListItem'>
                  <NavLink className='link' to='/'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item topListItem'>
                  <NavLink className='link' to='/about'>
                    About Us
                  </NavLink>
                </li>
                <li className='nav-item topListItem'>
                  <NavLink className='link' to='/allquestions'>
                    All Questions
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
                <li className='nav-item topListItem'>
                  <NavLink className='link' to={browserRoutes.SNIPPETS}>
                    Snippets
                  </NavLink>
                </li>
                <li className='nav-item'></li>
              </ul>
            </div>
            <div className='d-flex align-items-center'>
              {pathname === '/allquestions' && (
                <form className='d-flex searchInput' role='search'>
                  <SearchQuestions />
                </form>
              )}
              <div className='topRightSide'>
                {token && (
                  <MessageDropdown
                    topDev={topDev[0]}
                    setMsgDropdown={setMsgDropdown}
                    msgDropdown={msgDropdown}
                  />
                )}
                {token ? (
                  user?.profilePic ? (
                    <ProfileDropdown
                      name={user?.fullName}
                      setDropdown={setDropdown}
                      dropdown={dropdown}
                      profilePic={user?.profilePic}
                    />
                  ) : (
                    <ProfileDropdown
                      name={user?.fullName}
                      setDropdown={setDropdown}
                      dropdown={dropdown}
                      profilePic={user?.profilePic}
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
                  <Button
                    onClick={() => navigate('/signin')}
                    variant='contained'
                  >
                    Login
                  </Button>
                ) : (
                  <div className='noAuthLoginBtn'>
                    <Button
                      style={{
                        backgroundColor: '#1976d2',
                        padding: '5px',
                        borderRadius: '5px',
                      }}
                      onClick={() => navigate('/signin')}
                      variant='contained'
                    >
                      Login
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <ReplyModal replyModal={replyModal} />
      </nav>
    </>
  );
};

export default Header;
