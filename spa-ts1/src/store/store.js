import { configureStore } from '@reduxjs/toolkit';
import saveDataReducer from '../Slices/Slice';

export default configureStore({
  reducer: {
    counter: saveDataReducer,
  },
});
