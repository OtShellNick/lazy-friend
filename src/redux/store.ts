import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { appReducer } from '@redux/App/slice';
import { authReducer } from '@redux/Auth/slice';
import { projectReducer } from '@redux/Project/slice';
import { userReducer } from '@redux/User/slice';

const RootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  project: projectReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
        ignoredPaths: ['addFile.file'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
