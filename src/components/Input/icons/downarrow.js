import React from "react";

const DownArrow = ({
  color,
  dropdownVisible,
  setDropdownVisible = () => {},
  setBackdropVisible = () => {}
}) => (
  <svg
    onClick={() => {
      setDropdownVisible(!dropdownVisible);
      setBackdropVisible(!dropdownVisible);
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill={color} d="M7 10l5 5 5-5z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export default DownArrow;
