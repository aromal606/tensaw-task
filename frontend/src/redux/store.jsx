import { configureStore } from '@reduxjs/toolkit';
import clinicReducer from './clinicSlice';

const store = configureStore({
  reducer: {
    clinic: clinicReducer,
  }
});

export default store;