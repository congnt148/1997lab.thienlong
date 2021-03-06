import styled from "styled-components";

export const CoverImage = styled.div`
  background: var(--gray);
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
