'use client';

import { ExitIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';

export const ItemLogout = () => {
  const onLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <div onClick={onLogout} className='flex items-center justify-between w-full'>
      <span>Выход</span>
      <ExitIcon />
    </div>
  );
};
