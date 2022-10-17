import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import fail from '../../../utils/fail';
import success from '../../../utils/success';
import { setKnowledge } from '../../slices/knowledgeSlice';

export const postKnowledge = async (formData, setLoading) => {
  setLoading(true);
  try {
    const { data } = await api.post(authRoutes.KNOWLEDGE, formData);
    setLoading(false);
    success('Your post is submitted');
  } catch (error) {
    setLoading(false);
    fail(error?.response?.data?.message || 'Something went wrong....');
  }
};

export const getKnowledge = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await api.get(authRoutes.KNOWLEDGE);
    setLoading(false);

    dispatch(setKnowledge(data));
  } catch (error) {
    setLoading(false);
  }
};
