import React from "react";

import AppTabBar from "../components/AppTabBar";
import HomeIcon from "../components/Icons/svg/HomeIcon";
import StoreIcon from "../components/Icons/svg/StoreIcon";
import AccountIcon from "../components/Icons/svg/AccountIcon";
import ListRoundIcon from "../components/Icons/svg/ListRoundIcon";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("AppTabBar", module);
stories.add("default", () => {
  const items = [
    { label: "seguindo", icon: HomeIcon },
    { label: "categorias", icon: ListRoundIcon },
    { label: "shopping", icon: StoreIcon },
    { label: "minha conta", icon: AccountIcon }
  ];

  return (
    <AppTabBar
      items={items}
      onSelectItem={item => console.log("Selected item", item)}
    />
  );
});
