import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div
      className="flex justify-between items-center my-8 font-mystery-quest sticky top-0 left-0 py-1 w-full z-50 
bg-white/10   backdrop-blur-xl 
border-b border-white/10 
 
shadow-none"
    >
      <div>{/* //fake div */}</div>
      <div className=" ">
        <ul className="flex justify-center items-center gap-3 md:gap-5 text-gray-900">
          <li className="hover:text-red-600  md:text-xl font-semibold  duration-200">
            <NavLink href={'/'}>Home</NavLink>
          </li>
          <li className="hover:text-red-600 font-semibold  md:text-xl duration-200">
            <NavLink href={'/about-us'}>About</NavLink>
          </li>
          <li className="hover:text-red-600 font-semibold   md:text-xl duration-200">
            <NavLink href={'/career'}>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-1 sm:gap-2 px-2 justify-center items-center">
        <CgProfile className="text-3xl" />
        {/*  <Image src={userAvatar} width={40} alt="user_img"></Image> */}

        <button className="btn bg-black px-2  sm:px-5  text-white">
          <Link href={'/login'}>LogIn</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
