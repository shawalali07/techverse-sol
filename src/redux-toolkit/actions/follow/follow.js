import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';

export const postFollow = (id) => async (dispatch) => {
  try {
    const { data } = await api.put(authRoutes.FOLLOW + '/' + id);
  } catch (error) {}
};
