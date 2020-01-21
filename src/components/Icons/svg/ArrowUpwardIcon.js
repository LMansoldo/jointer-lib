import React from "react";

const ArrowUpwardIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        onClick={onClick}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path fill={color} d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
  );
};

export default ArrowUpwardIcon;