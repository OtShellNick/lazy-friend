import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, TInitialState } from '@redux/Auth/state';
import { registerThunk } from '@redux/Auth/thunks';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setErrorMessage: (state: TInitialState, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state: TInitialState) => {
      state.errorMessage = null;
    },
  },
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
    builder.addCase(
      registerThunk.rejected,
      (state: TInitialState, action: PayloadAction<string | void>) => {
        if (action.payload) {
          state.errorMessage = action.payload;
        }
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      },
    );
  },
});

export const authReducer = authSlice.reducer;
export const { setErrorMessage, clearErrorMessage } = authSlice.actions;
