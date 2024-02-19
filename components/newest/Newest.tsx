import React from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "../../hooks/useLanguage";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Link from "next/link";
import Card from "../UI/card/Card";
import { IProduct } from "../../lib/types/products";
import Image from "next/image";

const Newest = () => {
  const { t } = useLanguage();
  const { width } = useWindowDimensions();
  let numProductToShow = width >= 1536 ? 12 : 8;

  const newestProducts: IProduct[] = useSelector(
    (state: any) => state.newestProductsList.ProductsList
  );

  return (
    <div className="my-4 mx-auto lg:-mb-8 lg:mt-16 flex flex-col xl:max-w-[2130px]">
      <h2 className="my-4 mx-auto mt-10 mb-12 md:mb-24 text-3xl font-portuguese md:text-6xl">{t.newest}</h2>

      <div className="flex-col md:flex-row flex h-full">
        <div className=" w-full lg:w-2/3 justify-center flex">
          <p className="text-xl md:text-3xl ml-4 md:ml-8 md:mr-16 ">At LetzStepIn, we prioritize user satisfaction by providing a multitude of benefits, discounts, and rewards with every offline and online purchase. Our commitment to enhancing your brand's virtual presence is exemplified through our cutting-edge 360° advanced interactive virtual tour, featuring remote access, 3D models, and live video calling capabilities. We will empower your brand's digital journey, making every interaction a seamless and rewarding experience for both businesses and users alike.
          </p>
        </div>
        <div className=" ml-24 md:ml-0 w-1/2 -mb-16 md:mb-0 md:w-1/3 justify-center flex md:-mt-24">
          <Image src="/images/logo.png"
            width={500} height={500}></Image>
        </div>
      </div>
    </div>
  );
};

export default Newest;
