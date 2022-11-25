import {
  AttachMoney,
  CalendarToday,
  LocalLibraryOutlined,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from '@material-ui/icons';
import { Badge, Button } from '@mui/material';
import { Link, useLocation, useParams } from 'react-router-dom';
import './developer.css';
import { useState, useEffect } from 'react';
import QuoteModal from './QuoteModal';
import { useDispatch, useSelector } from 'react-redux';
import { getTopDevs } from '../../redux-toolkit/actions/developers/developers';
import { browserRoutes } from '../../routes/browserRoutes';
import {
  isFollows,
  postFollow,
} from '../../redux-toolkit/actions/follow/follow';
import { postQuote } from '../../redux-toolkit/actions/quote/quote';
import { BeatLoader, ClipLoader } from 'react-spinners';
import {
  getKnowledgeByCount,
  getKnowledgeById,
} from '../../redux-toolkit/actions/knowledge/knowledge';
export default function Developer() {
  const [quoteLoading, setQuoteLoading] = useState(false);
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const id = useSelector((state) => state.authSlice?.id);
  const [quoteDesc, setQuoteDesc] = useState('');
  let topDev = useSelector((state) => state.developer.topDevelopers);
  let knowledge = useSelector((state) => state.knowledge.knowledgeCount);
  let isFollow = useSelector((state) => state.following.isFollow);
  let loadingFollow = useSelector((state) => state.following.loading);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const handleClose = () => setShow(false);

  let {
    state: { data },
  } = useLocation();
  topDev = topDev?.filter((dev) => dev?._id === data?.data)[0];
  useEffect(() => {
    dispatch(getTopDevs());
  }, []);
  if (topDev) {
    data.image = topDev.image;
    data.name = topDev.name;
    data.id = topDev.email;
    data.country = topDev.country;
    data.rate = topDev.rate;
    data.aboutMe = topDev.aboutMe;
    data.answers = topDev.answers;
    data.points = topDev.points;
    data.skills = topDev.skills;
  }

  const handleFollow = () => {
    dispatch(postFollow(data?._id, setLoading, isFollows));
  };

  const handleQuote = () => {
    setShow(true);
    dispatch(postQuote(quoteDesc, data?._id, handleClose, setQuoteLoading));
  };

  const handleQuoteChange = ({ target: { value } }) => {
    setQuoteDesc(value);
  };

  useEffect(() => {
    dispatch(isFollows(userId));
    dispatch(getKnowledgeByCount(userId));
  }, []);

  return (
    <div className='user'>
      {loadingFollow ? (
        <div
          style={{ paddingTop: '120px' }}
          className='d-flex justify-content-center'
        >
          <BeatLoader size={40} />
        </div>
      ) : (
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
                <span className='userShowUserTitle'>{data?.designation}</span>
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
                <span className='userShowInfoTitle'>
                  {data?.id || data?.email}
                </span>
              </div>
              {data?.country ? (
                <div className='userShowInfo'>
                  <LocationSearching className='userShowIcon' />
                  <span className='userShowInfoTitle'>{data?.country}</span>
                </div>
              ) : null}
              {data?.skills?.length
                ? data?.skills?.map((skill) => (
                    <div className='userShowInfo'>
                      <LocalLibraryOutlined className='userShowIcon' />
                      <span className='userShowInfoTitle'>{skill}</span>
                    </div>
                  ))
                : null}
              {data?.rate ? (
                <div className='userShowInfo'>
                  <AttachMoney className='userShowIcon' />
                  <span className='userShowInfoTitle'>
                    Hourly / ${data?.rate}
                  </span>
                </div>
              ) : null}
              {id !== data?._id ? (
                <div className='userShowInfo'>
                  <Button
                    onClick={() => setShow(true)}
                    variant='contained'
                    className='userShowInfoTitle'
                  >
                    Send Quote
                  </Button>

                  <Button
                    color={!isFollow ? 'secondary' : 'error'}
                    disabled={loading}
                    // style={{ backgroundColor: 'lightcoral', color: 'white' }}
                    onClick={handleFollow}
                    variant={'contained'}
                    className='userShowInfoTitle followBtn'
                  >
                    {isFollow ? 'Unfollow' : 'Follow'}
                  </Button>
                </div>
              ) : null}

              <QuoteModal
                msg={quoteDesc}
                loading={quoteLoading}
                handleQuote={handleQuote}
                handleQuoteChange={handleQuoteChange}
                show={show}
                handleClose={handleClose}
                handleShow={() => setShow(true)}
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
                  badgeContent={data?.answerCount || 0}
                  showZero
                ></Badge>
              </span>
              {knowledge ? (
                <span className='achievementInfo '>
                  <Link
                    style={{ fontStyle: 'italic', color: 'blue' }}
                    className='link'
                    to={browserRoutes.KNOWLEDGE + '/' + data?._id}
                  >
                    Shared Knowledge{' '}
                    <Badge
                      className='ansBadge'
                      color='error'
                      badgeContent={knowledge || 0}
                      showZero
                    ></Badge>
                  </Link>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
