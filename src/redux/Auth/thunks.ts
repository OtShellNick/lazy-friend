import { createAsyncThunk } from '@reduxjs/toolkit';

import { authApi } from '@/actions/auth';
import { TUserRegisterData } from '@/types';

export const registerThunk = createAsyncThunk<void, TUserRegisterData>(
  'auth/register',
  async (user, { rejectWithValue }) => {
    return authApi
      .register(user)
      .then(response => {
        console.log(response);
      })
      .catch(error => rejectWithValue(error));
  },
);
