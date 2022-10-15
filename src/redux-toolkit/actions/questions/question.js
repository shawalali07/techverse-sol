import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import {
  failQuestionsData,
  failSpecificQuestionsData,
  setQuestionsData,
  setSpecificUserQuestions,
  startQuestionsData,
  startSpecificQuestions,
} from '../../slices/questionSlice';
import success from '../../../utils/success';
import { BASE_URL } from '../../../configurations/config';
import fail from '../../../utils/fail';

const askQuestion = async (formData, setLoading) => {
  setLoading(true);
  try {
    const { data } = await api.post(authRoutes.ASK_QUESTION, formData);
    success('Your question is submitted');
    setLoading(false);
  } catch (error) {
    setLoading(false);
    fail(error?.response?.data?.message || 'Something went wrong....');
  }
};

const uploadFile = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post(`${BASE_URL}/upload`, formData);
  } catch (error) {}
};

const getQuestions = () => async (dispatch) => {
  dispatch(startQuestionsData());

  try {
    const { data } = await api.get(authRoutes.GET_QUESTIONS);
    dispatch(setQuestionsData(data));
  } catch (error) {
    dispatch(failQuestionsData());
  }
};

const getSpecificUserQuestions = () => async (dispatch) => {
  dispatch(startSpecificQuestions());
  try {
    const { data } = await api.get(authRoutes.MY_QUESTIONS);
    dispatch(setSpecificUserQuestions(data));
  } catch (error) {
    dispatch(failSpecificQuestionsData());
  }
};

export { askQuestion, getQuestions, getSpecificUserQuestions };
