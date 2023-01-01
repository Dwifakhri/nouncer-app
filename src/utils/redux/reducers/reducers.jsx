import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setFavorites } = sliceState.actions;
export default reducer;
