import { TUserResponse } from '@/types';
import { apiService } from '@lib/apiService';

export const userApi = {
  getSelf: () => {
    return apiService.get<TUserResponse>('/api/user');
  },
};
