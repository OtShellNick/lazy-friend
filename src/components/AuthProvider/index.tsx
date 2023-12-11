import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { SESSION_STATUS } from '@/data';
import { Preloader } from '@components/Preloader';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === SESSION_STATUS.UNAUTHENTICATED) {
      router.push('/login');
    }
  }, [status, router]);

  if (status === SESSION_STATUS.LOADING) {
    return <Preloader />;
  }
  return <>{children}</>;
};
