import { authApi } from '../../../configurations/AxiosIntercenptor';
import { setToken } from '../../slices/authSlice';
import { authRoutes } from '../../../routes/serverRoutes';
import { browserRoutes } from '../../../routes/browserRoutes';
import fail from '../../../utils/fail';
import success from '../../../utils/success';

const signup = (formValue, navigate, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await authApi.post(authRoutes.SIGNUP, formValue);
    setLoading(false);

    dispatch(setToken({ email: data?.data?.data?.email }));
    success('Account created');
    navigate(browserRoutes.SIGNIN);
  } catch (error) {
    setLoading(false);

    fail(error.response?.data?.message);
  }
};

export { signup };
