import React from "react";

import DatePicker from "../components/DatePicker";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("DatePicker", module);
stories.add("default", () => {
  return <DatePicker />;
});
