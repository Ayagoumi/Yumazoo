import React from 'react';
import Flag from 'react-world-flags';

type CountryFlagProps = {
  code: string;
};

export default function CountryFlag({ code }: CountryFlagProps) {
  return (
    <Flag
      code={code}
      style={{ borderRadius: '3px' }}
      fallback={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-xx"
          viewBox="0 0 640 480"
          style={{ borderRadius: '3px' }}
        >
          <path
            fill="#d3d3d3"
            fillRule="evenodd"
            stroke="#adb5bd"
            strokeWidth="1.1"
            d="M.5.5h638.9v478.9H.5z"
          />
          <path fill="none" stroke="#adb5bd" strokeWidth="25" d="m.5.5 639 479M639.5.5l-639 479" />
        </svg>
      }
    />
  );
}
