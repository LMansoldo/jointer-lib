import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 56px;
  max-height: 56px;
  padding: 0 7vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16);
`;

export const ItemWrapper = styled.div`
  width: max-content;
  height: max-content;
  user-select: none;
  cursor: pointer;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 5px;
  justify-items: center;
`;
