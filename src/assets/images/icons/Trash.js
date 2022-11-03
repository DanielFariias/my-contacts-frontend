import React from 'react';

export function Trash() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none">
      <path
        stroke="#FC5050"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h18"
        opacity="0.6"
      />
      <path
        fill="#FC5050"
        fillRule="evenodd"
        d="M7.293 2.293A1 1 0 018 2h4a1 1 0 011 1v1h2V3a3 3 0 00-3-3H8a3 3 0 00-3 3v1h2V3a1 1 0 01.293-.707zM18 6h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2v13a3 3 0 003 3h10a3 3 0 003-3V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
