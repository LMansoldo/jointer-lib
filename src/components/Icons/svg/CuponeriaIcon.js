import React from "react";

const CuponeriaIcon = ({
  innerColor,
  outerColor,
  color,
  size = "24",
  onClick = () => {}
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <circle
        r="11"
        cx="12"
        cy="12"
        stroke={outerColor || color}
        stroke-dasharray="3.8"
        stroke-width="1.6"
        fill="none"
      />
      <path
        stroke={innerColor || color}
        stroke-linecap="round"
        stroke-width="2"
        d="M8,18 l8,-12"
      />
      <circle
        cx="9"
        cy="7.5"
        r="1.5"
        stroke={innerColor || color}
        stroke-width="1.5"
        fill="none"
      />
      <circle
        cx="15"
        cy="16.5"
        r="1.5"
        stroke={innerColor || color}
        stroke-width="1.5"
        fill="none"
      />
    </svg>
  );
};

export default CuponeriaIcon;
