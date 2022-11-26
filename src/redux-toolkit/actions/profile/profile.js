import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import fail from '../../../utils/fail';
import success from '../../../utils/success';
import { setUpdatedProfile } from '../../slices/authSlice';
import { setResume } from '../../slices/developerSlice';

export const updateProfile = (formData, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await api.put(authRoutes.UPDATE_PROFILE, formData);
    dispatch(setUpdatedProfile(data?.data));
    success('Profile has been updated...');
    setLoading(false);
  } catch (err) {
    fail(err.response.data.message || 'Something went wrong...');
    setLoading(false);
  }
};

export const uploadFile = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post(`/upload`, formData);
  } catch (error) {}
};

export const addProject = (formData) => async (dispatch) => {
  try {
    const { data } = await api.put(authRoutes.PROJECT, formData);
    dispatch(setUpdatedProfile(data?.data));
  } catch (error) {}
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.get(authRoutes.USERS + '/' + id);
    dispatch(setResume(data));
  } catch (error) {}
};
