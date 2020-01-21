import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 314px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

export const YearRow = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.fontFamily};
  font-size: ${props => (props.selected ? "25px" : "14px")};
  font-weight: 600;
  color: ${props =>
    props.selected ? props.selectedColor : "rgba(0, 0, 0, 0.6)"};
  margin: 15px 0;
  cursor: pointer;
`;
