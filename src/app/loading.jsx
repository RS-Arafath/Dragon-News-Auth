import React from 'react';
/* Main loader */
const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50/50 absolute inset-0 z-50">
     
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-500"></div>
    </div>
  );
};

export default loading;