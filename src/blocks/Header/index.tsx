import { Dropdown } from '@blocks/Dropdown';
import { ItemLogout } from '@blocks/ItemLogout';
import { UserAvatar } from '@blocks/UserAvatar';

export const Header = () => {
  return (
    <header className='flex items-center justify-between border-b px-8'>
      <div />
      <Dropdown label={'Profile'} menu={['Profile', 'Settings', <ItemLogout />]} className='left-4'>
        <UserAvatar />
      </Dropdown>
    </header>
  );
};
