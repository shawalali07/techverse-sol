import { authApi } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import { browserRoutes } from '../../../routes/browserRoutes';
import { setToken } from '../../slices/authSlice';
import success from '../../../utils/success';
import fail from '../../../utils/fail';
import { destroyToken } from '../../slices/authSlice';
import { getQuestions, getSpecificUserQuestions } from '../questions/question';
import { getKnowledge } from '../knowledge/knowledge';

const signin = (formValue, navigate, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await authApi.post(authRoutes.SIGNIN, formValue);
    dispatch(
      setToken({
        token: data?.token,
        email: data?.email,
        fullName: data?.name,
        profilePic: data?.image,
      })
    );
    setLoading(false);
    success('Logged in successfully');
    dispatch(getQuestions());
    dispatch(getKnowledge(setLoading));
    dispatch(getSpecificUserQuestions());
    navigate(browserRoutes.ASK_QUESTIONS);
  } catch (error) {
    console.log(error);
    setLoading(false);
    fail(error.response?.data?.message);
  }
};

const signout = (navigate) => async (dispatch) => {
  try {
    dispatch(destroyToken());
    setTimeout(() => {
      navigate(browserRoutes.SIGNIN);
    }, 0);
    success('Logged Out Successfully');
  } catch (error) {}
};

export { signin, signout };
