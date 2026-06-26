import Link from 'next/link';
import { Home, Newspaper } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Logo */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border shadow-sm mb-8">
          <Newspaper className="w-7 h-7 text-red-600" />
          <span className="font-bold text-slate-800"><Image src={logo} height={30} width={'auto'} alt='logo'></Image></span>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-slate-300">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-600 text-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-8"></div>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-red-700 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-slate-500">
          Dragon News • Trusted News, Anytime
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
