import React, { Fragment } from "react";
import Categories from "../../components/category/Categories";
import Footer from "../../components/footer/Footer";
import Announcement from "../../components/nav/Announcement";
import NavBar from "../../components/nav/NavBar";
import NewLetter from "../../components/newsletter/NewLetter";
import Products from "../../components/product/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <Fragment>
      <Announcement/>  
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <NewLetter />
      <Footer />
    </Fragment>
  );
};

export default Home;
