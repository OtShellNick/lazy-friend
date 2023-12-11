import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TUserResponse } from '@/types';
import { initialState, TInitialState } from '@redux/User/state';
import { getSelfThunk } from '@redux/User/thunks';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSelfThunk.pending, (state: TInitialState) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(
      getSelfThunk.fulfilled,
      (state: TInitialState, action: PayloadAction<TUserResponse>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      },
    );
    builder.addCase(getSelfThunk.rejected, (state: TInitialState) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export const userReducer = userSlice.reducer;
// export const {} = userSlice.actions;
