import React from "react";

import Text from "../Text";
import theme from "../Themes";
import Button from "../Button";
import HeartEmptyIcon from "../Icons/svg/HeartEmptyIcon"
import HeartFilledIcon from "../Icons/svg/HeartFilledIcon"

import {
  Wrapper,
  BottomWrapper,
  MiddleWrapper,
  TopWrapper
} from "./styled";

const Card = ({

}) => {
  return (
    <Wrapper>
      <TopWrapper>
        <Text 
          color={theme.color.tertiary}
          fontWeight="500"
          fontSize="14px"
        >
          Título
        </Text>
        <Text 
          color={theme.color.black}
          fontWeight="700"
          fontSize="12px"
        >
          subtítulo
        </Text>
      </TopWrapper>
      <MiddleWrapper>
        <Text 
          color={theme.color.black}
          fontWeight="700"
          fontSize="14px"
        >
          subtítulo
        </Text>          
      </MiddleWrapper>
      <BottomWrapper>
      <Button
        background="linear-gradient(80deg, #65DCCB, #693CE5)"
        color="#fff"
        boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
        height="37px"
        borderRadius="18px"
      >
       
      </Button>
      <Button
      height="37px"
      borderRadius="19px"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
      onPress={() => console.log("Icon Button clicked")}
    >
      <HeartFilledIcon size="24px" color="#693CE5" />

    </Button>
      </BottomWrapper>
    </Wrapper>
  ); 
};

export default Card;