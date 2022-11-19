import toast from 'react-hot-toast';
import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';

export const postQuote = (desc, id, close) => async (dispatch) => {
  try {
    const { data } = await api.post(authRoutes.QUOTE + '/' + id, {
      description: desc,
    });
    toast.success('Your Quote has been sent');
    close();
  } catch (error) {}
};
