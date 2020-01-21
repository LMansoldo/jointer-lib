import React from "react";

import Switch from "../components/Switch";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Switch", module);
stories.add("default", () => {
  return <Switch onCheck={value => console.log("First is", value)} />;
});
