import React from "react";

import Button from "../components/Button";
import Text from "../components/Text";
import HeartIcon from "../components/Icons/svg/HeartFilledIcon";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Button", module);
stories.add("gradient", () => {
  return (
    <Button
      background="linear-gradient(80deg, #65DCCB, #693CE5)"
      color="#fff"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
      height="37px"
      borderRadius="18px"
    >
      <Text
        color="#fff"
        fontWeight="400"
        fontSize="16px"
        letterSpacing="2px"
        width="100%"
        textAlign="center"
        justifyContent="center"
      >
        gradient button
      </Text>
    </Button>
  );
});

stories.add("bordered", () => {
  return (
    <Button
      borderRadius="18px"
      height="37px"
      border="1px solid #693CE5"
      color="#65DCCB"
      onPress={() => console.log("Border Button clicked")}
    >
      <Text
        color="#693CE5"
        letterSpacing="1px"
        fontSize="14px"
        fontWeight="700"
      >
        border button
      </Text>
    </Button>
  );
});

stories.add("with icon", () => {
  return (
    <Button
      height="37px"
      borderRadius="19px"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.3)"
      onPress={() => console.log("Icon Button clicked")}
    >
      <HeartIcon size="24px" color="#693CE5" />
      <Text
        color="#693CE5"
        margin="0 0 0 8px"
        fontWeight="500"
        fontSize="15px"
      >
        Icon Button
      </Text>
    </Button>
  );
});
