'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user?.image);
  console.log(user);
  
  return (
    <div
      className="flex justify-between items-center my-8  sticky top-0 left-0 py-1 w-full z-50 
bg-white/10   backdrop-blur-xl 
border-b border-white/10 
 
shadow-none"
    >
      <div>{/* //fake div */}</div>
      <div className="font-mystery-quest ">
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
      {user ? (
        <div className="flex gap-1 sm:gap-2 px-2 justify-center items-center">
          {/* <CgProfile className="text-3xl" /> */}
          <h2 className="font-semibold font-poppins">{user?.name}</h2>
          <Image
            src={user?.image || userAvatar}
            width={30}
            height={30}
            alt="user_img"
            className="rounded-full object-cover w-10 h-10"
          ></Image>

          <button className="btn bg-red-600 hover:bg-red-700 px-2  sm:px-5  text-white">
            <Link href={'/login'}>LogOut</Link>
          </button>
        </div>
      ) : (
        <button className="btn bg-black px-2  sm:px-5  text-white font-sans">
          <Link href={'/login'}>LogOut</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
