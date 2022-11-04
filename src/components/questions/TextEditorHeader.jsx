import React, { useState } from 'react';
import TextEditor from '../textEditor/TextEditor';
import './AskQuestion.css';
import SearchTagsCopy from './Tags';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../../redux-toolkit/actions/questions/question';
import { BtnLoading } from '../loader/BtnLoading';
import { Button } from '@mui/material';
import { postKnowledge } from '../../redux-toolkit/actions/knowledge/knowledge';
import { useNavigate } from 'react-router-dom';
const TextEditorHeader = (props) => {
  const navigate = useNavigate();
  const { tutorial } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    tags: [],
  });

  const { title, description, tags } = formValues;

  const onFormChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onHandleQuestion = () => {
    dispatch(askQuestion(formValues, setLoading, navigate));
  };

  const onHandleKnowledge = () => {
    dispatch(postKnowledge(formValues, setLoading, navigate));
  };

  return (
    <div className='textEditorHeader'>
      <div className='container'>
        <div
          className='card text-editor'
          style={{ width: '70rem', height: '30rem' }}
        >
          <div class='form-group'>
            <label
              style={{
                textAlign: 'left',
                marginLeft: '0.5rem',
                fontWeight: 'bold',
              }}
              className='d-block s-label mb-3 mt-2'
            >
              Title
            </label>
            <input
              name='title'
              value={title}
              onChange={onFormChange}
              type='text'
              class='form-control askTitle'
              style={{ width: '68rem', marginLeft: '0.5rem' }}
            />
            {title.length > 80 && (
              <span style={{ color: 'red', marginLeft: '10px' }}>
                Max 80 characters allowed
              </span>
            )}
          </div>
          <div class='form-group'>
            <label
              style={{
                textAlign: 'left',
                marginLeft: '0.5rem',
                fontWeight: 'bold',
              }}
              className='d-block s-label mt-3'
            >
              {!tutorial ? 'Description' : 'Example'}
            </label>
          </div>
          <div className='card-body'>
            <TextEditor setFormValues={setFormValues} formValues={formValues} />
          </div>
        </div>
        <div className='questionTagEditor'>
          <SearchTagsCopy
            tutorial={tutorial}
            onFormChange={onFormChange}
            setFormValues={setFormValues}
            formValues={formValues}
          />
        </div>
        <div className='textEditDiv'>
          <Button
            loading={true}
            variant='contained'
            onClick={!tutorial ? onHandleQuestion : onHandleKnowledge}
            className='mt-4 texteditorSubmit'
            disabled={
              loading |
              !title |
              (description === '<p></p>') |
              !description |
              (tags.length < 1) |
              (title.length > 80)
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextEditorHeader;
