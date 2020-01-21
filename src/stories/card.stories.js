import React from "react";

import Card from "../components/Card";

import theme from "../components/Themes";

import { storiesOf } from "@storybook/react";


import HeartEmptyIcon from "../components/Icons/svg/HeartEmptyIcon";

const stories = storiesOf("Card", module);

stories.add("default", () => {
  return (
    <Card
      
    />
  );
});
