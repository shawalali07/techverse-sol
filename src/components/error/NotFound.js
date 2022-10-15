import React from 'react';

const NotFound = (props) => {
  const { msg } = props;
  return (
    <div class='d-flex align-items-center justify-content-center vh-100 bg-white'>
      <h1 class='display-1 fw-bold text-danger'>{msg}</h1>
    </div>
  );
};

export default NotFound;
