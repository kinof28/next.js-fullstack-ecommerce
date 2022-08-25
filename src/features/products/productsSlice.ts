import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsPreview } from "./productsAPI";

export interface ProductPreview {
  id: number;
  name: string;
  title: string;
  price: number;
  mainImag: string;
  models: Model[];
}

export interface Model {
  id: number;
  image: string;
}

const initialState: ProductPreview[] = [];

export const getProductsPreview = createAsyncThunk(
  "productsPreview",
  async () => {
    const result = await fetchProductsPreview();
    console.log("result from thunk function: ", result);
    return result;
  }
);

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsPreview.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});
