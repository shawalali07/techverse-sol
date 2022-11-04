import { createSlice } from '@reduxjs/toolkit';

export const knowledge = createSlice({
  name: 'knowledge',
  initialState: {
    knowledgeData: [],
    knowledgeId: [],
    knowledgeUser: [],
    loading: false,
    error: false,
  },
  reducers: {
    startKnowledge: (state, action) => {
      state.knowledgeData = [];
      state.loading = true;
      state.error = false;
    },
    startKnowledgeUser: (state, action) => {
      state.knowledgeUser = [];
      state.loading = true;
      state.error = false;
    },
    startKnowledgeId: (state, action) => {
      state.knowledgeId = [];
      state.loading = true;
      state.error = false;
    },
    setKnowledge: (state, action) => {
      state.knowledgeData = action.payload;
      state.loading = false;
      state.error = false;
    },
    setKnowledgeUser: (state, action) => {
      state.knowledgeUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    setKnowledgeId: (state, action) => {
      state.knowledgeId = action.payload;
      state.loading = false;
      state.error = false;
    },
    failKnowledgeData: (state, action) => {
      state.knowledgeData = [];
      state.loading = false;
      state.error = true;
    },
    failKnowledgeUser: (state, action) => {
      state.knowledgeUser = [];
      state.loading = false;
      state.error = true;
    },
    failKnowledgeData: (state, action) => {
      state.knowledgeId = [];
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  setKnowledge,
  startKnowledge,
  failKnowledgeData,
  startKnowledgeId,
  setKnowledgeId,
  failKnowledgeDataId,
  setKnowledgeUser,
  startKnowledgeUser,
  failKnowledgeUser,
} = knowledge.actions;

export default knowledge.reducer;
