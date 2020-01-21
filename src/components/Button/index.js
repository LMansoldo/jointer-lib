import React from "react";

import { Wrapper } from "./styled";

const Button = ({
  onPress = () => {},
  children,
  width,
  maxWidth,
  height,
  justifyContent,
  alignItems,
  padding,
  margin,
  background,
  border,
  borderRadius,
  cursor,
  boxShadow,
  flex
}) => {
  return (
    <Wrapper
      onClick={onPress}
      cursor={cursor}
      width={width}
      maxWidth={maxWidth}
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      background={background}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      flex={flex}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
