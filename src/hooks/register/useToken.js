import { useSelector } from 'react-redux';

const useToken = () => {
  const token = useSelector((state) => state?.authSlice?.token);
  if (token) {
    return token;
  } else {
    return null;
  }
};
const useEmail = () => {
  const email = useSelector((state) => state?.authSlice?.email);
  if (email) {
    return email;
  } else {
    return null;
  }
};

const useFullName = () => {
  const fullName = useSelector((state) => state?.authSlice?.fullName);
  if (fullName) {
    return fullName;
  } else {
    return null;
  }
};

const useUserStatus = () => {
  const status = useSelector((state) => state?.authSlice?.status);
  if (status) {
    return status;
  } else {
    return null;
  }
};

export { useToken, useEmail, useFullName, useUserStatus };
