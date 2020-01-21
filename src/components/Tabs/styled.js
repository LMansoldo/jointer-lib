import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr auto;
  grid-row-gap: 3vw;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-text: center;
`;

export const Tab = styled.div`
  align-items: center;
  align-text: center;
  border-bottom: 2px solid;
  border-color: ${props => props.color};
  width: 100%;
  cursor: pointer;
  user-select: none;
  justify-items: center;
  transition: border-color 500ms ease;

  & > div {
    transition: color 500ms ease;
    margin: 5px 0 !important;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-text: center;
  justify-content: center;
`;
