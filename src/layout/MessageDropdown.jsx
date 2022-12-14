import { Mail } from '@mui/icons-material';
import { Badge } from '@mui/material';
import './messageDropdown.css';
import { useRef, useEffect, useState } from 'react';
import MessageCard from './MessageCard';
import { triggerNotification } from '../redux-toolkit/actions/notifications/notofications';
import { useDispatch } from 'react-redux';
const MessageDropdown = ({ setMsgDropdown, msgDropdown, topDev }) => {
  const [checkNotification, setCheckNotification] = useState(false);
  const [show, setShow] = useState(false);
  const refOutside = useRef(null);
  const dispatch = useDispatch();
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
        onClick={() => {
          dispatch(triggerNotification());
          setCheckNotification(true);
          setMsgDropdown(!msgDropdown);
        }}
        className='msgIcon'
        color='secondary'
        badgeContent={
          checkNotification ? 0 : topDev?.notifications && topDev?.notifications
        }
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
