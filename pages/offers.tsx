import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { client } from "../lib/client";
import { IProduct } from "../lib/types/products";
import ProductList from "../components/productList/ProductList";

const offers: NextPage<{
  Products: IProduct[];
}> = ({ Products }) => {
  return (
    <div>
      <ProductList productList={Products} />
    </div>
  );
};

export default offers;

export const getStaticProps: GetStaticProps = async () => {
  const productQuery = `*[_type=='product'&& isOffer==true]`;
  const Products = await client.fetch(productQuery);
  return {
    props: {
      Products: Products,
    },
  };
};
