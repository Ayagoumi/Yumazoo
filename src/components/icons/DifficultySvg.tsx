import React from 'react';

interface DifficultySvgProps {
  difficulty: 1 | 2 | 0;
}

const DifficultySvg: React.FC<DifficultySvgProps> = ({ difficulty }) => {
  let color;
  switch (difficulty) {
    case 0:
      color = '#6CF600';
      break;
    case 1:
      color = '#F63B00';
      break;
    case 2:
      color = '#FF003D';
      break;
    default:
      color = '#6CF600';
  }

  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12V0H12V5.5L5.5 12H0Z" fill={color} />
    </svg>
  );
};

export default DifficultySvg;
