import styled, { keyframes } from "styled-components";

const sidebarAnimationFadeIn = keyframes`
  0% {width: 0%}
  100% {width: 100%;}
`;

export const SidebarContainer = styled.div<{ isSidebarOpen?: boolean }>`
  width: 100%;
  max-width: 60%;
  height: 100vh;
  background-color: #5f5f5f;
  position: absolute;
  z-index: 9999;
  display: ${(props) => (props.isSidebarOpen ? "flex" : "none")};
  transition: ${sidebarAnimationFadeIn} 0.7s ease-in-out;
  animation-name: ${sidebarAnimationFadeIn};
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
