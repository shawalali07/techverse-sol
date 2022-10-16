import React, { useState } from 'react';
import TextEditor from '../textEditor/TextEditor';
import './AskQuestion.css';
import SearchTagsCopy from './Tags';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../../redux-toolkit/actions/questions/question';
import { BtnLoading } from '../loader/BtnLoading';
import { Button } from '@mui/material';
const TextEditorHeader = (props) => {
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
    dispatch(askQuestion(formValues, setLoading));
  };

  return (
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
            class='form-control'
            style={{ width: '68rem', marginLeft: '0.5rem' }}
          />
          {title.length > 40 && (
            <span
              className='mt-3'
              style={{ color: 'red', marginRight: '49vw' }}
            >
              Max 40 characters allowed
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

      <SearchTagsCopy
        onFormChange={onFormChange}
        setFormValues={setFormValues}
        formValues={formValues}
      />
      <div className='textEditDiv'>
        <Button
          variant='contained'
          startIcon={loading ? BtnLoading({ height: '2vh', width: '1vw' }) : ''}
          onClick={!tutorial ? onHandleQuestion : () => console.log('tutorial')}
          className='mt-4 texteditorSubmit'
          disabled={!title | !description | tags | (title.length > 40)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default TextEditorHeader;
