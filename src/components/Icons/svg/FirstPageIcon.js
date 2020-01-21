import React from "react";

const FirstPageIcon = ({ color, size = "24", onClick = () => {} }) => {
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
        d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
      />
      <path fill="none" d="M24 24H0V0h24v24z" />
    </svg>
  );
};

export default FirstPageIcon;
