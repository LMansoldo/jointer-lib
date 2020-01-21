import React from "react";

import defaultTheme from "../Themes";

import { Thumb, Track } from "./styled";

const Switch = ({ theme = defaultTheme, onClick = () => {} }) => {
  const [status, setStatus] = React.useState(false);

  return (
    <Thumb status={status} color={theme.color.tertiary}>
      <Track
        status={status}
        color={theme.color.tertiary}
        onClick={() => {
          onClick(!status);
          setStatus(!status);
        }}
      />
    </Thumb>
  );
};

export default Switch;
