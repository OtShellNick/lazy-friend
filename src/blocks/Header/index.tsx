import { HeaderMenu } from '@blocks/HeaderMenu';
import { Profile } from '@blocks/Profile';

export const Header = () => {
  return (
    <header className='flex items-center justify-between border-b px-2 md:px-12'>
      <HeaderMenu />
      <Profile />
    </header>
  );
};
