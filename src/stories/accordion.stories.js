import React from "react";

import Accordion from "../components/Accordion";

import theme from "../components/Themes";

import { storiesOf } from "@storybook/react";


import HeartEmptyIcon from "../components/Icons/svg/HeartEmptyIcon";

const stories = storiesOf("Accordion", module);

const itemData = [
  {
    name: "with options",
    trailingIcon: <HeartEmptyIcon color={theme.color.primary}/>,
    menuType: "MULTIPLE_OPTIONS",
    submenu: [
      {
        name: "option 1",
        onClickEvent: () => {console.log('aaaaaaa')}
      },
      {
        name: "option 2",
        onClickEvent: () => {console.log('aaaaaaa')}
      },
      {
        name: "option 3",
        onClickEvent: () => {console.log('aaaaaaa')}
      }        
    ]  
  },
  {
    name: "content",
    trailingIcon: <HeartEmptyIcon color={theme.color.primary} />,
    menuType: "WITH_CONTENT",
    onClickEvent: () => {},
    submenu: [],
    content: <div>AAAAAAAAAAAAAAAAAAAAA</div>
  },
  {
    name: "single option",
    trailingIcon: <HeartEmptyIcon color={theme.color.primary} />,
    menuType: "SINGLE_OPTION",
    onClickEvent: () => {console.log('click event')},
    submenu: [],
    content: ""
  }
    
];

stories.add("default", () => {
  return (
    <Accordion
       items={itemData}
    />
  );
});
