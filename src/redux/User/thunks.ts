import { createAsyncThunk } from '@reduxjs/toolkit';

import { userApi } from '@/actions/user';
import { TUserResponse } from '@/types';

export const getSelfThunk = createAsyncThunk<TUserResponse, void>(
  'user/getSelf',
  async (_, { rejectWithValue }) => {
    return userApi
      .getSelf()
      .then(response => {
        return response.data;
      })
      .catch(error => rejectWithValue(error));
  },
);
