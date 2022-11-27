import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './download.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux-toolkit/actions/profile/profile';

const ProfileDownload = () => {
  const resume = useSelector((state) => state?.developer?.resume);
  const dispatch = useDispatch();
  const {
    state: { data },
  } = useLocation();
  console.log(data);

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
      pdf.save('download.pdf');
    });
  };

  useEffect(() => {
    download();
  }, [resume]);

  return (
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
            <svg viewbox='0 0 80 80' class='rela-block logo-svg'>
              <path
                d='M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z'
                stroke-width='2.5'
                fill='none'
              />
            </svg>
            <p style={{ textTransform: 'uppercase' }} class='logo-text'>
              {resume?.name?.split(' ')[0]?.slice(0, 2)}
            </p>
          </div>
        </div>
        {/* <p>123 My Place Drive</p> */}
        <p>{resume?.country}</p>
        {/* <p>1-800-CALLPLZ</p> */}
        <p>{resume?.email}</p>
        <br />
        {/* <p class='rela-block social twitter'>Twitter stuff</p>
        <p class='rela-block social pinterest'>Pinterest things</p>
        <p class='rela-block social linked-in'>Linked-in man</p> */}
        <p class='rela-block caps side-header'>Expertise</p>
        {resume?.skills?.map((skill) => (
          <p class='rela-block list-thing'>{skill}</p>
        ))}
        {/* <p class='rela-block caps side-header'>Education</p>
        <p class='rela-block list-thing'>Advanced potion making</p>
        <p class='rela-block list-thing'>Degree in popping and locking</p>
        <p class='rela-block list-thing'>Knitting game on point</p>
        <p class='rela-block list-thing'>Culinary af</p> */}
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
  );
};

export default ProfileDownload;
