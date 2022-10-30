import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import {
  failTopDev,
  setTopDev,
  startTopDev,
} from '../../slices/developerSlice';

export const getTopDevs = () => async (dispatch) => {
  dispatch(startTopDev());
  try {
    const { data } = await api.get(authRoutes.TOP_DEVS);
    dispatch(setTopDev(data));
  } catch (error) {
    dispatch(failTopDev());
  }
};
