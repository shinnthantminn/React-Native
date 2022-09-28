import { configureStore } from "@reduxjs/toolkit";

import favoriateSlicer from "./favoriate";

export const store = configureStore({
  reducer: {
    favoriateMeals: favoriateSlicer,
  },
});
