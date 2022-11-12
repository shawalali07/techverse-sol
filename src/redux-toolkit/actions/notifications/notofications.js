import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';

export const triggerNotification = () => async (dispatch) => {
  try {
    const { data } = await api.put(authRoutes.NOTIFICATION);
  } catch (error) {}
};
