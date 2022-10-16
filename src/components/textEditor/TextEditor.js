import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
const TextEditor = (props) => {
  const { setFormValues, formValues } = props;
  const [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    convertToHTML(editorState.getCurrentContent());

    setEditorState(editorState);
    convertContentToHTML();
  };
  const onChange = ({ blocks: [text] }) => {
    const texts = convertToHTML(editorState.getCurrentContent());
    console.log(texts);
    setFormValues({ ...formValues, description: texts });
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  return (
    <div className=''>
      <Editor
        editorState={editorState}
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
        onEditorStateChange={onEditorStateChange}
        onChange={onChange}
        // toolbar={{
        //   inline: { inDropdown: true },
        //   list: { inDropdown: true },
        //   textAlign: { inDropdown: true },
        //   link: { inDropdown: true },
        //   history: { inDropdown: true },
        // }}
      />
    </div>
  );
};

export default TextEditor;
