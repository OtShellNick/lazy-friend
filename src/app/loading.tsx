import { Suspense, ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Preloader } from '@components/Preloader';

const Loading = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn('relative')}>
      <Suspense fallback={<Preloader />}>{children}</Suspense>
    </div>
  );
};

export default Loading;
