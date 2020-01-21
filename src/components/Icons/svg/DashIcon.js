import React from "react";

const DashIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <rect x="13%" y="38%" width="75%" height="20%" fill={color} />
    </svg>
  );
};

export default DashIcon;
