import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      products: productsReducer,
      cart: cartReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
