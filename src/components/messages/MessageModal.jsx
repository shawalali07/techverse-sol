import './message.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import shali from '../../assets/images/shali.jpg';
import { useDispatch } from 'react-redux';
import { setReplyModal } from '../../redux-toolkit/slices/modalSlice';
const MessageModal = ({ show, setShow, msg }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal size='lg' centered scrollable show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className='modalTop'>
              {msg?.user?.image ? (
                <img className='senderImg' src={msg?.user?.image} />
              ) : (
                <div
                  style={{ backgroundColor: 'antiquewhite' }}
                  className='senderImg d-flex justify-content-center align-items-center'
                >
                  {msg?.user?.name?.slice(0, 2)}
                </div>
              )}
              <h1 className='senderTitle'>{msg?.user?.name}</h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='inboxText' placeholder='Send offer...' type='text'>
            {msg?.desc}
          </p>
          <Button
            onClick={() => {
              handleClose();
              dispatch(setReplyModal(true));
            }}
            style={{ borderRadius: '10px' }}
            size='small'
            variant='contained'
          >
            Reply
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <div className='replyBtnContainer'>
            <Button variant='contained' onClick={handleClose}>
              Close
            </Button>
            <Button variant='contained' color='secondary' onClick={handleClose}>
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MessageModal;
