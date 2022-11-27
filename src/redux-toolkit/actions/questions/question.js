import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import {
  failQuestionsData,
  failQuestionsId,
  failSpecificQuestionsData,
  setQuestionsData,
  setQuestionsId,
  setSpecificUserQuestions,
  startQuestionsData,
  startQuestionsId,
  startSpecificQuestions,
} from '../../slices/questionSlice';
import success from '../../../utils/success';
import { BASE_URL } from '../../../configurations/config';
import fail from '../../../utils/fail';
import { browserRoutes } from '../../../routes/browserRoutes';

const askQuestion = async (formData, setLoading, navigate) => {
  setLoading(true);
  try {
    const { data } = await api.post(authRoutes.ASK_QUESTION, formData);
    success('Your question is submitted');
    setLoading(false);
    navigate(browserRoutes.ALLQUESTIONS);
  } catch (error) {
    setLoading(false);
    fail(error?.response?.data?.message || 'Something went wrong....');
  }
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

const getQuestionsById = (id) => async (dispatch) => {
  dispatch(startQuestionsId());

  try {
    const { data } = await api.get(`${authRoutes.GET_QUESTIONS}/${id}`);
    dispatch(setQuestionsId(data));
  } catch (error) {
    dispatch(failQuestionsId());
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

export {
  askQuestion,
  getQuestions,
  getSpecificUserQuestions,
  getQuestionsById,
};
