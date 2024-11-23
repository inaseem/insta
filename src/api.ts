import { statusList } from './constants';
import { Status } from './types';

const api = {
  getStatusByUserId: (userId: string): Promise<Status> => {
    return new Promise((resolve, reject) => {
      const status = statusList.find((item) => item.id === userId);
      if (status) resolve(status);
      else reject(new Error('Status with the given userId not found'));
    });
  },
};

export default api;
