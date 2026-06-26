import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import Career from './career/page';

const MainLayout = ({children}) => {
  return (
    <div className='container
     mx-auto'>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
     
{children}
    </div>
  );
};

export default MainLayout;