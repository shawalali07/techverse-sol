import React from 'react';
import { useDispatch } from 'react-redux';
import { getLanguages } from '../../redux-toolkit/actions/language/language';
import TextEditorHeader from './TextEditorHeader';
import { useEffect } from 'react';

const AskQuestion = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div
      style={{
        paddingTop: '90px',
        backgroundColor: '#909090',
        height: '100vh',
      }}
    >
      <TextEditorHeader />
    </div>
  );
};

export default AskQuestion;
