import styled from "styled-components";

export const MonthController = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 38px 190px 38px;
  grid-template-rows: 38px;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;
  user-select: none;
`;

export const WeekDays = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 38px);
  grid-template-rows: 38px;
  user-select: none;
`;

export const CalendarDays = styled.div`
  width: 266px;
  height: 228px;
  display: grid;
  grid-template-columns: repeat(7, 38px);
  grid-template-rows: repeat(6, 38px);
  user-select: none;
`;
