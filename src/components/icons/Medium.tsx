import React from 'react';

const Medium: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.13937 3.08969C2.14875 2.9975 2.11344 2.90656 2.04469 2.84469L1.34469 2.00094V1.875H3.51906L5.19969 5.56094L6.67719 1.875H8.75V2.00094L8.15125 2.575C8.09969 2.61437 8.07406 2.67906 8.08469 2.74312V6.96125C8.07406 7.025 8.09969 7.08969 8.15125 7.12906L8.73594 7.70312V7.82906H5.79469V7.70312L6.40063 7.115C6.46 7.05562 6.46 7.03813 6.46 6.94719V3.53781L4.77594 7.81531H4.54844L2.5875 3.53781V6.40469C2.57125 6.525 2.61125 6.64656 2.69594 6.73344L3.48375 7.68906V7.81531H1.25V7.68906L2.03781 6.73344C2.12219 6.64625 2.15969 6.52406 2.13937 6.40469V3.08969Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default Medium;
