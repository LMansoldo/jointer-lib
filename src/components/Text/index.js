import React from "react";
import styled from "styled-components";
import defaultTheme from "../Themes";

const TextWrapper = styled.div`
  font-size: ${props => props.fontSize || "12px"};
  font-family: ${props => props.fontFamily || props.theme.font.primary};
  line-height: ${props => props.lineHeight || props.theme.lineHeight.primary};
  letter-spacing: ${props => props.letterSpacing || "unset"};
  color: ${props => props.color || "rgb(0, 0, 0, .8)"};
  word-break: ${props => props.wordBreak || "break-word"};
  cursor: ${props => props.cursor || "unset"};
  font-weight: ${props => props.fontWeight || "500"};
  text-decoration: ${props => props.textDecoration || "unset"};
  text-decoration-color: ${props => props.textDecorationColor || "auto"};
  text-decoration-line: ${props => props.textDecorationLine || "solid"};
  text-transform: ${props => props.textTransform || "lowercase"};
  justify-content: ${props => props.justifyContent || "unset"};
  text-align: ${props => props.textAlign || "unset"};
  align-items: ${props => props.alignItems || "auto"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  min-height: ${props => props.minHeight || "auto"};
  max-height: ${props => props.maxHeight || "auto"};
  overflow: ${props => props.overflow || "hidden"};
  border-top: ${props => props.borderTop || "unset"};
  border-bottom: ${props => props.borderBottom || "unset"};
  border-left: ${props => props.borderLeft || "unset"};
  border-right: ${props => props.borderRight || "unset"};
  margin: ${props => props.margin || "0"} !important;
  padding: ${props => props.padding || "0"} !important;
  overflow: ${props => (props.lineLimit ? "hidden" : "unset")};
  text-overflow: ${props => (props.lineLimit ? "ellipsis" : "unset")};
  display: ${props => props.display || "flex !important"};
  -webkit-box-orient: ${props => (props.lineLimit ? "vertical" : "unset")};
  -webkit-line-clamp: ${props => props.lineLimit || "unset"};
  max-height: ${props =>
    props.lineLimit
      ? `calc(${props.lineHeight} * ${props.lineLimit})`
      : "unset"};
`;

const Text = ({
  onPress,
  children,
  theme = defaultTheme,
  fontSize,
  fontFamily,
  lineHeight,
  letterSpacing,
  color,
  wordBreak,
  cursor,
  fontWeight,
  textDecoration,
  textDecorationColor,
  textDecorationLine,
  textTransform,
  textAlign,
  alignItems,
  justifyContent,
  width,
  height,
  lineLimit,
  minHeight,
  maxHeight,
  overflow,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  margin,
  padding,
  display
}) => {
  return (
    <TextWrapper
      onClick={onPress}
      justifyContent={justifyContent}
      lineLimit={lineLimit}
      theme={theme}
      fontSize={fontSize}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      color={color}
      wordBreak={wordBreak}
      cursor={cursor}
      fontWeight={fontWeight}
      textDecoration={textDecoration}
      textDecorationColor={textDecorationColor}
      textDecorationLine={textDecorationLine}
      textTransform={textTransform}
      textAlign={textAlign}
      alignItems={alignItems}
      width={width}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      overflow={overflow}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
      margin={margin}
      padding={padding}
      display={display}
    >
      {children}
    </TextWrapper>
  );
};

export default Text;
