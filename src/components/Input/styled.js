import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height || "auto"};
  margin: ${props => props.margin || "0"};
  border-radius: ${props => props.borderRadius || "4px"};
  box-shadow: ${props => props.boxShadow || "none"};
  box-sizing: border-box;

  & > * {
    outline: none;
  }
`;

export const TextAreaWrapper = styled.textarea`
  width: ${props => props.width};
  height: ${props => props.height || "auto"};
  background: transparent;
  box-shadow: ${props => props.boxShadow || "none"};
  border: 1px solid ${props => props.borderColor};
  border-radius: ${props => props.borderRadius || "4px"};
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${props => (props.leadingIcon ? "40px" : "12px")};
  padding-right: ${props => (props.trailingIcon ? "50px" : "12px")};
  font-family: ${props => props.fontFamily || "sans-serif"};
  resize: none;
  font-size: 16px;
  color: ${props => props.color};
  clip-path: ${props =>
    props.hasValue ? props.cutPolygon : props.uncutPolygon};
  transition: clip-path 0.2s;

  &:focus {
    border: 2px solid ${props => props.selectedBorderColor};
    padding-left: ${props => (props.leadingIcon ? "39px" : "11px")};
    padding-right: ${props => (props.trailingIcon ? "49px" : "11px")};
    clip-path: ${props => props.cutPolygon};
  }

  &:focus ~ label.placeholder {
    font-size: 12px;
    top: -6px;
    left: 8px;
    color: ${props => props.selectedBorderColor};
  }
`;

export const InputWrapper = styled.input`
  width: ${props => props.width};
  height: ${props => props.height || "auto"};
  background: transparent;
  border: 1px solid ${props => props.borderColor};
  border-radius: ${props => props.borderRadius || "4px"};
  box-sizing: border-box;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${props => (props.leadingIcon ? "40px" : "12px")};
  padding-right: ${props => (props.trailingIcon ? "50px" : "12px")};
  font-family: ${props => props.fontFamily || "sans-serif"};
  font-size: 16px;
  color: ${props => props.color};
  clip-path: ${props =>
    props.hasValue ? props.cutPolygon : props.uncutPolygon};
  transition: clip-path 0.2s;
  outline: none;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    border: 2px solid ${props => props.selectedBorderColor};
    padding: ${props => (props.leadingIcon ? "0 39px" : "0 11px")};
    padding-left: ${props => (props.leadingIcon ? "39px" : "11px")};
    padding-right: ${props => (props.trailingIcon ? "49px" : "11px")};
    clip-path: ${props => props.cutPolygon};
  }

  &:focus ~ label.placeholder {
    font-size: 12px;
    top: -6px;
    left: 8px;
    color: ${props => props.selectedBorderColor};
  }
`;

export const Placeholder = styled.label`
  position: absolute;
  left: ${props => {
    if (props.hasValue) return "8px";
    if (props.leadingIcon) return "40px";
    return "8px";
  }};
  padding: 0 4px;
  top: ${props => (props.hasValue ? "-6px" : "calc(50% - 8px)")};
  font-size: ${props => (props.hasValue ? "12px" : "16px")};
  font-family: ${props => props.fontFamily || "sans-serif"};
  color: ${props => props.color};
  transition: top 0.2s, left 0.2s, font-size 0.2s, color 0.2s linear;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 60px);
  white-space: nowrap;

  cursor: text;
`;

export const HiddenPlaceholder = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 4px;
  font-size: 12px;
  font-family: ${props => props.fontFamily || "sans-serif"};
  opacity: 0;
`;

export const ErrorText = styled.span`
  position: absolute;
  bottom: -16px;
  left: 12px;
  font-size: 12px;
  font-family: ${props => props.fontFamily || "sans-serif"};
  color: ${props => (props.gradientBackground ? "#fff" : "#f00")};
`;

export const TrailingIcon = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  right: 12px;
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const LeadingIcon = styled.div`
  position: absolute;
  top: 16px;
  left: 12px;
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  height: auto;
  max-height: 340px;
  padding: 8px 15px 8px 0;
  color: #fff;
  background: #fff;
  border-radius: 4px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const DropdownOverflowMask = styled.div`
  width: ${props => props.width || "100%"};
  height: auto;
  position: absolute;
  overflow: hidden;
  box-sizing: border-box;
  top: ${props => props.top};
  left: 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const DropdownItemWrapper = styled.div`
  width: calc(100% + 15px);
  height: 48px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
  overflow: hidden;
  font-family: ${props => props.fontFamily || "sans-serif"};
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    cursor: pointer;
    user-select: none;
    background: #f5f5f5;
  }
`;

export const DropdownItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 16px;
`;

export const InputModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
