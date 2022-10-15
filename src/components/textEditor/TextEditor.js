import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const TextEditor = (props) => {
  const { setFormValues, formValues } = props;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const onChange = ({ blocks: [text] }) => {
    setFormValues({ ...formValues, description: text.text });
  };

  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        onEditorStateChange={onEditorStateChange}
        onChange={onChange}
      />
    </>
  );
};

export default TextEditor;
