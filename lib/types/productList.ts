import { IProduct } from "./products";

export interface IProductList {
  ProductsList: IProduct[] | [];
}

export interface IProductListRootState {
  sortedProductsList: IProductList;
}
