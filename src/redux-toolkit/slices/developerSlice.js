import { createSlice } from '@reduxjs/toolkit';

export const developer = createSlice({
  name: 'developer',
  initialState: {
    topDevelopers: [],
    loading: false,
    error: false,
    resume: [],
  },
  reducers: {
    startTopDev: (state, action) => {
      state.topDevelopers = [];
      state.loading = true;
      state.error = false;
    },
    setTopDev: (state, action) => {
      state.topDevelopers = action.payload;
      state.loading = false;
      state.error = false;
    },
    failTopDev: (state, action) => {
      state.topDevelopers = [];
      state.loading = false;
      state.error = true;
    },
    setResume: (state, action) => {
      state.resume = action.payload;
    },
  },
});

export const { setTopDev, startTopDev, failTopDev, setResume } =
  developer.actions;

export default developer.reducer;
