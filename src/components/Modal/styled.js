import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9001;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  z-index: 9002;
  position: relative;
  align-self: center;
`;
