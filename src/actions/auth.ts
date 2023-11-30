import { TUserRegisterData } from '@/types';
import { apiService } from '@lib/apiService';

export const authApi = {
  register: async (user: TUserRegisterData) => {
    return apiService.post('/api/register', user);
  },
};
