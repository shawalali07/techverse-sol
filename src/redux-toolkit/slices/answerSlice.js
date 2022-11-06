import { createSlice } from '@reduxjs/toolkit';

export const answer = createSlice({
  name: 'answer',
  initialState: {
    answersData: [],
    allAnswersData: [],
    myAnswers: [],
    comments: [],
    loading: false,
    error: false,
    canVote: null,
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
    startMyAnswers: (state, action) => {
      state.myAnswers = [];
      state.loading = true;
      state.error = false;
    },
    setMyAnswers: (state, action) => {
      state.myAnswers = action.payload;
      state.loading = false;
      state.error = false;
    },
    failMyAnswers: (state, action) => {
      state.myAnswers = [];
      state.loading = false;
      state.error = true;
    },

    setCanVote: (state, action) => {
      state.canVote = action.payload;
    },
  },
});

export const {
  setAnswersData,
  setAllAnswersData,
  setCommentsData,
  startAnswersData,
  failAnswersData,
  setMyAnswers,
  startMyAnswers,
  failMyAnswers,
  setCanVote,
} = answer.actions;

export default answer.reducer;
