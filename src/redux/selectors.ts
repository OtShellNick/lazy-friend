import { RootState } from '@redux/store';

export const getAppData = (state: RootState) => state.app;
export const getUserData = (state: RootState) => state.user;
