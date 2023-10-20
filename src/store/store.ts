import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import { questionsApi } from '../api/questionsApi';

const store = configureStore({
  reducer: {
    rootReducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionsApi.middleware),

});

export type AppDispatch = typeof store.dispatch;
export default store;
