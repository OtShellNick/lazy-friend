import { createSlice } from '@reduxjs/toolkit';

import { initialState, TInitialState } from '@redux/Auth/state';
import { registerThunk } from '@redux/Auth/thunks';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerThunk.pending, (state: TInitialState) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(registerThunk.fulfilled, (state: TInitialState) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(registerThunk.rejected, (state: TInitialState) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export const authReducer = authSlice.reducer;
export const {} = authSlice.actions;
