import { Skeleton } from '@mui/material';
import React from 'react';

const SkeletonAllQ = () => {
  return (
    <>
      <div className='d-flex flex-row align-items-center justify-content-between'>
        <h1 className='display-6 all-questions-heading fw-bold'></h1>
      </div>

      <span className='d-flex'>
        <span style={{ marginRight: '5px', marginTop: '2px' }}></span>
      </span>
      <div className='questionsComponent'>
        <Skeleton animation='wave' width={1200} height={200} />
        <Skeleton width={1200} height={200} />
        <Skeleton width={1200} height={200} />

        <div
          className='questionContainerbg'
          style={{ marginTop: '40px' }}
        ></div>
      </div>
    </>
  );
};

export default SkeletonAllQ;
