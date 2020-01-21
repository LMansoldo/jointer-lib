import React from "react";

import { Wrapper, YearRow } from "./styled";

const populateYears = (minYear, maxYear) => {
  const years = [];
  for (let i = minYear; i <= maxYear; i++) years.push(i);
  return years;
};

const StepTwo = ({ theme, selectedDate, setSelectedDate }) => {
  const scrollerDiv = React.useRef(null);
  const currentYear = React.useRef(null);
  const years = populateYears(1900, 2100);

  React.useEffect(() => {
    const offsetTop = currentYear.current.offsetTop;
    scrollerDiv.current.scrollBy(0, offsetTop - 240);
  }, []);
  return (
    <Wrapper ref={scrollerDiv}>
      {years.map((year, index) => (
        <YearRow
          fontFamily={theme.font.primary}
          selected={selectedDate.year === year}
          selectedColor={theme.color.tertiary}
          id={year}
          ref={selectedDate.year === year ? currentYear : null}
          key={index}
          onClick={() => {
            setSelectedDate({
              ...selectedDate,
              year
            });
          }}
        >
          {year}
        </YearRow>
      ))}
    </Wrapper>
  );
};

export default StepTwo;
