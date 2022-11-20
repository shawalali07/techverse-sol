import { createSlice } from '@reduxjs/toolkit';

export const snippetSlice = createSlice({
  name: 'snippetSlice',
  initialState: {
    snippets: [],
    loading: false,
    isFollow: false,
  },
  reducers: {
    startSnippets: (state, action) => {
      state.snippets = [];
      state.loading = true;
    },
    setSnippets: (state, action) => {
      state.snippets = action.payload;
      state.loading = false;
    },
    failSnippets: (state, action) => {
      state.snippets = [];
      state.loading = false;
    },
  },
});

export const { startSnippets, setSnippets, failSnippets } =
  snippetSlice.actions;

export default snippetSlice.reducer;
