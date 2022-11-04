import { createSlice } from '@reduxjs/toolkit';

export const question = createSlice({
  name: 'question',
  initialState: {
    questionsData: [],
    loading: false,
    error: false,
    searchQuestions: [],
    specificUserQuestions: [],
    fetchData: null,
    questionQuery: '',
    questionId: [],
  },
  reducers: {
    setFetchData: (state, action) => {
      state.fetchData = action.payload;
    },
    startQuestionsId: (state, action) => {
      state.questionId = [];
      state.loading = true;
      state.error = false;
    },
    setQuestionsId: (state, action) => {
      state.questionId = action.payload;
      state.loading = false;
      state.error = false;
    },
    failQuestionsId: (state, action) => {
      state.questionId = [];
      state.loading = false;
      state.error = true;
    },
    startQuestionsData: (state, action) => {
      state.questionsData = [];
      state.loading = true;
      state.error = false;
    },
    setQuestionsData: (state, action) => {
      state.questionsData = action.payload;
      state.loading = false;
      state.error = false;
    },
    failQuestionsData: (state, action) => {
      state.questionsData = [];
      state.loading = false;
      state.error = true;
    },
    setSearchQuestions: (state, action) => {
      state.searchQuestions = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.questionQuery = action.payload;
    },
    startSpecificQuestions: (state, action) => {
      state.specificUserQuestions = [];
      state.loading = true;
      state.error = false;
    },
    setSpecificUserQuestions: (state, action) => {
      state.specificUserQuestions = action.payload;
      state.loading = false;
      state.error = false;
    },
    failSpecificQuestionsData: (state, action) => {
      state.specificUserQuestions = [];
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  startSpecificQuestions,
  failSpecificQuestionsData,
  startQuestionsData,
  failQuestionsData,
  setQuestionsData,
  setSearchQuestions,
  setSpecificUserQuestions,
  setFetchData,
  setSearchQuery,
  startQuestionsId,
  setQuestionsId,
  failQuestionsId,
} = question.actions;

export default question.reducer;
