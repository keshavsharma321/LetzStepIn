import { IProduct } from "../../lib/types/products";

export interface IProductList {
  ProductsList: IProduct[] | [];
}

export interface IProductListRootState {
  sortedProductsList: IProductList;
}
