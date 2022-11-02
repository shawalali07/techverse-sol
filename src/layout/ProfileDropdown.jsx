import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signout } from '../redux-toolkit/actions/auth/Signin';
import { browserRoutes } from '../routes/browserRoutes';

const ProfileDropdown = ({ profilePic, setDropdown, dropdown, name }) => {
  const refOutside = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    dispatch(signout(navigate));
  };

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
    <div ref={refOutside} className='profileDropdown'>
      {profilePic ? (
        <img
          className='topImg'
          src={profilePic}
          onClick={() => setDropdown(!dropdown)}
        />
      ) : (
        <div onClick={() => setDropdown(!dropdown)} className='topImg topNA'>
          {name?.slice(0, 2)}
        </div>
      )}
      <div className={`${dropdown ? 'pDropdown1' : 'pDropdown'}`}>
        <ul>
          <Link
            onClick={() => setDropdown(!dropdown)}
            className='dropdownLink'
            to={browserRoutes.SETTINGS}
          >
            <li>Settings</li>
          </Link>

          <Link
            onClick={() => setDropdown(!dropdown)}
            className='dropdownLink'
            to={browserRoutes.MYQUESTIONS}
          >
            <li>My Questions</li>
          </Link>
          <Link
            onClick={() => setDropdown(!dropdown)}
            className='dropdownLink'
            to={browserRoutes.MYANSWERS}
          >
            <li>My Answers</li>
          </Link>
          <Link
            onClick={() => setDropdown(!dropdown)}
            className='dropdownLink'
            to={browserRoutes.FOLLOWING}
          >
            <li>My Following</li>
          </Link>
          <Link
            onClick={() => setDropdown(!dropdown)}
            className='dropdownLink'
            to={browserRoutes.WRITE}
          >
            <li>Write</li>
          </Link>
          <li
            onClick={() => {
              setDropdown(!dropdown);
              logout();
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
