import { useSelector } from 'react-redux';

const useLoading = () => {
  const loading = useSelector((state) => state.loading?.loading);
  return loading;
};

export default useLoading;
