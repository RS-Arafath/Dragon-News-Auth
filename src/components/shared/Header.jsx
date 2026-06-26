import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format, compareAsc } from 'date-fns';
const Header = () => {
  return (
    <div className="my-3 md:my-5 mx-auto max-w-11/12 text-center">
      <Image
        className="mx-auto"
        src={logo}
        height={400}
        width={400}
        alt="logo"
      ></Image>
      <p className=" italic">Journalism Without Fear or Favour</p>
      <p className=" font-semibold text-gray-500">
        {format(new Date(), 'EEEE, MMMM dd yyyy')}{' '}
      </p>
    </div>
  );
};

export default Header;
