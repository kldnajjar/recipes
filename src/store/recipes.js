import { createAction, createReducer } from "@reduxjs/toolkit";

export const pageNumber = createAction("pageNumber");

createReducer(1, {
  pageNumber: (state, action) => {
    state.push({
      page: action.page,
    });
  },
});
