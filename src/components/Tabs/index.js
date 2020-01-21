import React from "react";

import defaultTheme from "../Themes";

import { Wrapper, Tab, ButtonWrapper, TabWrapper } from "./styled";

import Text from "../Text";

const Tabs = ({ tabsData, color = "#F91E96" }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const renderButtonTabs = () => {
    return (
      <ButtonWrapper>
        {tabsData.map((tab, index) => {
          if (index === activeTab) {
            return (
              <Tab
                key={index}
                color={color}
                onClick={() => setActiveTab(index)}
              >
                <Text justifyContent="center" fontSize="16px" color={color}>
                  {tab.tabTitle}
                </Text>
                <Text justifyContent="center" color={color}>
                  {tab.tabSubtitle}
                </Text>
              </Tab>
            );
          } else {
            return (
              <Tab
                key={index}
                color={defaultTheme.color.black}
                onClick={() => setActiveTab(index)}
              >
                <Text
                  justifyContent="center"
                  fontSize="16px"
                  color={defaultTheme.color.black}
                >
                  {tab.tabTitle}
                </Text>
                <Text justifyContent="center" color={defaultTheme.color.black}>
                  {tab.tabSubtitle}
                </Text>
              </Tab>
            );
          }
        })}
      </ButtonWrapper>
    );
  };

  const renderTabs = tabIndex => {
    return <TabWrapper>{tabsData[tabIndex].content}</TabWrapper>;
  };

  return (
    <Wrapper>
      {renderButtonTabs()}
      {renderTabs(activeTab)}
    </Wrapper>
  );
};

export default Tabs;
