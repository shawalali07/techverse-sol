import React, { useState } from 'react';
import { Overlay } from 'react-bootstrap';

const SearchTags = ({ setFormValues, formValues }) => {
  const { tags } = formValues;
  const allTags = [
    'Javascript',
    'Python',
    '.NET',
    'C#',
    'C++',
    'Solidity',
    'PHP',
  ];

  const onFormChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div class='form-group'>
        <label
          style={{
            textAlign: 'left',
            marginLeft: '0.5rem',
            fontWeight: 'bold',
          }}
          className='d-block s-label mb-2 mt-1'
        >
          Tags
        </label>
        <small
          style={{
            textAlign: 'left',
            marginLeft: '0.5rem',
          }}
          className='d-block s-label form-text text-muted'
        >
          Add up to 5 tags to describe what your question is about
        </small>
        <input
          value={tags}
          name='tags'
          onChange={onFormChange}
          type='text'
          class='form-control'
          style={{ width: '48rem', marginLeft: '0.5rem' }}
        />
        {tags &&
          allTags
            .filter((val) => {
              if (tags === '') {
                return val;
              } else if (val.toLowerCase().includes(tags.toLowerCase())) {
                return val;
              }
            })
            .map((val) => (
              <div
                style={{
                  display: 'flex',
                  // backgroundColor: 'red',
                  width: '40rem',
                  marginLeft: '0.5rem',
                }}
              >
                {val}
              </div>
            ))}
      </div>
    </>
  );
};

export default SearchTags;
