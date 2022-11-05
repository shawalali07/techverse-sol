import { createSlice } from '@reduxjs/toolkit';

export const knowledge = createSlice({
  name: 'knowledge',
  initialState: {
    knowledgeData: [],
    knowledgeId: [],
    knowledgeUser: [],
    myKnowledge: [],
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
    startMyKnowledge: (state, action) => {
      state.myKnowledge = [];
      state.loading = true;
      state.error = false;
    },
    setmyKnowledge: (state, action) => {
      state.myKnowledge = action.payload;
      state.loading = false;
      state.error = false;
    },
    failMyKnowledge: (state, action) => {
      state.myKnowledge = [];
      state.loading = false;
      state.error = true;
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
  startMyKnowledge,
  setmyKnowledge,
  failMyKnowledge,
} = knowledge.actions;

export default knowledge.reducer;
