import React from 'react';

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-50/50 absolute inset-0 z-50">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-600"></div>
    </div>
  );
};

export default loading;