'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathName = usePathname()
  const isActive=href===pathName
  //console.log(pathName);
  return <Link href={href} className={`${isActive? 'border-b-2 border-red-500 font-bold text-red-600 ':""}`}>{children}</Link>
};

export default NavLink;