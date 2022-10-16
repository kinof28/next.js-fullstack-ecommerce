import { createSlice } from "@reduxjs/toolkit";
import { ProductPreview } from "../products/productsSlice";

export interface Cart {
  products: ProductPreview[];
}
const initialState: Cart = { products: [] };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartSlice.reducer;
