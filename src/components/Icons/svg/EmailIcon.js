import React from "react";

const EmailIcon = ({
  color,
  size = "24",
  negative = false,
  onClick = () => {}
}) => {
  if (!negative)
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
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
        <path fill="none" d="M0 0h24v24H0z" />
      </svg>
    );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <mask id="email-icon-mask">
        <circle fill="white" cx="12" cy="12" r="12" />
        <path
          style={{ transform: "translateX(7.5%) translateY(7.5%) scale(0.85)" }}
          fill="black"
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
      </mask>
      <circle
        fill={color}
        cx="12"
        cy="12"
        r="12"
        mask="url(#email-icon-mask)"
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};

export default EmailIcon;
