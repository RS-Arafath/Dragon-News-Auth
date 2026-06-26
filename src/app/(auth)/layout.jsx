import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { inter } from '../layout';

const AuthLayoutPage = ({children}) => {
  return (
    <div className={`${inter.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayoutPage;