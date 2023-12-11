import { Icons } from '@blocks/Icons';

export const Preloader = () => {
  return (
    <div className='flex items-center justify-center h-[100dvh] text-sm text-muted-foreground'>
      <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
      Loading...
    </div>
  );
};
