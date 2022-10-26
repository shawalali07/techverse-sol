import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';

export const getTopDevs = async () => {
  try {
    const { data } = await api.get(authRoutes.TOP_DEVS);
    console.log(data);
  } catch (error) {}
};
