import { api } from '../../../configurations/AxiosIntercenptor';
import { authRoutes } from '../../../routes/serverRoutes';
import success from '../../../utils/success';
import fail from '../../../utils/fail';
import {
  failAnswersData,
  failMyAnswers,
  setAllAnswersData,
  setAnswersData,
  setCommentsData,
  setMyAnswers,
  startAnswersData,
  startMyAnswers,
} from '../../slices/answerSlice';

export const submitAnswer = (formData, subLoading) => async (dispatch) => {
  subLoading(true);
  try {
    const { data } = await api.post(authRoutes.SUBMIT_ANSWER, formData);
    success('Your answer is submitted');

    subLoading(false);
  } catch (error) {
    fail(error?.response?.data?.message);
    subLoading(false);
  }
};

export const getAnswersById = (id) => async (dispatch) => {
  dispatch(startAnswersData());
  try {
    const { data } = await api.get(`${authRoutes.GET_ANSWERS}/${id}`);
    dispatch(setAnswersData(data));
  } catch (error) {
    dispatch(failAnswersData());
  }
};

export const getAnswers = () => async (dispatch) => {
  try {
    const { data } = await api.get(authRoutes.GET_ANSWERS);
    dispatch(setAllAnswersData(data));
  } catch (error) {}
};

export const addComment =
  (formData, id, setComLoading, getAnswersById, idd) => async (dispatch) => {
    setComLoading(true);
    try {
      const { data } = await api.post(
        authRoutes.ADD_COMMENT + id + '/comment',
        formData
      );
      success('Comment Post Successfully');
      // dispatch(getAnswersById(idd.idd));
      setComLoading(false);
    } catch (error) {
      setComLoading(false);
      fail(error?.response?.data?.message);
    }
  };

export const getComments = (id) => async (dispatch) => {
  try {
    const { data } = await api.post(authRoutes.COMMENTS, id);
    dispatch(setCommentsData(data));
  } catch (error) {}
};

export const getMyAnswers = () => async (dispatch) => {
  dispatch(startMyAnswers());
  try {
    const { data } = await api.get(authRoutes.MY_ANSWERS);
    dispatch(setMyAnswers(data));
  } catch (error) {
    dispatch(failMyAnswers());
  }
};

export const addVote = (id, setVoteLoading) => async (dispatch) => {
  setVoteLoading(true);
  try {
    const { data } = await api.put(authRoutes.ADD_VOTE, id);
    success(data?.message);
    setVoteLoading(false);

    dispatch(setMyAnswers(data));
  } catch (error) {
    fail(error?.response?.data?.message);
    setVoteLoading(false);
  }
};
