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

const initialState = {
  value: [],
};

export const getProductsPreview = createAsyncThunk(
  "productsPreview",
  async () => {
    const result = await fetchProductsPreview();
    // console.log("result from thunk function: ", result);

    return result;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(getProductsPreview.pending, (state) => {
      //   state.value = [];
      //   console.log("pending...");
      // })
      .addCase(getProductsPreview.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export default productsSlice.reducer;

// export const { printState } = productsSlice.actions;
