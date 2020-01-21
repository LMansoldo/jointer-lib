import React from "react";

const ExternalLinkIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        viewBox="0 0 24 24"
        onClick={onClick}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill={color} d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
    </svg>
  );
};

export default ExternalLinkIcon;
