import type { NextPage } from "next";
import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";
import Category from "../components/category/Category";
import Search from "../components/Search";
import Newest from "../components/newest/Newest";

const Home: NextPage = () => {

  return (
    <div>
      <Search />
      <div>
        <Category />
        <Benefits />
        <Carousel />

        <Newest />
      </div>
    </div>

  );
};

export default Home;

