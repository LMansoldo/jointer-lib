import React from "react";

import defaultTheme from "../Themes";
import StepOne from "./steps/01/component";
import StepTwo from "./steps/02/component";

import Button from "../Button";
import Text from "../Text";

import { Wrapper, Header, Body, Bottom, ButtonWrapper } from "./styled";

const stepMap = [StepOne, StepTwo];

const weekLabelMap = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

const monthLabelMap = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez"
];

const getDate = (year = null, month = null, day = null) => {
  const currentYear = year || new Date().getFullYear();
  const currentMonth = month || new Date().getMonth();
  const currentDay = day || new Date().getDate();
  const weekIndex = new Date(currentYear, currentMonth, currentDay).getDay();
  return {
    day: currentDay,
    weekIndex,
    month: currentMonth,
    year: currentYear
  };
};

const DatePicker = ({
  theme = defaultTheme,
  onConfirm = () => {},
  onCancel = () => {}
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [currentDate] = React.useState(getDate());
  const [selectedDate, setSelectedDate] = React.useState(getDate());

  return (
    <Wrapper>
      <Header>
        <Button
          width="40px"
          height="14px"
          flex="unset"
          padding="0"
          margin="0 0 10px 0"
          justifyContent="flex-start"
          onPress={() => {
            setCurrentStep(currentStep === 0 ? 1 : 0);
          }}
        >
          <Text
            fontFamily={theme.font.primary}
            fontSize="14px"
            fontWeight="600"
            color="rgba(0, 0, 0, 0.6)"
          >{`${selectedDate.year}`}</Text>
        </Button>
        <Text
          fontFamily={theme.font.primary}
          fontSize="32px"
          fontWeight="600"
          color="rgba(0, 0, 0, 0.8)"
        >{`${weekLabelMap[selectedDate.weekIndex]}, ${selectedDate.day} de ${
          monthLabelMap[selectedDate.month]
        }`}</Text>
      </Header>
      <Body>
        {React.createElement(stepMap[currentStep], {
          theme,
          currentDate,
          selectedDate,
          setSelectedDate
        })}
      </Body>
      <Bottom>
        <ButtonWrapper>
          <Button
            width="70px"
            padding="0"
            flex="unset"
            onPress={() => onCancel(selectedDate)}
          >
            <Text
              fontFamily={theme.font.primary}
              fontSize="16px"
              fontWeight="600"
              color={theme.color.tertiary}
            >
              cancelar
            </Text>
          </Button>
          <Button
            width="20px"
            padding="0"
            flex="unset"
            margin="0 10px 0 48px"
            onPress={() => onConfirm(selectedDate)}
          >
            <Text
              fontFamily={theme.font.primary}
              fontSize="16px"
              fontWeight="600"
              color={theme.color.tertiary}
            >
              ok
            </Text>
          </Button>
        </ButtonWrapper>
      </Bottom>
    </Wrapper>
  );
};

export default DatePicker;
