import React from "react";

const LastPageIcon = ({ color, size = "24", onClick = () => {} }) => {
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
        d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
      />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
  );
};

export default LastPageIcon;
