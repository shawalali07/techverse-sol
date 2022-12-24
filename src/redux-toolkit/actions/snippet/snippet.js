import { authRoutes } from '../../../routes/serverRoutes';
import { api } from '../../../configurations/AxiosIntercenptor';
import {
  failSnippets,
  setSnippets,
  startSnippets,
} from '../../slices/snippetSlice';

export const getSnippets = () => async (dispatch) => {
  dispatch(startSnippets());
  try {
    const { data } = await api.get(authRoutes.SNIPPET);
    dispatch(setSnippets(data?.data));
  } catch (error) {
    dispatch(failSnippets());
  }
};
