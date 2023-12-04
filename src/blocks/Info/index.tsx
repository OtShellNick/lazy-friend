'use client';

import { RocketIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';

import { storage } from '@lib/storage';
import { setShowInfo } from '@redux/App/slice';
import { getAppData } from '@redux/selectors';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { Alert, AlertDescription, AlertTitle } from '@ui/alert';

type TInfoProps = {
  className?: string;
  title?: string;
  description?: string;
};
export const Info = ({ className = '', title, description }: TInfoProps) => {
  const dispatch = useAppDispatch();
  const { showInfo } = useAppSelector(getAppData);

  const handleClose = () => {
    dispatch(setShowInfo(false));
  };

  useEffect(() => {
    dispatch(setShowInfo(storage.getShowInfo()));
  }, [dispatch]);

  if (!showInfo) return null;
  return (
    <Alert className={className} handleClose={handleClose}>
      <RocketIcon className='h-4 w-4' />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
