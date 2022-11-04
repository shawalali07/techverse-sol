import { api } from '../../../configurations/AxiosIntercenptor';
import { browserRoutes } from '../../../routes/browserRoutes';
import { authRoutes } from '../../../routes/serverRoutes';
import fail from '../../../utils/fail';
import success from '../../../utils/success';
import {
  failKnowledgeData,
  setKnowledge,
  startKnowledge,
} from '../../slices/knowledgeSlice';

export const postKnowledge = async (formData, setLoading, navigate) => {
  setLoading(true);
  try {
    const { data } = await api.post(authRoutes.KNOWLEDGE, formData);
    setLoading(false);
    success('Your post is submitted');
    navigate(browserRoutes.KNOWLEDGE);
  } catch (error) {
    setLoading(false);
    fail(error?.response?.data?.message || 'Something went wrong....');
  }
};

export const getKnowledge = (tag) => async (dispatch) => {
  dispatch(startKnowledge());

  try {
    const { data } = await api.get(
      `${authRoutes.KNOWLEDGE}?queryTag=${tag ? tag : ''}`
    );

    dispatch(setKnowledge(data));
  } catch (error) {
    dispatch(failKnowledgeData());
  }
};
