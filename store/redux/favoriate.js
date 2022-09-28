import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favoriateSlicer = createSlice({
  name: "favoriteMeals",
  initialState,
  reducers: {
    addFavoriate: (state, action) => {
      state.ids = [...state.ids, action.payload.id];
    },
    removeFavoriate: (state, action) => {
      state.ids = state.ids.filter((i) => i !== action.payload.id);
    },
  },
});

export const { addFavoriate, removeFavoriate } = favoriateSlicer.actions;
export default favoriateSlicer.reducer;
