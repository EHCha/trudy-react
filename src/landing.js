import landingimage1 from './koreaguide1.jpg';
import './landing.css';

function Landing() {
    return (
      <div className="landing">
          <img src={landingimage1} className="landing-image" alt="background" />
          <div className='shade'></div>
          <div className="title">
            Trudy
          </div>
      </div>
    )
}

export default Landing;