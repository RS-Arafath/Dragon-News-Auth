
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import footer_Logo from "@/assets/logo.png"
export default function FooterPage() {
  return (
    <footer className="bg-gray-100 text-gray-600 font-sans border-t border-gray-200 ">
      {/* Main Footer Container using Responsive Grid Columns */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 ">
        {/* Column 1: Brand Logo, Info & Social Links */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-block">
            <Image
              src={footer_Logo}
              alt="footer_logo"
              className="font-mystery-quest text-2xl md:text-3xl cursor-pointer text-gray-900 tracking-wider object-contain"
              priority
            />
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed text-justify">
            Your most reliable source for breaking news. We are committed to
            delivering accurate updates on politics, international affairs,
            sports, technology, and entertainment ahead of the curve.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <Link
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors duration-300 shadow-xs"
            >
              <FaFacebook size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rs-arafath/"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors duration-300 shadow-xs"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-colors duration-300 shadow-xs"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://www.youtube.com/@RSArafath"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors duration-300 shadow-xs"
            >
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>

        {/* Column 2: News Categories Links - Larger on lg devices */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base mb-4 tracking-wide uppercase border-b border-gray-200 pb-2">
            Categories
          </h3>
          <ul className="space-y-2.5 text-sm lg:text-base">
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                National
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                International
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                Tech & Science
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                Entertainment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Important Quick Links - Larger on lg devices */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base mb-4 tracking-wide uppercase border-b border-gray-200 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm lg:text-base">
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                Advertise With Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition-all duration-200 inline-block"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription Form */}
        <div>
          <h3 className="text-gray-900 font-semibold text-base mb-4 tracking-wide uppercase border-b border-gray-200 pb-2">
            Newsletter
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Subscribe to our daily newsletter to receive the latest updates
            right in your inbox.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-red-500 transition-colors shadow-xs placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-gray-100/50 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Dragon News. All rights reserved.</p>
          <p>Developed by ❤️ RS Arafath</p>
        </div>
      </div>
    </footer>
  );
}
