import React from "react";

import ArrowLeft from "../../../Icons/svg/ArrowLeftIcon";
import ArrowRight from "../../../Icons/svg/ArrowRightIcon";
import Button from "../../../Button";
import Text from "../../../Text";

import { MonthController, WeekDays, CalendarDays } from "./styled";

const monthLabelMap = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
];

const populateDays = (month, year) => {
  const maxDay = new Date(year, month + 1, 0).getDate();
  const monthDays = [];
  for (let i = 1; i <= maxDay; i++) {
    const weekIndex = new Date(year, month, i).getDay();
    monthDays.push({
      value: i,
      weekIndex,
      month,
      year
    });
  }
  return monthDays;
};

const populatePreviousDays = (month, year) => {
  const count = new Date(year, month, 1).getDay();
  const days = [];
  for (let i = 0; i < count; i++) days.push("");
  return days;
};

const StepOne = ({ theme, currentDate, selectedDate, setSelectedDate }) => {
  const weekDays = ["d", "s", "t", "q", "q", "s", "s"];
  const monthDays = populateDays(selectedDate.month, selectedDate.year);
  const previousDays = populatePreviousDays(
    selectedDate.month,
    selectedDate.year
  );
  return (
    <div>
      <MonthController>
        <Button
          width="38px"
          height="38px"
          padding="0"
          onPress={() => {
            if (selectedDate.month === 0) {
              const month = 11;
              const year = selectedDate.year - 1;
              const weekIndex = new Date(
                year,
                month,
                selectedDate.day
              ).getDay();
              setSelectedDate({
                ...selectedDate,
                month: month,
                weekIndex,
                year
              });
            } else {
              const weekIndex = new Date(
                selectedDate.year,
                selectedDate.month - 1,
                selectedDate.day
              ).getDay();
              setSelectedDate({
                ...selectedDate,
                month: selectedDate.month - 1,
                weekIndex
              });
            }
          }}
        >
          <ArrowLeft />
        </Button>
        <Text
          width="100%"
          justifyContent="center"
          fontFamily={theme.font.primary}
          fontWeight="600"
          fontSize="14px"
        >{`${monthLabelMap[selectedDate.month]} de ${selectedDate.year}`}</Text>
        <Button
          width="38px"
          height="38px"
          padding="0"
          onPress={() => {
            if (selectedDate.month === 11) {
              const month = 0;
              const year = selectedDate.year + 1;
              const weekIndex = new Date(
                year,
                month,
                selectedDate.day
              ).getDay();
              setSelectedDate({
                ...selectedDate,
                month: month,
                weekIndex,
                year
              });
            } else {
              const weekIndex = new Date(
                selectedDate.year,
                selectedDate.month + 1,
                selectedDate.day
              ).getDay();
              setSelectedDate({
                ...selectedDate,
                month: selectedDate.month + 1,
                weekIndex
              });
            }
          }}
        >
          <ArrowRight />
        </Button>
      </MonthController>
      <WeekDays>
        {weekDays.map((day, index) => (
          <Text
            fontFamily={theme.font.primary}
            fontSize="14px"
            fontWeight="600"
            color="rgba(0, 0, 0, 0.6)"
            width="100%"
            justifyContent="center"
            key={index}
          >
            {day}
          </Text>
        ))}
      </WeekDays>
      <CalendarDays>
        {previousDays.map((day, index) => (
          <Text key={index}>{day}</Text>
        ))}
        {monthDays.map((day, index) => (
          <Button
            width="38px"
            height="38px"
            borderRadius="38px"
            background={
              selectedDate.day === day.value ? theme.color.tertiary : "#fff"
            }
            key={index}
            onPress={() => {
              setSelectedDate({
                day: day.value,
                weekIndex: day.weekIndex,
                month: day.month,
                year: day.year
              });
            }}
          >
            <Text
              fontFamily={theme.font.primary}
              fontSize="13px"
              fontWeight="600"
              color={() => {
                if (selectedDate.day === day.value) return "#fff";
                if (currentDate.day === day.value) return theme.color.tertiary;
                return "rgba(0, 0, 0, 0.6)";
              }}
              width="38px"
              height="38px"
              borderRadius="38px"
              justifyContent="center"
              alignItems="center"
            >
              {day.value}
            </Text>
          </Button>
        ))}
      </CalendarDays>
    </div>
  );
};

export default StepOne;
