import React from "react";

const HomeIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};

export default HomeIcon;
