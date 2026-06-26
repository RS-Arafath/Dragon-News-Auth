import React from 'react';
import { HiOutlineDocumentSearch } from 'react-icons/hi';

const NoNewsCard = () => {
  return (
    <div className="flex items-center justify-center min-h-[350px] md:min-h-[450px] w-full p-4 md:p-8">
      <div className="w-full md:max-w-md bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 text-center ">
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-50 text-red-400 mb-4 md:mb-5 animate-pulse">
          <HiOutlineDocumentSearch className="w-7 h-7 md:w-8 md:h-8" />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 tracking-tight">
          No News Found
        </h3>

        <p className="text-xs md:text-sm text-gray-500 mb-5 md:mb-6 leading-relaxed max-w-xs mx-auto">
          We couldn't find any articles in this category right now. Please try
          exploring another category from the sidebar.
        </p>

        <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gray-50 rounded-lg text-[11px] md:text-xs font-medium text-gray-600 border border-gray-100 max-w-full">
          💡 Try selecting{' '}
          <span className="font-semibold text-gray-800">"Another Categories"</span>
        </div>
      </div>
    </div>
  );
};

export default NoNewsCard;
