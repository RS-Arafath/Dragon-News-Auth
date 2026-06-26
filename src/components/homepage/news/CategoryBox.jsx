import Link from 'next/link';
import React from 'react';

const CategoryBox = ({ categories, activeId }) => {
  return (
    <div>
      <div className="bg-gray-100 rounded p-5 overflow-x-hidden">
        <h2 className="text-lg sm:text-2xl text-black font-bold text-center bg-slate-200 p-3 rounded">
          All Categories
        </h2>
        <ul className="flex flex-col my-5 gap-3">
          {categories.map((category) => {
            return (
              <li
                key={category.category_id}
                className={`${activeId === category.category_id && 'border-red-500 border-2 text-black  '} group
        border border-gray-200
      
        rounded-2xl
        text-base sm:text-lg md:text-xl
        font-semibold
        text-center
        cursor-pointer
        transition-all duration-200

        hover:-translate-y-1
      
        hover:border-red-600
        hover:shadow-lg
        hover:shadow-red-500/20
        hover:text-red-600
        active:scale-90
active:translate-y-0`}
              >
                <Link
                  href={`/category/${category.category_id}`}
                  className="block p-2 sm:p-3"
                >
                  {category.category_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryBox;
