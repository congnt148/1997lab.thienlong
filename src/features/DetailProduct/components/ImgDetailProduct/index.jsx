import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Content,
  ImageBig,
  LstImgSub,
  ImageSub,
} from "./ImgDetailProduct.styles";
import imgDetail1 from "../../../../images/imgDetail1.png";

ImgDetailProduct.propTypes = {};

function ImgDetailProduct(props) {
  return (
    <Wrapper>
      <Content>
        <div
          style={{
            background: "var(--gray)",
            width: 500,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <ImageBig src={imgDetail1} />
        </div>
        <LstImgSub>
          <ImageSub src={imgDetail1} />
          <ImageSub src={imgDetail1} />
          <ImageSub src={imgDetail1} />
        </LstImgSub>
      </Content>
    </Wrapper>
  );
}

export default ImgDetailProduct;
