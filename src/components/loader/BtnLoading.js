import React from 'react';

export const BtnLoading = (props) => {
  return (
    <i
      className='spinner-border text-light ml-3'
      style={{
        width: props.width,
        height: props.height,
      }}
      role='status'
    >
      <span class='sr-only'></span>
    </i>
  );
};
