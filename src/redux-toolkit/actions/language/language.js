import toast from 'react-hot-toast';
import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import { setTags } from '../../slices/languageSlice';

export const getLanguages = () => async (dispatch) => {
  try {
    const { data } = await api.get(authRoutes.LANGUAGE);
    dispatch(setTags(data));
  } catch (error) {
    console.log(error);
  }
};
