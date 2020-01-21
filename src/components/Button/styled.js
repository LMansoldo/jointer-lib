import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: ${props => props.cursor || "pointer"};
  width: ${props => props.width || "auto"};
  max-width: ${props => props.maxWidth || "auto"};
  min-height: ${props => props.height || "auto"};
  max-height: ${props => props.height || "auto"};
  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
  box-sizing: border-box;
  border-radius: ${props => props.borderRadius || "14px"};
  background: ${props => props.background || "#fff"};
  border: ${props => props.border || "none"};
  box-shadow: ${props => props.boxShadow || "none"};
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  flex: ${props => props.flex || "1"};
`;
