import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './quoteModal.css';
export default function QuoteModal({ show, handleClose }) {
  return (
    <>
      <Modal size='lg' centered scrollable show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='writeForm'>
            <div className='quoteTextfield'>
              <textarea
                name=''
                placeholder='Send offer...'
                className='writeInput writeText'
                type='text'
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
