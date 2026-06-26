import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa6';
const SocialConnectPage = () => {
  return (
    <div className="my-5 md:my-10">
      <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-5">
        Find Us On
      </h2>
      <div className="border-2  border-gray-200 rounded-xl divide-y divide-gray-200 max-w-sm">
        {/* Facebook Row */}
        <div className="flex items-center gap-3 p-4">
          <Link
            href="#"
            className="flex items-center justify-center bg-gray-100 h-12 w-12 rounded-full text-blue-600 hover:bg-gray-200 transition"
          >
            <FaFacebook className="h-6 md:h-8 w-6 md:w-8" />
          </Link>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Facebook
          </h2>
        </div>

        {/* LinkedIn Row */}
        <div className="flex items-center gap-4 p-4">
          <Link
            href="https://www.linkedin.com/in/rs-arafath/"
            className="flex items-center justify-center bg-gray-100 h-12 w-12 rounded-full text-blue-700 hover:bg-gray-200 transition"
          >
            <FaLinkedin className="h-6 md:h-8 w-6 md:w-8" />
          </Link>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            LinkedIn
          </h2>
        </div>

        {/* YouTube Row */}
        <div className="flex items-center gap-4 p-4">
          <Link
            href="https://www.youtube.com/@RSArafath"
            className="flex items-center justify-center bg-gray-100 h-12 w-12 rounded-full text-red-600 hover:bg-gray-200 transition"
          >
            <FaYoutube className="h-6 md:h-8 w-6 md:w-8" />
          </Link>
          <h2 className="text-lg md:text-xl font-medium text-gray-600">
            Youtube
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SocialConnectPage;