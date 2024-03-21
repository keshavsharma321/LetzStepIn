import React from "react";
import dynamic from "next/dynamic";
import Menu from "./menu";
import Logo from "./Logo";
import Settings from "./Settings";
import CartIcon from "../cart/CartIcon";
import Home from "../Home";
import About from "../About/About";
import Location from "../Location/Location";
import Categories from "../Categories/Categories";
const UserBox = dynamic(() => import("./user"), {
  ssr: false,
});
const Theme = dynamic(() => import("./theme/Theme"), {
  ssr: false,
});

const index = () => {
  return (
    <header className="md:fixed  left-0 right-0 top-0 md:bg-palette-fill shadow-sm bg-white   z-[1000]">
      <div className="flex flex-col  bg-white   ">
        <div className="flex items-center justify-between md:order-2   relative">
          <Menu />
          <div className="md:hidden">
            <Logo />
          </div>
          <Settings /> {/* 👈settings: md:hidden */}
          {/* <div className="hidden md:flex md:items-center md:justify-between"> */}

          {/* <Language /> */}
          {/* <Theme /> */}
          {/* </div> */}
        </div>
        <hr className="md:hidden" />
        <div className="mb-2  md:mt-0 flex  items-center md:order-1">
          <div className="hidden md:block ">
            <Logo />
          </div>
          <div className="flex-grow justify-end flex mt-3 md:mt-0  ">
            <div className="px-2  md:px-3"><Home /></div>
            <div className="px-2 md:px-3"><About /></div>
            <div className="px-2 md:px-3"><Location /></div>
            <div className="px-2 md:px-3 mr-4"><Categories /></div>
          </div>
          <div className="ltr:ml-2 mt-3 md:mt-0 rtl:mr-2 sm:ltr:ml-4 sm:rtl:mr-4 flex items-center justify-between ">
            <div className="mr-5" style={{ color: "black" }}><CartIcon /></div>
            <div className="mr-4" style={{ color: "black" }}><UserBox /></div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default index;

