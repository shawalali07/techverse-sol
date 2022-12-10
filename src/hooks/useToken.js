import { useSelector } from 'react-redux';

const useToken = () => {
  const token = useSelector((state) => state?.authSlice?.token);
  if (token) {
    return token;
  } else {
    return null;
  }
};

export { useToken };
