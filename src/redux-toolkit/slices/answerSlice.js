import { createSlice } from '@reduxjs/toolkit';

export const answer = createSlice({
  name: 'answer',
  initialState: {
    answersData: [],
    allAnswersData: [],
    comments: [],
    loading: false,
    error: false,
  },
  reducers: {
    startAnswersData: (state, action) => {
      state.answersData = [];
      state.loading = true;
      state.error = false;
    },
    setAnswersData: (state, action) => {
      state.answersData = action.payload;
      state.loading = false;
      state.error = false;
    },
    failAnswersData: (state, action) => {
      state.answersData = [];
      state.loading = false;
      state.error = true;
    },
    setAllAnswersData: (state, action) => {
      state.allAnswersData = action.payload;
    },
    setCommentsData: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const {
  setAnswersData,
  setAllAnswersData,
  setCommentsData,
  startAnswersData,
  failAnswersData,
} = answer.actions;

export default answer.reducer;
