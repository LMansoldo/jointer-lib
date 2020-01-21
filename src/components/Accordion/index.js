import React from "react";

import Text from "../Text";
import defaultTheme from "../Themes";

import {
  Wrapper,
  ItemMenu,
  ItemHighlight,
  ItemSubMenu,
  ContentWrapper
} from "./styled";

const Accordion = ({
  theme = defaultTheme,
  items = [],
  color = theme.color.primary,
  height,
  onClickEvent = () => {}
}) => {
  const [ selectedItem, setSelectedItem ] = React.useState(-1);
  const [ expanded, setExpanded ] = React.useState(false);

  const handleClickableSubmenu = (key, sub) => {
    setSelectedItem(key);
    sub.onClickEvent()
  }

  const handleAccordionOptions = (accordion, index) => {
    if(index === selectedItem){
      switch(accordion.menuType){
        case "SINGLE_OPTION":
         return renderSingleOption();
        case "MULTIPLE_OPTIONS":
         return renderOptions(accordion, index);
        case "WITH_CONTENT":
         return renderContent(accordion);
        default:
         return renderSingleOption();
      } 
    }else{
      return renderSingleOption()
    }
  }

  const renderSingleOption = () => {
    return <ItemSubMenu />
  }
  
  const renderOptions = (item, index) => {
    const key = selectedItem
      return (
        <ItemSubMenu expanded={expanded}>   
        {index !== selectedItem ? null :
          item.submenu.map((sub, index) => {
            return (
              <Text color={theme.color.tertiary} key={index} onPress={() => handleClickableSubmenu(key, sub)}>
                {sub.name}
              </Text>
            )  
          })
        }
        </ItemSubMenu>
      )   
  };

  const renderContent = (item) => {
    return (
    <ItemSubMenu expanded={expanded}>  
      <ContentWrapper>
       {item.content}
      </ContentWrapper>
    </ItemSubMenu>
    )
  }

  const handleOpenedMenu = (item, key) => {
    if(item.submenu.length <= 0 && !item.content) { 
      return item.onClickEvent()
    }

    if(selectedItem > -1 && selectedItem === key){
      setSelectedItem(-1)
      setExpanded(false)
    }else{
      setSelectedItem(key)
      setExpanded(true)
    }
  };

  return (
    <Wrapper>
      {items.map((item, index) => {
        const key = index; 
        return (
          <ItemMenu color={color} key={index}>  
            <ItemHighlight 
              color={color} 
              onClick={() => handleOpenedMenu(item, key)}
            >
              <Text color={color} key={index}>
                {item.name}
              </Text>
                {item.trailingIcon}
            </ItemHighlight>
              {handleAccordionOptions(item, key)}
          </ItemMenu>
        )
      })} 
    </Wrapper>
  );
};

export default Accordion;
