import React from "react";

import Tabs from "../components/Tabs";

import { storiesOf } from "@storybook/react";

const data = [
  {
    tabTitle: "Tab 1",
    tabSubtitle: "1",
    content: "AAAAAAA"
  },
  {
    tabTitle: "Tab 2",
    tabSubtitle: "2",
    content: "AAAAAAAAAAAA"
  },
  {
    tabTitle: "Tab 3",
    tabSubtitle: "3",
    content: "AAAA"
  }
];

const stories = storiesOf("Tabs", module);
stories.add("tabs", () => {
  return <Tabs tabsData={data} />;
});
