import React from 'react';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0481 13.2266C11.0908 13.8225 9.9606 14.1667 8.75 14.1667C5.29822 14.1667 2.5 11.3684 2.5 7.91666C2.5 4.46488 5.29822 1.66666 8.75 1.66666C12.2018 1.66666 15 4.46488 15 7.91666C15 9.55474 14.3698 11.0456 13.3387 12.1601L18.0893 16.9107C18.4147 17.2362 18.4147 17.7638 18.0893 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L12.0481 13.2266ZM13.3333 7.91666C13.3333 10.448 11.2813 12.5 8.75 12.5C6.21869 12.5 4.16667 10.448 4.16667 7.91666C4.16667 5.38535 6.21869 3.33332 8.75 3.33332C11.2813 3.33332 13.3333 5.38535 13.3333 7.91666Z"
        fill="white"
      />
    </svg>
  );
};

export default SearchIcon;
