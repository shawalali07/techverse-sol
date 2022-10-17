import { createSlice } from '@reduxjs/toolkit';

export const knowledge = createSlice({
  name: 'knowledge',
  initialState: {
    knowledgeData: [],
  },
  reducers: {
    setKnowledge: (state, action) => {
      state.knowledgeData = action.payload;
    },
  },
});

export const { setKnowledge } = knowledge.actions;

export default knowledge.reducer;
