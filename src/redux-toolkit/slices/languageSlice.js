import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'languageSlice',
  initialState: {
    tags: [],
  },
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const { setTags } = languageSlice.actions;

export default languageSlice.reducer;
