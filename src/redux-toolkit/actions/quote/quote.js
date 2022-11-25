import toast from 'react-hot-toast';
import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';

export const postQuote = (desc, id, close, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await api.post(authRoutes.QUOTE + '/' + id, {
      description: desc,
    });
    toast.success('Your Quote has been sent');
    close();
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};
