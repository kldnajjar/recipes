import { configureStore } from "@reduxjs/toolkit";
const reducer = null;
export default function () {
  const store = configureStore({
    reducer,
  });

  return store;
}
