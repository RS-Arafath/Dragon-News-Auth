'use client'
import Link from 'next/link';
import React from 'react';

const underConstructionPage = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden relative bg-slate-50">
      <div className="w-full max-w-md md:max-w-3xl bg-white border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-200/50 px-6 md:px-12 py-8 md:py-10 text-center flex flex-col justify-center items-center max-h-[90vh] sm:max-h-none overflow-y-auto sm:overflow-visible">
        <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 mb-5 shadow-inner animate-bounce duration-1000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 21l8.982-8.983m-1.982-4.017L17 3l-8.982 8.983m0 0l3.966-3.966m-3.966 3.966L5 21"
            />
          </svg>
        </div>

        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider mb-3">
          Coming Soon
        </span>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Crafting Something Special
        </h1>

        <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mb-8">
          We are crafting a brand new experience for you! Premium updates on
          Education, Lifestyle, and Entertainment are coming very soon. Stay
          tuned!
        </p>

        <div className="w-full max-w-xs flex flex-col items-center gap-6">
          <div className="w-full text-left">
            <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-medium">
              <span>Progress</span>
              <span className="text-blue-600 font-semibold">85%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>

          <div className="w-full">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-600 rounded-xl shadow-md shadow-red-700/10 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-red-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-4 h-4 mr-2 transform transition-transform group-hover:-translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default underConstructionPage;