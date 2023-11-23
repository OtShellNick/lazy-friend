import React from 'react';

import { Aside } from '@blocks/Aside';
import { Footer } from '@blocks/Footer';
import { Header } from '@blocks/Header';
import { Main } from '@blocks/Main';

type TTemplateProps = {
  children: React.ReactNode;
  className?: string;
};

export const Template: React.FC<TTemplateProps> = ({ children, className = '' }) => {
  return (
    <div className='grid grid-rows-layout h-[100vh]'>
      <Header />
      <div className='grid grid-cols-layout h-full'>
        <Aside />
        <Main className={className}>{children}</Main>
      </div>
      <Footer />
    </div>
  );
};
