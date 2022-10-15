import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dp } from './dp';
const ProfileCard = (props) => {
  const user = useSelector((state) => state?.authSlice);

  const { createdAt, name, notShow, image } = props;

  return (
    <div>
      <div
        className='card d-flex profileAuthor'
        style={{
          width: '13rem',
          float: 'right',
          height: '10vh',
          backgroundColor: !notShow ? 'lightGray' : 'hsl(205,46%,92%)',
        }}
      >
        <span className='text-secondary d-flex asked'>
          {notShow ? 'answered' : 'asked'} {createdAt}
        </span>
        <div className=''>
          {image ? (
            <Link className='link' to='/settings'>
              <img className='dp' src={image} />
            </Link>
          ) : (
            <Link className='link' to='/settings'>
              <div className='dp topNA'>{name?.slice(0, 2)}</div>
            </Link>
          )}
          <span className='asked-by'>{name}</span>
        </div>
        <p className='contributor'>1,407</p>
      </div>
    </div>
  );
};

export default ProfileCard;
