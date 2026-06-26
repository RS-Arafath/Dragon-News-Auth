import React from 'react';
import education from '@/assets/education.jpg';
import lifeStyle from '@/assets/lifeStyle.jpg';
import enterTainment from '@/assets/enterTainment.jpg';
import underConstructionPage from '@/app/(main)/underConstraction/page';
import Link from 'next/link';
import Image from 'next/image';
export const metadata = {
  title: 'The Dragon News - Feature',
};
const DailyFeature = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl mt-10 font-bold text-gray-800 text-left">
          Daily Features
        </h2>
        <div className="flex flex-col gap-12 sm:gap-16 items-center my-10 bg-gray-100 min-h-screen px-6 sm:px-12 overflow-hidden">
          {/* 1. Education Card */}
          <Link
            href={'/underConstraction'}
            className="group relative w-full max-w-70 sm:max-w-[320px] aspect-3/4 cursor-pointer block transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-sm p-3 flex flex-col justify-between transform rotate-6 transition-all duration-300 ease-out group-hover:rotate-12 group-hover:translate-x-3 sm:group-hover:translate-x-6 group-hover:-translate-y-4">
              <div className="w-full h-[72%] relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                  alt="Education 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                  priority
                />
              </div>
              <div className="h-[8%] bg-gray-100 rounded animate-pulse w-2/3 mx-auto mt-2"></div>
            </div>

            {/* Back Card Left - Modified Hover Transforms */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-md p-3 flex flex-col justify-between transform -rotate-3 transition-all duration-300 ease-out group-hover:-rotate-8 group-hover:-translate-x-3 sm:group-hover:-translate-x-6 group-hover:-translate-y-2">
              <div className="w-full h-[72%] relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                  alt="Education 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <div className="h-[8%] bg-gray-100 rounded animate-pulse w-1/2 mx-auto mt-2"></div>
            </div>

            {/* Front Card */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 flex flex-col justify-between transition-all duration-300 ease-out group-hover:scale-[1.03]">
              <div className="w-full h-[75%] relative overflow-hidden rounded-xl">
                <Image
                  src={education}
                  alt="Education Main"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-gray-700 py-1 sm:py-2">
                Education
              </h3>
            </div>
          </Link>

          {/* 2. Lifestyle Card */}
          <Link
            href={'/underConstraction'}
            className="group relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] cursor-pointer block transition-all duration-300"
          >
            {/* Back Card Right */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-sm p-3 flex flex-col justify-between transform rotate-3 transition-all duration-300 ease-out group-hover:rotate-8 group-hover:translate-x-3 sm:group-hover:translate-x-5 group-hover:translate-y-2">
              <div className="w-full h-[72%] relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06"
                  alt="Lifestyle 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <div className="h-[8%] bg-gray-100 rounded animate-pulse w-2/3 mx-auto mt-2"></div>
            </div>

            {/* Back Card Left */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-md p-3 flex flex-col justify-between transform -rotate-4 transition-all duration-300 ease-out group-hover:-rotate-12 group-hover:-translate-x-3 sm:group-hover:-translate-x-5 group-hover:-translate-y-2">
              <div className="w-full h-[72%] relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                  alt="Lifestyle 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <div className="h-[8%] bg-gray-100 rounded animate-pulse w-1/2 mx-auto mt-2"></div>
            </div>

            {/* Front Card */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 flex flex-col justify-between transition-all duration-300 ease-out group-hover:scale-[1.03]">
              <div className="w-full h-[75%] relative overflow-hidden rounded-xl">
                <Image
                  src={lifeStyle}
                  alt="Lifestyle Main"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-gray-700 py-1 sm:py-2">
                Lifestyle
              </h3>
            </div>
          </Link>

          {/* 3. Entertainment Card */}
          <Link
            href={'/underConstraction'}
            className="group relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] cursor-pointer block transition-all duration-300"
          >
            {/* Back Card Right */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-sm p-3 flex flex-col justify-between transform rotate-6 transition-all duration-300 ease-out group-hover:rotate-12 group-hover:translate-x-3 sm:group-hover:translate-x-6 group-hover:-translate-y-4">
              <div className="w-full h-[72%] relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c"
                  alt="Entertainment 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <div className="h-[8%] bg-gray-100 rounded animate-pulse w-2/3 mx-auto mt-2"></div>
            </div>

            {/* Back Card Left */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-md p-3 flex flex-col justify-between transform -rotate-3 transition-all duration-300 ease-out group-hover:-rotate-8 group-hover:-translate-x-3 sm:group-hover:-translate-x-6 group-hover:-translate-y-2">
              <div className="w-full h-[72%] relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
                  alt="Entertainment 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <div className="h-[8%] bg-gray-100 rounded animate-pulse w-1/2 mx-auto mt-2"></div>
            </div>

            {/* Front Card */}
            <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 flex flex-col justify-between transition-all duration-300 ease-out group-hover:scale-[1.03]">
              <div className="w-full h-[75%] relative overflow-hidden rounded-xl">
                <Image
                  src={enterTainment}
                  alt="Entertainment Main"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 280px"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-gray-700 py-1 sm:py-2">
                Entertainment
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DailyFeature;