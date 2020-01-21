import React from "react";

import defaultTheme from "../Themes";
import HomeIcon from "../Icons/svg/HomeIcon";
import ListRoundIcon from "../Icons/svg/ListRoundIcon";
import StoreIcon from "../Icons/svg/StoreIcon";
import AccountIcon from "../Icons/svg/AccountIcon";

import { Wrapper, ItemWrapper, InnerWrapper } from "./styled";

const AppTabBar = ({ theme = defaultTheme, onSelectItem = () => {} }) => {
  const menuItems = [
    { label: "inicio", icon: HomeIcon },
    { label: "categorias", icon: ListRoundIcon },
    { label: "shoppings", icon: StoreIcon },
    { label: "minha conta", icon: AccountIcon }
  ];

  const renderIcon = icon => {
    if (!icon) return null;
    return React.createElement(
      icon,
      { size: "18", color: theme.color.tertiary },
      null
    );
  };



  const renderMenuItems = (menuItems = []) => {
    return menuItems.map((item, index) => {
      return (
        <ItemWrapper
          key={index}
          onClick={() => {
            onSelectItem(item);
          }}
        >
          <InnerWrapper>
            {renderIcon(item.icon)}
          </InnerWrapper>
        </ItemWrapper>
      );
    });
  };

  return <Wrapper>{renderMenuItems(menuItems)}</Wrapper>;
};

export default AppTabBar;
