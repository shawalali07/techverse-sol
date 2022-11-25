import './about.css'
import shali from '../assets/images/shali.jpg'
import sheeza from '../assets/images/sheeza.jpeg'
import maham from '../assets/images/maham.jpeg'
import ansa from '../assets/images/ansa1.png'
const About = () => {
  return (
    <div className='aboutUs'>
      <div class='about-section'>
        <h1>TECHVERSE TEAM</h1>
        {/* <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p> */}
      </div>

      {/* <h2 style={{ textAlign: 'center' }}>TECHVERSE TEAM</h2> */}
      <div className='d-flex-center'>
        <div class='aboutRow'>
          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={maham}
                alt='Jane'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>MAHAM HAFEEZ</h2>
                <p class='aboutTitle'>DIRECTOR | SOFTWARE ENGINEER</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>maham@gmail.com</p>
                <p>
                  <button class='aboutButton'>Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={sheeza}
                alt='Jane'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>SHEEZA SHAHID</h2>
                <p class='aboutTitle'>MANAGER | BUSINESS DEVELOPER</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>sheeza@gmail.com</p>
                <p>
                  <button class='aboutButton'>Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={ansa}
                alt='Mike'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>ANSA MUMTAZ</h2>
                <p class='aboutTitle'>CEO | QA ENGINEER</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>ansa@gmail.com</p>
                <p>
                  <button class='aboutButton'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='aboutColumn'>
            <div class='aboutUsCard'>
              <img
                className='cardAboutImg'
                src={shali}
                alt='John'
                style={{ width: '100%' }}
              />
              <div class='aboutContainer'>
                <h2>Shawal Ali</h2>
                <p class='aboutTitle'>CTO | SOFTWARE DESIGNER</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>shawal@gmail.com</p>
                <p>
                  <button class='aboutButton'>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
