import React from 'react';

const LeftArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.41 17.09L10.83 12.5L15.41 7.91L14 6.5L8 12.5L14 18.5L15.41 17.09Z"
      fill={props.fill}
    />
  </svg>
);

export default LeftArrow;
