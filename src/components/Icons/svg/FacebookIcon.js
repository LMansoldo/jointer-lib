import React from "react";

const FacebookIcon = ({ color, size = "24", onClick = () => {} }) => {
  return (
    <svg
      xmlnx="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <mask id="circle-mask">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <path
          fill="#000"
          d="M10,24 v-8.4h-3v-3.6h3v-3 s0,-4 4,-4 h3v3h-2 s-2,0 -2,2 v2h4 l-1,3.4 h-3v10"
        />
      </mask>
      <path fill="none" d="M0,0 h24v24h-24v-24" />
      <path fill={color} d="M0,0 h24v24h-24v-24" mask="url(#circle-mask)" />
    </svg>
  );
};

export default FacebookIcon;
