import { RootState } from '@redux/store';

export const getAppData = (state: RootState) => state.app;
export const getAuthData = (state: RootState) => state.auth;
export const getUserData = (state: RootState) => state.user;
export const getProjectData = (state: RootState) => state.project;
