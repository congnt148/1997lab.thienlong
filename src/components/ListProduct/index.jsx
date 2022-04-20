import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content, BtnSeeMore, CoverBtn } from "./ListProduct.styles";
import Product from "../Product";
const data = [1, 2, 3, 4, 5, 6, 7, 8];
ListProduct.propTypes = {};
function ListProduct({ title }) {
  return (
    <Wrapper>
      <h2 style={{ marginBottom: 0 }}>{title}</h2>
      <Content>
        {data.map((item, index) => (
          <Product />
        ))}
      </Content>
      <CoverBtn>
        <BtnSeeMore>
          <p style={{ color: "white" }}>Xem thêm</p>
        </BtnSeeMore>
      </CoverBtn>
    </Wrapper>
  );
}

export default ListProduct;
