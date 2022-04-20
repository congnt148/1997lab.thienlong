import React from "react";
import { Wrapper } from "./Home.styles";
import Banner from "../../components/Banner";
import ListProduct from "../../components/ListProduct";
import Footer from "../../components/Footer";
import ListBrand from "../../components/ListBrand";
const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <ListBrand />
      <ListProduct title="Bút viết" />
      <ListProduct title="Văn phòng phẩm" />
      <ListProduct title="Dụng cụ học tập" />
      <Footer />
    </Wrapper>
  );
};
export default Home;
