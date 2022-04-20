import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  } ;
`;

export const ListMenu = styled.div`
  flex-direction: row;
  display: flex;
`;

export const TxtMenu = styled.div`
  color: var(--darkGrey);
  margin: 0 20px;
  h4: {
    color: var(--darkGrey);
  }
`;

export const CoverListIcon = styled.div`
  flex-direction: row;
  display: flex;
`;

export const CoverIcon = styled.div`
  background: var(--color2);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 10px;
`;
