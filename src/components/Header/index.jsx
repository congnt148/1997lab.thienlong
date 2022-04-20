import React from "react";
import {
  Wrapper,
  Content,
  LogoImg,
  ListMenu,
  TxtMenu,
  CoverListIcon,
  CoverIcon,
} from "./Header.styles";
import logo from "../../images/logo.png";
import iconProfile from "../../images/iconProfile.svg";
import iconSearch from "../../images/iconSearch.svg";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={logo} alt="rmdb-logo" />
        <ListMenu>
          <TxtMenu>
            <h4>Bút viết</h4>
          </TxtMenu>
          <TxtMenu>
            <h4>Văn phòng phẩm</h4>
          </TxtMenu>
          <TxtMenu>
            <h4>Dụng cụ học tập</h4>
          </TxtMenu>
          <TxtMenu>
            <h4>Mỹ thuật</h4>
          </TxtMenu>
        </ListMenu>
        <CoverListIcon>
          <CoverIcon>
            <img
              src={iconSearch}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </CoverIcon>
          <CoverIcon>
            <img
              src={iconProfile}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </CoverIcon>
        </CoverListIcon>
      </Content>
    </Wrapper>
  );
};
export default Header;
