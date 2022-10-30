import {
  AttachMoney,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@material-ui/icons';
import { Badge, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './developer.css';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function Developer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    state: { data },
  } = useLocation();

  return (
    <div className='user'>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            {data?.image ? (
              <img src={data?.image} alt='' className='userShowImg' />
            ) : (
              <div
                style={{ backgroundColor: 'lightgray' }}
                className='topDevImg'
              >
                {data?.name?.slice(0, 2)}
              </div>
            )}
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>{data?.name}</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>
                {data?.name?.split(' ')?.slice(0, 2)}
              </span>
            </div>

            <span className='userShowTitle'>Contact Details</span>

            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>{data?.id}</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>{data?.country}</span>
            </div>
            <div className='userShowInfo'>
              <AttachMoney className='userShowIcon' />
              <span className='userShowInfoTitle'>Hourly / ${data?.rate}</span>
            </div>
            <div className='userShowInfo'>
              <Button
                onClick={handleShow}
                variant='contained'
                className='userShowInfoTitle'
              >
                Send Quote
              </Button>
              <Button
                style={{ backgroundColor: 'lightcoral', color: 'white' }}
                onClick={handleShow}
                variant='outlined'
                className='userShowInfoTitle followBtn'
              >
                Follow
              </Button>
            </div>

            <QuoteModal
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>About Me</span>
          <p className='devAboutText'>{data?.aboutMe}</p>
        </div>
        <div className='userPoints'>
          <div className='userUpdateTitle'>My Achievements</div>
          <div className='achievements'>
            <span className='achievementInfo'>
              Rank{' '}
              <Badge
                className='rankBadge'
                color='success'
                badgeContent={data?.rate}
                showZero
              ></Badge>
            </span>
            <span className='achievementInfo'>
              Points
              <Badge
                className='pointBadge'
                color='primary'
                badgeContent={data?.points}
                showZero
              ></Badge>
            </span>
            <span className='achievementInfo'>
              Answers{' '}
              <Badge
                className='ansBadge'
                color='error'
                badgeContent={data?.answers || 0}
                showZero
              ></Badge>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
