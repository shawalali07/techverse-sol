import { createSlice } from '@reduxjs/toolkit';

export const answer = createSlice({
  name: 'answer',
  initialState: {
    answersData: [],
    allAnswersData: [],
    comments: [],
  },
  reducers: {
    setAnswersData: (state, action) => {
      state.answersData = action.payload;
    },
    setAllAnswersData: (state, action) => {
      state.allAnswersData = action.payload;
    },
    setCommentsData: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setAnswersData, setAllAnswersData, setCommentsData } =
  answer.actions;

export default answer.reducer;
