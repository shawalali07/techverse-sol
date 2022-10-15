import { store } from '../redux-toolkit';

const WithSidebar = (WrappedComponent) => {
  return () => {
    const token = store.getState().authSlice.token;
    return (
      <>
        {/* {token && <Profile />} */}
        <WrappedComponent />
      </>
    );
  };
};

export default WithSidebar;
