import React from 'react'

const StarIcon = ({ color, size = '24', onClick = () => { } }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill={color} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>

  )
}

export default StarIcon
