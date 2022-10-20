import React from 'react';
import TextEditorHeader from '../questions/TextEditorHeader';

const Tutorial = () => {
  return (
    <div style={{ paddingTop: '90px' }} className='tutorial'>
      <TextEditorHeader tutorial={true} />
    </div>
  );
};

export default Tutorial;
