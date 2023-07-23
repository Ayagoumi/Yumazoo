import React from 'react';

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={props.width || '20px'}
      height={props.height || '20px'}
      viewBox="0 0 20 20"
      fill={props.fill || 'white'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9642 7.74408C15.2896 8.06951 15.2896 8.59715 14.9642 8.92259L10.3808 13.5059C10.0554 13.8314 9.52777 13.8314 9.20233 13.5059L4.619 8.92259C4.29356 8.59715 4.29356 8.06951 4.619 7.74408C4.94443 7.41864 5.47207 7.41864 5.79751 7.74408L9.79159 11.7382L13.7857 7.74408C14.1111 7.41864 14.6387 7.41864 14.9642 7.74408Z"
        fill="white"
      />
    </svg>
  );
};

export default ChevronDown;
