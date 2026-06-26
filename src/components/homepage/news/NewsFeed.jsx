import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import { BiSolidBookmarkAltPlus } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';
import { IoStar } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

const NewsFeedPage = ({ news }) => {
  const {
    title,
    author: { img } = {},
    author: { name },
    author: { published_date },
    rating: { number },
    image_url,
    thumbnail_url,
    details,
    total_view,
  } = news;
  //console.log(news, 'news feed');
  return (
    <div className="my-5 rounded px-5">
      <div className="card bg-base-100 pb-10 w-full shadow-sm overflow-hidden">
        <div className="card-body p-0  md:space-y-3">
          {/* author */}
          <div className="flex items-center justify-between bg-gray-100 px-4 py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <Image
                src={img}
                alt={name}
                width={0}
                height={50}
                className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full object-cover"
              />

              <div>
                <h3 className="text-xs md:text-base font-semibold text-gray-700">
                  {name}
                </h3>

                <p className="text-[8px] md:text-xs text-gray-500">
                  {published_date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3 text-xs md:text-base lg:text-xl text-gray-500">
              <BiSolidBookmarkAltPlus className="cursor-pointer hover:text-black duration-200" />
              <FiShare2 className="cursor-pointer hover:text-black duration-200" />
            </div>
          </div>
          {/* title */}
          <div className="px-4 pt-3">
            <h2 className="card-title text-slate-800 text-base md:text-lg lg:text-xl font-bold">
              {title}
            </h2>
          </div>
          {/* image */}
          <figure className="px-4 pt-6 pb-4">
            <Image
              src={image_url}
              alt="thumbnail"
              width={600}
              height={100}
              className="w-full rounded-lg object-cover"
            />
          </figure>
          <div className="text-base md:text-lg lg:text-xl font-medium text-slate-700 px-4 pt-5 ">
            {' '}
            <p className="line-clamp-2 ">{details} </p>
            <span className="  ">
              <Link
                className="font-semibold text-amber-500 hover:text-amber-400 duration-100"
                href={`/news/${news._id}`}
              >
                Read More...
              </Link>
            </span>{' '}
            <div className="divider  "></div>
          </div>

          <div className="px-4 flex justify-between items-center  ">
            <div className="flex gap-1 justify-center items-center text-amber-500 font-bold text-xl sm:text-lg lg:text-xl">
              {' '}
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <span className="font-medium text-gray-500 text-base">
                {' '}
                {number}
              </span>
            </div>
            <div className='flex items-center justify-center text-lg gap-1 sm:gap-2 font-semibold text-gray-500'>
              <FaEye  className='font-bold text-xl'/>
              {total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedPage;
