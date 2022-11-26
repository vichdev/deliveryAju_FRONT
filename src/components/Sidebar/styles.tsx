import styled from "styled-components";

export const SidebarContainer = styled.div<{ isSidebarOpen?: boolean }>`
  width: ${(props) => (props.isSidebarOpen ? "250px" : 0)};
  max-width: 60%;
  overflow-x: hidden;
  height: 100vh;
  background-color: #5f5f5f;
  position: fixed;
  z-index: 9999;
  transition: 0.2s ease-in-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  svg {
    font-size: 2rem;
  }
`;

export const SidebarTitle = styled.h1``;
