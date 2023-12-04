'use client';

import { ExitIcon, PersonIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';
import { useEffect, useMemo } from 'react';

import { Dropdown } from '@blocks/Dropdown';
import { ProfileMenuItem } from '@blocks/ProfileMenuItem';
import { UserAvatar } from '@blocks/UserAvatar';
import { getUserData } from '@redux/selectors';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { getSelfThunk } from '@redux/User/thunks';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(getUserData);

  useEffect(() => {
    if (!user) dispatch(getSelfThunk());
  }, [dispatch, user]);
  const onLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  const PROFILE_MENU = useMemo(() => {
    return [
      {
        title: 'Профиль',
        icon: <PersonIcon />,
        onClick: () => {},
      },
      {
        title: 'Выход',
        icon: <ExitIcon />,
        onClick: onLogout,
      },
    ];
  }, []);

  const renderProfileMenu = useMemo(() => {
    return PROFILE_MENU.map(item => (
      <ProfileMenuItem
        key={item.title}
        title={item.title}
        icon={item.icon}
        onClick={item.onClick}
      />
    ));
  }, [PROFILE_MENU]);

  return (
    <Dropdown label={user?.name} menu={renderProfileMenu} className='left-4'>
      <UserAvatar />
    </Dropdown>
  );
};
