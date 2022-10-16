import React from 'react';
import TextEditorHeader from '../questions/TextEditorHeader';

const Tutorial = () => {
  return (
    <div className='tutorial'>
      <TextEditorHeader tutorial={true} />
    </div>
  );
};

export default Tutorial;
