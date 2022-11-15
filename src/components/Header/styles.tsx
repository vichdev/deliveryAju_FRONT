import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: red;
  z-index: 1;
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  color: #fff;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1``;

export const HeaderNavbar = styled.div`
  display: flex;
  gap: 0.75rem;

  svg {
    font-size: 2rem;
  }
`;
