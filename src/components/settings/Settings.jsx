import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';
import './settings.css';
import { updateProfile } from '../../redux-toolkit/actions/profile/profile';
import { signout } from '../../redux-toolkit/actions/auth/Signin';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.authSlice);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleUpdateChange = ({ target: { name, value } }) => {
    if (value === '') {
      setIsUpdated(false);
    } else if (value != '') {
      setIsUpdated(true);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('photo', file);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    dispatch(updateProfile(data, setLoading));
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user?.profilePic
                  ? user.profilePic
                  : null
              }
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={(e) => {
                setIsUpdated(true);
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <label>Full Name</label>
          <input
            className='nameInput'
            name='name'
            type='text'
            placeholder={user?.fullName}
            onChange={handleUpdateChange}
          />
          <label>Email</label>
          <input
            name='email'
            type='email'
            placeholder={user?.email}
            onChange={handleUpdateChange}
          />
          <label>Password</label>
          <input
            name='password'
            type='password'
            onChange={handleUpdateChange}
          />
          <button
            onClick={handleUpdate}
            className='settingsSubmit'
            type='submit'
            disabled={!isUpdated ? true : loading}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
