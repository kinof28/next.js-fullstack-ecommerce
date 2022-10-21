import { AppState } from "./../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductPreview } from "../products/productsSlice";

export interface CartItem {
  product: ProductPreview;
  quantity: number;
}
export interface Cart {
  items: CartItem[];
}
const initialState: Cart = { items: [] };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductPreview>) => {
      let added: boolean = false;
      for (let i = 0; i < state.items.length; i++) {
        const element = state.items[i];
        if (element.product.id === action.payload.id) {
          element.quantity++;
          added = true;
          break;
        }
      }
      if (!added) state.items.push({ product: action.payload, quantity: 1 });
    },
    removeProduct: (state, action: PayloadAction<ProductPreview>) => {
      for (let i = 0; i < state.items.length; i++) {
        const element = state.items[i];
        if (element.product.id === action.payload.id) {
          element.quantity--;
          if (element.quantity < 1) state.items.splice(i, 1);
          break;
        }
      }
    },
  },
});
export const selectCart = (state: AppState) => state.cart;
export default cartSlice.reducer;
