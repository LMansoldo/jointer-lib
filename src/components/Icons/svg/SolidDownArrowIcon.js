import React from "react";

const SolidDownArrowIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <mask id="arrow-mask">
        <circle cx="12" cy="12" r="11" fill="white" />
        <path
          fill="black"
          strokeWidth="0.5"
          d="M12,12 m0,-7 l3.5,0 l0,8 l3,0 l-6.5,7 l-6.5,-7 l3,0 l0,-8z"
        />
      </mask>

      <path fill="none" d="M0,0l24,0l0,24l-24,0z" />
      <circle cx="12" cy="12" r="11" fill={color} mask="url(#arrow-mask)" />
    </svg>
  );
};

export default SolidDownArrowIcon;
