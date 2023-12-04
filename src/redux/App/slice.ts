import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { storage } from '@lib/storage';
import { initialState, TInitialState } from '@redux/App/state';

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowInfo: (state: TInitialState, action: PayloadAction<boolean>) => {
      state.showInfo = action.payload;
      storage.setShowInfo(action.payload);
    },
  },
});

export const appReducer = appSlice.reducer;
export const { setShowInfo } = appSlice.actions;
