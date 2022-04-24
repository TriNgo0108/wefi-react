import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from "features/login/loginSlice";
import cartReducer from "features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    cart:cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
