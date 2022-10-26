import React from 'react';
import TextEditorHeader from '../questions/TextEditorHeader';

const Tutorial = () => {
  return (
    <div
      style={{
        paddingTop: '90px',
        height: '100vh',
        backgroundColor: 'antiquewhite',
      }}
      className='tutorial'
    >
      <div className=''>
        <h1 className='headingWrite'>Sharing is Caring</h1>
      </div>
      <TextEditorHeader tutorial={true} />
    </div>
  );
};

export default Tutorial;
