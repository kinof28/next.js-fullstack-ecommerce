import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductPreview } from "../products/productsSlice";

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
  },
});
export default cartSlice.reducer;
