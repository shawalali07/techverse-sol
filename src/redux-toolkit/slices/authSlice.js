import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    token: '',
    fullName: '',
    email: '',
    profilePic: '',
    id: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.profilePic = action.payload.profilePic;
      state.id = action.payload.id;
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
    },
  },
});

export const { setToken, destroyToken, setUpdatedProfile } = authSlice.actions;

export default authSlice.reducer;
