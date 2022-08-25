import { createSlice } from "@reduxjs/toolkit";

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

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    getProductsPreview: (state) => {},
  },
});
