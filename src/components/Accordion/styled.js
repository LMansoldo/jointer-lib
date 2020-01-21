import styled from "styled-components";
import theme from "../Themes";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ItemMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  border-bottom: 1px solid ${props => props.color};
  grid-row-gap: 3vw;
  outline: none;
`;

export const ItemHighlight = styled.div`
  display: grid;
  width: 100%;
  cursor: pointer;
  align-items: center;
  grid-template-columns: 80vw 20vw;
  padding: 20px 0;
  background: #FFF;
  user-select: none; 
  outline: none;

  &:hover {
    outline: none;
    background: ${theme.color.highlight};
    transition: background 300ms ease;
  }

  & > div {
    letter-spacing: 0.5px;
    font-size: 16px;
    text-transform: lowercase;
    padding: 0 0 0 7vw!important;
  } 

  & > svg {
    justify-self: center;
  }
`;

export const ItemSubMenu = styled.div`
  display: grid;
  grid-row-gap: ${props => props.expanded ? '25px' : '0px'};
  width: 100%;
  padding:${props => props.expanded ? '20px 0' : '0px'};
  max-height: ${props => props.expanded ? props.height : '0px'};
  transition: all 0.3s ease-out;

  & > div {
    font-size: 16px;
    padding: 0 0 0 7vw!important;
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 7vw;
`;
