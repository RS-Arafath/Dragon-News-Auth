import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { format, compareAsc } from 'date-fns';
export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  // console.log(id,'iddddddd');
  const news = await getNewsDetailsById(id);
  return {
    title: news.title,
    description:news.details
  }
}
const newsDetailsPage =async ({ params }) => {
  const {id} = await params;
  //console.log(id,'params res');
  const news = await getNewsDetailsById(id);
  //console.log(news, 'details');
  
  const {
    title,
    image_url,
    details,
    author: { published_date },
  } = news;
  return (
    <div className="container max-w-4xl mx-auto my-8 p-4 md:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
      <div className="relative w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden mb-6">
        <Image
          src={image_url}
          alt="thumble"
          fill
          priority
          className="object-cover hover:scale-103 cursor-pointer transition-transform duration-500"
        />
      </div>

      <div className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed mb-4">
        {published_date}
      </div>

      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight mb-4 font-sans">
        {title}
      </h1>

      <div className="text-sm md:text-base text-gray-500 font-sans leading-relaxed space-y-4 mb-6 text-justify">
        <p>{details}</p>
      </div>

      <div className="flex justify-start">
        <Link
          href={`/category/${news.category_id}`}
          className="btn bg-red-600 hover:bg-red-700 text-white border-none rounded-lg px-6 flex items-center gap-2 normal-case font-medium transition-colors"
        >
          <FaArrowLeft className="text-sm" />
          See other news for this category
        </Link>
      </div>
    </div>
  );
};

export default newsDetailsPage;