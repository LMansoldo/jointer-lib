import React from "react";

const QrcodeIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      onClick={onClick}
    >
      <path fill="none" d="M0,0 l24,0l0,24l-24,0l0,-24" />
      <path
        fill={color}
        d="M3,3 l6,0l0,6l-6,0l0,-6 M11,3 l2,0l0,6l-2,0l0,-6 M15,3 l6,0l0,6l-6,0l0,-6 M3,11 l10,0l0,8l8,0l0,2l-10,0l0,-8l-8,0l0,-2 M3,15 l6,0l0,6l-6,0l0,-4l2,0l0,2l2,0l0,-2l-4,0l0,-2 M15,11 l6,0l0,6l-2,0l0,-4l-2,0l0,4l-2,0l0,-6"
      />
    </svg>
  );
};

export default QrcodeIcon;
