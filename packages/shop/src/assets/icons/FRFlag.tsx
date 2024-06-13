import React from 'react';

export const FRFlag = ({ width = '640px', height = '480px' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      width={width}
      height={height}
    >
      {/* Blue stripe */}
      <rect width="300" height="600" x="0" fill="#0055A4" />
      {/* White stripe */}
      <rect width="300" height="600" x="300" fill="#FFFFFF" />
      {/* Red stripe */}
      <rect width="300" height="600" x="600" fill="#EF4135" />
    </svg>
  );
};
