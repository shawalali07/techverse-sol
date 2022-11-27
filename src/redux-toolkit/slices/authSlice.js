import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    token: '',
    fullName: '',
    email: '',
    profilePic: '',
    aboutMe: '',
    id: '',
    isAdmin: false,
    rate: '',
    skills: '',
    designation: '',
    projects: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.profilePic = action.payload.profilePic;
      state.id = action.payload.id;
      state.rate = action.payload.rate;
      state.country = action.payload.country;
      state.designation = action.payload.designation;
      state.skills = action.payload.skills;
      state.aboutMe = action.payload.aboutMe;
      state.projects = action.payload.projects;
      state.isAdmin = action.payload.isAdmin;
    },
    destroyToken: (state) => {
      state.token = '';
      state.fullName = '';
      state.email = '';
      state.profilePic = '';
    },
    setUpdatedProfile: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.name;
      state.profilePic = action.payload.image;
      state.rate = action.payload.rate;
      state.country = action.payload.country;
      state.designation = action.payload.designation;
      state.skills = action.payload.skills;
      state.aboutMe = action.payload.aboutMe;
      state.projects = action.payload.project;
    },
  },
});

export const { setToken, destroyToken, setUpdatedProfile } = authSlice.actions;

export default authSlice.reducer;
