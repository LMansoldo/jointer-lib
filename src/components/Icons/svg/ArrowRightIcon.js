import React from "react";

const ArrowRightIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill={color}
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
      />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
};

export default ArrowRightIcon;
