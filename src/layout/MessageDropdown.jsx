import { Mail } from '@mui/icons-material';
import { Badge } from '@mui/material';
import './messageDropdown.css';
import shali from '../assets/images/shali.jpg';
import { useRef, useEffect, useState } from 'react';
import MessageModal from '../components/messages/MessageModal';
const MessageDropdown = ({ setMsgDropdown, msgDropdown }) => {
  const refOutside = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
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
        badgeContent='2'
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
        <div className='msgCard flex flex-column'>
          <div className=' d-flex align-items-center gap-3'>
            <div className='msgLeft'>
              <img className='msgImg' src={shali} />
            </div>
            <div className='msgRight'>
              <h1 className='msgSender'>Shawal Ali</h1>
            </div>
          </div>
          <div className='msgInfo'>
            <p className='msgText'>
              I want to know about you? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt tenetur quaerat quam aspernatur iure
              esse saepe qui nemo eius amet.
            </p>
            <span className='msgTime'>2 hours ago</span>
          </div>
        </div>
      </div>
      <MessageModal show={show} setShow={setShow} />
    </div>
  );
};

export default MessageDropdown;
