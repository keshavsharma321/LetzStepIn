import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../../../lib/client";
import { IProduct } from "../../../../lib/types/Products";
import ProductList from "../../../../components/productList/ProductList";
import { ITitlePathsParams } from "../../../../lib/types/pagePathsParams";

const brandPage: NextPage<{
  Products: IProduct[];
}> = ({ Products }) => {
  return (
    <div>
      <ProductList productList={Products} />
    </div>
  );
};

export default brandPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type=="product"]{
    "category":category[0],
    "subCategory":category[1],
    "title":category[2],
  }`;
  const Products = await client.fetch(query);
  const paths = Products.map((product: ITitlePathsParams) => ({
    params: {
      category: product.category,
      subCategory: product.subCategory,
      title: product.title,
    },
  }));
  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const title = context.params?.title;
  const subCategory = context.params?.subCategory;
  const productQuery = `*[_type=='product'&& category[1]=="${subCategory}" && category[2]=="${title}"]`;

  const Products = await client.fetch(productQuery);

  return {
    props: {
      Products: Products,
    },
  };
};
