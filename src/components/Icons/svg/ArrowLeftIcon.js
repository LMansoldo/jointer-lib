import React from "react";

const ArrowLeftIcon = ({ color, size = "24", onClick = () => {} }) => {
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
        d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
      />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
};

export default ArrowLeftIcon;
