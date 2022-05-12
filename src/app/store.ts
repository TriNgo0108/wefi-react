import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from "features/login/loginSlice";
import cartReducer from "features/cart/cartSlice";
import { loadState } from './localStorage';
import logger from 'redux-logger'
const persistedState = loadState();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    cart:cartReducer,
  },
  preloadedState:persistedState,
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
