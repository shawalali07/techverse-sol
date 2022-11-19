import toast from 'react-hot-toast';
import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import {
  failIsFollow,
  failMyFollowing,
  setIsFollow,
  setMyFollowing,
  startIsFollow,
  startMyFollowing,
} from '../../slices/followSlice';

export const postFollow = (id, setLoading, isFollow) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await api.put(authRoutes.FOLLOW + '/' + id);
    toast.success('Followed');
    dispatch(isFollow(id));
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};

export const getMyFollowing = () => async (dispatch) => {
  dispatch(startMyFollowing());
  try {
    const { data } = await api.get(authRoutes.MYFOLLOWING);
    dispatch(setMyFollowing(data));
  } catch (error) {
    dispatch(failMyFollowing());
  }
};

export const isFollows = (id) => async (dispatch) => {
  dispatch(startIsFollow());
  try {
    const { data } = await api.get(authRoutes.ISFOLLOW + '/' + id);
    dispatch(setIsFollow(data));
  } catch (error) {
    dispatch(failIsFollow());
  }
};
