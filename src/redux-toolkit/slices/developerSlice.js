import { createSlice } from '@reduxjs/toolkit';

export const developer = createSlice({
  name: 'developer',
  initialState: {
    topDevelopers: [],
    loading: false,
    error: false,
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
  },
});

export const { setTopDev, startTopDev, failTopDev } = developer.actions;

export default developer.reducer;
