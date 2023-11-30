'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { Provider } from 'react-redux';

import { AuthProvider } from '@components/AuthProvider';
import { store } from '@redux/store';

type TProviderProps = {
  children: React.ReactNode;
  session: Session | null;
};

export const Providers: React.FC<TProviderProps> = ({ children, session }) => {
  return (
    <SessionProvider
      session={session}
      refetchOnWindowFocus
      refetchWhenOffline={false}
      refetchInterval={60}>
      <AuthProvider>
        <Provider store={store}>{children}</Provider>
      </AuthProvider>
    </SessionProvider>
  );
};
