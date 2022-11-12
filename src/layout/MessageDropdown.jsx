import { Mail } from '@mui/icons-material';
import { Badge } from '@mui/material';
import './messageDropdown.css';
import shali from '../assets/images/shali.jpg';
import { useRef, useEffect, useState } from 'react';
import MessageModal from '../components/messages/MessageModal';
import moment from 'moment';
import MessageCard from './MessageCard';
import { ClipLoader } from 'react-spinners';
const MessageDropdown = ({ setMsgDropdown, msgDropdown, topDev }) => {
  const [show, setShow] = useState(false);
  const refOutside = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  const handleClickOutside = ({ target }) => {
    if (!refOutside.current.contains(target)) {
      setMsgDropdown(false);
    } else {
    }
  };

  return (
    <div ref={refOutside} className='messageDropdown'>
      <Badge
        onClick={() => setMsgDropdown(!msgDropdown)}
        className='msgIcon'
        color='secondary'
        badgeContent={
          topDev?.notifications ? (
            topDev?.notifications
          ) : topDev?.notifications < 1 ? (
            0
          ) : (
            <ClipLoader size={10} />
          )
        }
        showZero
      >
        <Mail />
      </Badge>
      <div
        onClick={() => {
          setShow(true);
          setMsgDropdown(!msgDropdown);
        }}
        className={msgDropdown ? `mDropdown1` : 'mDropdown'}
      >
        {topDev?.messages?.length ? (
          topDev?.messages?.map((msg) => (
            <MessageCard setMsgDropdown={setMsgDropdown} msg={msg} />
          ))
        ) : (
          <div>No Message Found</div>
        )}
      </div>
    </div>
  );
};

export default MessageDropdown;
