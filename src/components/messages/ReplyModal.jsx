import { Button } from '@mui/material';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setReplyModal } from '../../redux-toolkit/slices/modalSlice';

const ReplyModal = ({ replyModal }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setReplyModal(false));
  };
  return (
    <Modal size='lg' centered scrollable show={replyModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Write Reply</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='writeForm'>
          <div className='quoteTextfield'>
            <textarea
              name=''
              placeholder='Write...'
              className='writeInput writeText'
              type='text'
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => dispatch(setReplyModal(false))}
          variant='secondary'
        >
          Close
        </Button>
        <Button variant='primary'>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReplyModal;
