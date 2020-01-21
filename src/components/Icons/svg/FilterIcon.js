import React from "react";

const FilterIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlnx="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      onClick={onClick}
    >
      <path fill="none" d="M0,0 l24,0l0,24l-24,0,l0,-24z" />
      <path fill={color} d="M3,3 l18,0 l-7.5,9 l0,6 l-3,3 l0,-9z" />
    </svg>
  );
};

export default FilterIcon;
