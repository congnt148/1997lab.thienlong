import React from "react";
import PropTypes from "prop-types";
import { Image, CoverImage } from "./Product.styles";
import ImgSanPham from "../../images/sanpham.png";
Product.propTypes = {};

function Product(props) {
  return (
    <div style={{}}>
      <CoverImage>
        <Image src={ImgSanPham} alt="movie-thumb"></Image>
      </CoverImage>
      <p style={{ color: "black", margin: 6 }}>MSP: 123123123</p>
      <h3 style={{ color: "black", margin: 6 }}>Bút lông bảng </h3>
      <h4 style={{ color: "var(--orange)", margin: 6 }}>150,000đ</h4>
    </div>
  );
}

export default Product;
