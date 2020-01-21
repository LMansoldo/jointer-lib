import React from "react";

const ArrowDownIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path fill={color} d="M7 10l5 5 5-5z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};

export default ArrowDownIcon;
