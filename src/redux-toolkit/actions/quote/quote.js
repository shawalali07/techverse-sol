import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';

export const postQuote = (desc, id) => async (dispatch) => {
  try {
    const { data } = await api.post(authRoutes.QUOTE + '/' + id, {
      description: desc,
    });
  } catch (error) {}
};
