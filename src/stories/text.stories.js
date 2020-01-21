/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import Text from "../components/Text";
import defaultTheme from "../components/Themes";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Text", module);
stories.addDecorator(withKnobs);
stories.add("regular", () => {
  const fontSize = text("Font size", "16px");
  const fontWeight = text("Font weight", "700");
  const color = text("Color", "rgba(0, 0, 0, 0.7)");

  return (
    <Text
      theme={defaultTheme}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      regular text
    </Text>
  );
});
