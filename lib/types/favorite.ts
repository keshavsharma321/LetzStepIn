import { IProduct } from "../../lib/types/products";
export interface IFavorite {
  items: IProduct[];
}

export interface IFavoriteRootState {
  favorite: IFavorite;
}
