import { createSlice } from '@reduxjs/toolkit';

export const follow = createSlice({
  name: 'follow',
  initialState: {
    myFollowing: [],
    loading: false,
    isFollow: false,
  },
  reducers: {
    startMyFollowing: (state, action) => {
      state.myFollowing = [];
      state.loading = true;
    },
    setMyFollowing: (state, action) => {
      state.myFollowing = action.payload;
      state.loading = false;
    },
    failMyFollowing: (state, action) => {
      state.myFollowing = [];
      state.loading = false;
    },
    startIsFollow: (state, action) => {
      state.isFollow = undefined;
      state.loading = true;
    },
    setIsFollow: (state, action) => {
      state.isFollow = action.payload;
      state.loading = false;
    },
    failIsFollow: (state, action) => {
      state.myFollowing = undefined;
      state.loading = false;
    },
  },
});

export const {
  setMyFollowing,
  startMyFollowing,
  failMyFollowing,
  setIsFollow,
  startIsFollow,
  failIsFollow,
} = follow.actions;

export default follow.reducer;
