import React from 'react';

type TMainProps = {
  children: React.ReactNode;
  className?: string;
};
export const Main: React.FC<TMainProps> = ({ children, className = '' }) => {
  return <main className={`flex justify-center items-center p-2 ${className}`}>{children}</main>;
};
