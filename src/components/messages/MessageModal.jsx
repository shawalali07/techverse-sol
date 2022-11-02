import './message.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import shali from '../../assets/images/shali.jpg';
import { useDispatch } from 'react-redux';
import { setReplyModal } from '../../redux-toolkit/slices/modalSlice';
const MessageModal = ({ show, setShow }) => {
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
              <img className='senderImg' src={shali} />
              <h1 className='senderTitle'>Shawal Ali</h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='inboxText' placeholder='Send offer...' type='text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde earum
            quo necessitatibus fugit impedit quas voluptatum ad doloremque!
            Natus, ducimus! Perspiciatis accusantium possimus corporis
            recusandae laudantium enim, nobis rem neque. Iusto beatae cumque
            voluptatem maxime et ab laboriosam voluptates suscipit doloremque
            excepturi quae perferendis ratione corporis molestiae similique ipsa
            neque exercitationem, illo, praesentium ipsum velit repudiandae quia
            perspiciatis. Laudantium iure placeat quod ullam ipsum, vel deserunt
            officia consequuntur voluptatibus rem nemo! Illo quae sunt, non
            maxime iure neque quos nostrum omnis nisi facere similique itaque
            commodi laudantium eaque corrupti reprehenderit. Animi beatae
            exercitationem fuga dignissimos, quis molestias, veniam nulla at
            mollitia dolor tempora perferendis consequatur quam! Perspiciatis
            suscipit a unde nihil cupiditate aliquam voluptatibus, id distinctio
            deleniti culpa, illum dolore, voluptatum beatae ratione minima
            reprehenderit alias doloribus quos. Accusantium, quaerat
            exercitationem odit quia itaque, quas minima id amet corporis quidem
            dolores molestiae iure repellendus, ad ipsum officia. Doloremque eum
            quis, animi tempore ipsam minima repellat dolore vero velit error
            esse ratione nesciunt, quod nobis consequatur! Pariatur, illo
            necessitatibus quidem laudantium minima possimus sed beatae esse
            iure harum quis aliquam, delectus, quisquam excepturi ex a
            repudiandae quia. Doloribus perferendis quasi rerum, odit
            cupiditate, eos labore reiciendis enim voluptatum error, obcaecati
            alias.
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
};

export default MessageModal;
