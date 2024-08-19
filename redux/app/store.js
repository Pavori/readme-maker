import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../template/templateSlice';
import informationReducer from "../template/informationSlice"

const store = configureStore({
  reducer: {
    template: templateReducer,
    information : informationReducer
  },
});

export default store;
