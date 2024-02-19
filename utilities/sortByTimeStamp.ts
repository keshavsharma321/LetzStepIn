import { IProduct } from "../lib/types/Products";

export function getTimeStamp(date: string) {
  const creationProductDate = new Date(date);
  return creationProductDate.getTime();
}

export const sortByTimeStamp = (
  product1: IProduct,
  product2: IProduct
): number => {
  if (product2?.timeStamp && product1?.timeStamp) {
    return product2?.timeStamp - product1?.timeStamp;
  }
  return 0;
};

export const newestProductsFn = (Products: IProduct[]) => {
  const ProductsWithTimeStamp = Products.map((product) => {
    return {
      ...product,
      timeStamp: getTimeStamp(product.registerDate!),
    };
  });
  return ProductsWithTimeStamp.sort(sortByTimeStamp);
};
