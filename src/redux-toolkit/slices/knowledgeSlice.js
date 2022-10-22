import { createSlice } from '@reduxjs/toolkit';

export const knowledge = createSlice({
  name: 'knowledge',
  initialState: {
    knowledgeData: [],
    loading: false,
    error: false,
  },
  reducers: {
    startKnowledge: (state, action) => {
      state.knowledgeData = [];
      state.loading = true;
      state.error = false;
    },
    setKnowledge: (state, action) => {
      state.knowledgeData = action.payload;
      state.loading = false;
      state.error = false;
    },
    failKnowledgeData: (state, action) => {
      state.knowledgeData = [];
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setKnowledge, startKnowledge, failKnowledgeData } =
  knowledge.actions;

export default knowledge.reducer;
