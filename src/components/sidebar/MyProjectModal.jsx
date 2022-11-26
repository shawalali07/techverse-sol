import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProject } from '../../redux-toolkit/actions/profile/profile';
const MyProjectModal = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Modal
      size='lg'
      centered
      scrollable
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          name='projectTitle'
          onChange={handleChange}
          placeholder='Project title...'
          className='projectTitle'
          type='text'
        />
        <textarea
          name='projectDescription'
          onChange={handleChange}
          placeholder={'Tell about your projects...'}
          className='projectText'
          type='text'
        ></textarea>
        <input
          name='projectLink'
          onChange={handleChange}
          placeholder='Enter your website link...'
          className='projectTitle'
          type='text'
        />
      </Modal.Body>
      <Modal.Footer>
        <div className='replyBtnContainer'>
          <Button onClick={() => setShow(false)} variant='contained'>
            Close
          </Button>
          <Button
            onClick={() => dispatch(addProject(formData))}
            color='secondary'
            variant='contained'
          >
            Submit
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyProjectModal;
