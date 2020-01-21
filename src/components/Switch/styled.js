import styled from "styled-components";

export const Thumb = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 36px;
  background: ${props => (props.status ? props.color : "#9a9a9a")};
  position: relative;
  transition: background 0.3s;

  &:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    width: 36px;
    height: 14px;
    top: calc(50% - 7px);
    left: calc(50% - 18px);
    background: ${props =>
      props.status ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)"};
    transition: background 0.3s;
  }
`;

export const Track = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  top: calc(50% - 10px);
  left: ${props => (props.status ? "calc(100% - 20px)" : "0")};
  background: ${props => (props.status ? props.color : "#fff")};
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: left 0.3s, background 0.3s;
  cursor: pointer;
`;
