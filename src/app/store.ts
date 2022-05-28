import { configureStore, ThunkAction, Action, combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from "features/login/loginSlice";
import cartReducer from "features/cart/cartSlice";
import { loadState } from './localStorage';
import logger from 'redux-logger'
const persistedState = loadState();

const combinedReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  cart:cartReducer,
});
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "login/logOut") {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};
export const store = configureStore({
  reducer: rootReducer,
  preloadedState:persistedState,
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
