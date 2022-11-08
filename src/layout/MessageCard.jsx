import moment from 'moment';
import { useState } from 'react';
import MessageModal from '../components/messages/MessageModal';

const MessageCard = ({ msg, setMsgDropdown }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setMsgDropdown(false);
          setShow(true);
        }}
        className='msgCard flex flex-column'
      >
        <div className=' d-flex align-items-center gap-3'>
          <div className='msgLeft'>
            {msg?.user?.image ? (
              <img className='msgImg' src={msg?.user?.image} />
            ) : (
              <div
                style={{ backgroundColor: 'antiquewhite' }}
                className='msgImg d-flex justify-content-center align-items-center'
              >
                {msg?.user?.name?.slice(0, 2)}
              </div>
            )}
          </div>
          <div className='msgRight'>
            <h1 className='msgSender'>{msg?.user?.name}</h1>
          </div>
        </div>
        <div className='msgInfo'>
          <p className='msgText'>{msg?.description}</p>
          <span className='msgTime'>{moment(msg?.updatedAt).fromNow()}</span>
        </div>
      </div>
      <MessageModal msg={msg} show={show} setShow={setShow} />
    </>
  );
};

export default MessageCard;
