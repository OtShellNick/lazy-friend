import React from 'react';

import { Footer } from '@blocks/Footer';
import { Header } from '@blocks/Header';
import { Info } from '@blocks/Info';
import { Main } from '@blocks/Main';

type TTemplateProps = {
  children: React.ReactNode;
  className?: string;
};

export const Template: React.FC<TTemplateProps> = ({ children, className = '' }) => {
  return (
    <div className='grid grid-rows-layout h-[100vh]'>
      <Header />
      <div className='h-full'>
        {/*<Aside />*/}
        <Main className={`${className} flex flex-col`}>
          <Info
            className='mb-4'
            title='Сайт В Разработке'
            description='Мы рады, что вы заинтересовались нашим проектом. В настоящее время наш сайт находится на стадии активной разработки. Мы прилагаем все усилия, чтобы предоставить вам функциональный и удобный в использовании ресурс. Пожалуйста, оставайтесь с нами, и скоро вы увидите все улучшения. Благодарим за понимание!'
          />
          {children}
        </Main>
      </div>
      <Footer />
    </div>
  );
};
