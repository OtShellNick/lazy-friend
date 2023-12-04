import { TUserResponse } from '@/types';

export type TInitialState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  user: TUserResponse | null;
};

export const initialState: TInitialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  user: null,
};
