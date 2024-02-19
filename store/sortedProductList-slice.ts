import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductList } from "../lib/types/productList";
import { IProduct } from "../lib/types/products";
import { sortByPoPularity } from "../utilities/sortByPopularity";
import { sortByCheapest, sortByExpensive } from "../utilities/sortByCost";
import { newestProductsFn } from "../utilities/sortByTimeStamp";

const initialState: IProductList = {
  ProductsList: [],
};

const SortedProductsListSlice = createSlice({
  name: "sortedProductsList",
  initialState,
  reducers: {
    sortProductsList(
      state,
      action: PayloadAction<{ ProductsList: IProduct[]; sortBasedOn: string }>
    ) {
      switch (action.payload.sortBasedOn) {
        case "all":
          state.ProductsList = action.payload.ProductsList;
          break;
        case "newestProducts": {
          state.ProductsList = newestProductsFn(state.ProductsList);
          break;
        }
        case "popular": {
          state.ProductsList = state.ProductsList.sort(sortByPoPularity);
          break;
        }
        case "cheapest": {
          state.ProductsList = state.ProductsList.sort(sortByCheapest);
          break;
        }
        case "expensive": {
          state.ProductsList = state.ProductsList.sort(sortByExpensive);
          break;
        }
      }
    },
  },
});
export const SortedProductsListActions = SortedProductsListSlice.actions;

export default SortedProductsListSlice.reducer;
