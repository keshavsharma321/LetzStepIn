import React from "react";
import { IProduct } from "../../lib/types/Products";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";

interface Props {
  Products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ Products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {Products.map((product) => (
          <CarouselBoxCard key={product.slug.current} product={product} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
