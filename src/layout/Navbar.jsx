import './navbar.css';
import { HomeOutlined } from '@mui/icons-material';
import { DarkModeOutlined } from '@mui/icons-material';
import { GridViewOutlined } from '@mui/icons-material';
import { WbAutoOutlined } from '@mui/icons-material';
import { NotificationsOutlined } from '@mui/icons-material';
import { EmailOutlined } from '@mui/icons-material';
import { PersonOutlined } from '@mui/icons-material';
import { SearchOutlined } from '@mui/icons-material';
import dp from '../assets/images/shali.jpg';
const Navbar = () => {
  return (
    <div className='navNavbar'>
      <div className='navLeft'>
        <span className='navLogo'>shalisocial</span>
        <HomeOutlined />
        <DarkModeOutlined />
        <GridViewOutlined />
        <div className='navSearch'>
          <SearchOutlined />
          <input
            className='navSearchInput'
            type='search'
            placeholder='Search...'
          />
        </div>
      </div>
      <div className='navRight'>
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className='navUser'>
          <img className='navImage' src={dp} alt='' />
          <span>Shawal Ali</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
