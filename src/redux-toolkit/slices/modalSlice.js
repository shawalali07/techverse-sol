import { createSlice } from '@reduxjs/toolkit';

export const modal = createSlice({
  name: 'modal',
  initialState: {
    replyModal: false,
  },
  reducers: {
    setReplyModal: (state, action) => {
      state.replyModal = action.payload;
    },
  },
});

export const { setReplyModal } = modal.actions;

export default modal.reducer;
