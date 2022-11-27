import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './settings.css';
import { updateProfile } from '../../redux-toolkit/actions/profile/profile';
import { countryList } from '../../constants/countries';
import {
  hourlyRate,
  designationList,
  skillsList,
} from '../../constants/hourlyRate';
import { Autocomplete, Stack, TextField } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
const Settings = () => {
  const [country, setCountry] = useState('');
  const [skills, setSkills] = useState([]);
  const [designation, setDesignation] = useState('');
  const [rate, setRate] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.authSlice);
  console.log('user', user);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    aboutMe: '',
    country: '',
    skills: '',
    designation: '',
    rate: null,
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
    file && data.append('photo', file);
    formData.name && data.append('name', formData.name);
    formData.email && data.append('email', formData.email);
    formData.password && data.append('password', formData.password);
    formData.country && data.append('country', formData.country);
    formData.aboutMe && data.append('aboutMe', formData.aboutMe);
    formData.rate && data.append('rate', formData.rate);
    formData.skills && data.append('skills', formData.skills);
    formData.designation && data.append('designation', formData.designation);
    dispatch(updateProfile(data, setLoading));
  };

  useEffect(() => {
    setFormData({ ...formData, country: country });
  }, [country]);

  useEffect(() => {
    setFormData({ ...formData, rate: rate });
  }, [rate]);

  useEffect(() => {
    setFormData({ ...formData, skills: skills });
  }, [skills]);

  useEffect(() => {
    setFormData({ ...formData, designation: designation });
  }, [designation]);

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
          <div className='writeContainer'>
            <textarea
              onChange={handleUpdateChange}
              name='aboutMe'
              placeholder={user?.aboutMe ? user?.aboutMe : 'Tell about you...'}
              className='aboutText'
              type='text'
            ></textarea>
          </div>
          <div className='settingsMoreDetails'>
            <div className='moreDetailsSection'>
              <Autocomplete
                className='mt-3 '
                sx={{ width: 300 }}
                disablePortal
                options={countryList}
                renderInput={(params) => (
                  <TextField {...params} label='Select Country' />
                )}
                // value={user?.country ? user?.country : country}
                onChange={(event, newValue) => {
                  setIsUpdated(true);
                  setCountry(newValue);
                }}
              />
              <Autocomplete
                className='mt-3 '
                sx={{ width: 300 }}
                disablePortal
                options={hourlyRate}
                renderInput={(params) => (
                  <TextField {...params} label='Select Hourly Rate' />
                )}
                // value={user?.rate ? user?.rate : rate}
                onChange={(event, newValue) => {
                  setIsUpdated(true);
                  setRate(newValue);
                }}
              />
            </div>
            <div className='moreDetailsSection'>
              <Autocomplete
                className='mt-3'
                sx={{ width: 300 }}
                disablePortal
                options={designationList}
                renderInput={(params) => (
                  <TextField {...params} label='Select Designation' />
                )}
                // value={user?.designation ? user?.designation : designation}
                onChange={(event, newValue) => {
                  setIsUpdated(true);
                  setDesignation(newValue);
                }}
              />
              <Autocomplete
                multiple
                className='mt-3'
                sx={{ width: 300 }}
                disablePortal
                options={skillsList}
                renderInput={(params) => (
                  <TextField {...params} label='Select Skills' />
                )}
                // value={user?.skills ? user?.skills : skills}
                onChange={(event, newValue) => {
                  setIsUpdated(true);
                  setSkills(newValue);
                }}
              />
            </div>
          </div>
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
      <Sidebar />
    </div>
  );
};

export default Settings;
