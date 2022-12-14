import './message.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import shali from '../../assets/images/shali.jpg';
import { useDispatch } from 'react-redux';
import { setReplyModal } from '../../redux-toolkit/slices/modalSlice';
import { browserRoutes } from '../../routes/browserRoutes';
import { Link } from 'react-router-dom';
import { getTopDevs } from '../../redux-toolkit/actions/developers/developers';
const MessageModal = ({ show, setShow, msg }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(getTopDevs());
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
              <Link
                className='link'
                to={browserRoutes.DEVELOPERS + '/' + msg?.user?._id}
                state={{ data: msg?.user }}
              >
                <h1 className='senderTitle'>{msg?.user?.name}</h1>
              </Link>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='inboxText' placeholder='Send offer...' type='text'>
            {msg?.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className='replyBtnContainer'>
            <Button
              style={{
                backgroundColor: '#1976d2',
                padding: '5px',
                borderRadius: '5px',
                color: 'white',
              }}
              variant='contained'
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MessageModal;
