import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductPreview } from "../products/productsSlice";

export interface CartItem {
  product: ProductPreview;
  quantity: number;
}
export interface Cart {
  products: ProductPreview[];
}
const initialState: Cart = { products: [] };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductPreview>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<ProductPreview>) => {
      state.products = state.products.filter(
        (item) => item.id != action.payload.id
      );
    },
  },
});
export default cartSlice.reducer;
