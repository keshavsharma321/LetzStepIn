import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../lib/types/Products";
import { IProductList } from "../lib/types/productList";

const initialState: IProductList = {
  ProductsList: [],
};

const newestProductsSlice = createSlice({
  name: "newestProducts",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<IProduct[]>) {
      state.ProductsList = action.payload;
    },
  },
});

export const newestProductsActions = newestProductsSlice.actions;

export default newestProductsSlice.reducer;
