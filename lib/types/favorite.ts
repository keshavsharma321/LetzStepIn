import { IProduct } from "./Products";
export interface IFavorite {
  items: IProduct[];
}

export interface IFavoriteRootState {
  favorite: IFavorite;
}
