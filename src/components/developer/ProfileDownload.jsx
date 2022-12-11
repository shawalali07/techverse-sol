import { Button } from '@mui/material';
import { useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './download.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux-toolkit/actions/profile/profile';

const ProfileDownload = () => {
  const id = useSelector((state) => state.authSlice?.id);

  const resume = useSelector((state) => state?.developer?.resume);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const download = () => {
    const input = document.getElementById('resume');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [20, 15],
      });
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('techverse-resume.pdf');
    });
  };

  return (
    <div style={{ paddingTop: '120px', marginLeft: '5px' }}>
      <Button
        onClick={download}
        color='success'
        variant={'contained'}
        className='userShowInfoTitle followBtn'
      >
        Download CV
      </Button>
      <div
        id='resume'
        style={{ paddingTop: '100px', backgroundColor: '#fff' }}
        class='rela-block container'
      >
        <div class='rela-block top-bar'>
          <div class='caps name'>
            <div class='abs-center'>{resume?.name}</div>
          </div>
        </div>
        <div class='side-bar'>
          <div class='mugshot'>
            <div class='logo'>
              {/* <p style={{ textTransform: 'uppercase' }} class='logo-text'>
              {resume?.name?.split(' ')[0]?.slice(0, 2)}
            </p> */}
            </div>
          </div>
          <p class='rela-block caps side-header'>Personal Details</p>

          {/* <p>123 My Place Drive</p> */}
          <p>{resume?.country}</p>
          {/* <p>1-800-CALLPLZ</p> */}
          <p>{resume?.email}</p>
          <br />
          <p class='rela-block caps side-header'>Expertise</p>
          {resume?.skills?.map((skill) => (
            <p class='rela-block list-thing'>{skill}</p>
          ))}
        </div>
        <div class='rela-block content-container'>
          <h2 class='rela-block caps title'>{resume?.designation}</h2>
          <div class='rela-block separator'></div>
          <div class='rela-block caps greyed'>Profile</div>
          <p class='long-margin'>{resume?.aboutMe}</p>
          <div class='rela-block caps greyed'>Experience</div>

          {resume?.project?.map((project, index) => (
            <>
              <h3>Project #{index + 1}</h3>
              <p class='light'>{project?.projectTitle}</p>
              <p class='justified'>{project?.projectDescription}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDownload;
