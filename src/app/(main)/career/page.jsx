import Link from 'next/link';
import React from 'react';
export const metadata = {
  title: 'The Dragon News - career',
};
const Career = () => {
  return (
    <main className="  bg-slate-50 flex items-center justify-center px-4 mt-10">
      <div className="w-full my-10 sm:my-12 md:my-15 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
            <span className="text-2xl">💼</span>
          </div>

          <span className="mt-4 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-600">
            Careers at Dragon News
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Coming Soon
          </h1>

          <p className="mt-3 text-slate-600 leading-7">
            We're preparing exciting opportunities for journalists, editors,
            developers, designers, and creative storytellers. Career openings
            will be announced soon.
          </p>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-800">
              No Open Positions Available
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Thank you for your interest in Dragon News. Please check back
              later for future opportunities.
            </p>
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex items-center rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Career;