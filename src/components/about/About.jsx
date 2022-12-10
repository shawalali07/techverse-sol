import './about.css';
import shali from '../../assets/images/shali.jpg';
import sheeza from '../../assets/images/sheeza.jpeg';
import maham from '../../assets/images/maham.jpeg';
import ansa from '../../assets/images/ansa1.jpg';
const About = () => {
  return (
    <div className='aboutUs'>
      <div class='about-section'>
        <h1>TECHVERSE TEAM</h1>
      </div>

      <div className='d-flex-center'>
        <div class='aboutRow'>
          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={sheeza}
                alt='Sheeza Shahid'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>SHEEZA SHAHID</h2>
                <p class='aboutTitle'>
                  <strong>MANAGER | BUSINESS DEVELOPER</strong>
                </p>
              </div>
            </div>
          </div>
          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={maham}
                alt='Maham Hafeez'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>MAHAM HAFEEZ</h2>
                <p class='aboutTitle'>
                  <strong>DIRECTOR | SOFTWARE ENGINEER</strong>
                </p>
              </div>
            </div>
          </div>
          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={ansa}
                alt='Ansa Mumtaz'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>ANSA MUMTAZ</h2>
                <p class='aboutTitle'>
                  <strong>CEO | QA ENGINEER</strong>
                </p>
              </div>
            </div>
          </div>

          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={shali}
                alt='Shawal Ali'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>SHAWAL ALI</h2>
                <p class='aboutTitle'>
                  <strong>CTO | FRONTEND DEVELOPER</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
