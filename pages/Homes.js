import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import ThemeProvider from '../Components/ThemeProvider';


const Homes = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <div className="home-container">
      
 
      <ResponsiveAppBar></ResponsiveAppBar>
      <ThemeProvider/>
      <div className="slideshow-container">
        <div className={`mySlides ${slideIndex === 0 ? 'active' : ''}`}>
            {/* wallpaper content */}
          <div className="text-overlay">
            <p>
              <i>
                Keeping You Cool, <br />
                Every Breath,<br />
                Every Beat.
              </i>
            </p>
          </div>
          <img
            src="https://www.bowersoxair.com/wp-content/uploads/2019/06/airconditionertrends-1.jpeg"
            width="100%"
            height="500px"
            alt="Slide 1"
          />
        </div>

        <div className={`mySlides ${slideIndex === 1 ? 'active' : ''}`}>
          <div className="text-overlay">
            <p>
              <i>
                Chill Out in Every <br />
                Climate.
              </i>
            </p>
          </div>
          <img
            src="https://parkerairconditioning.com.au/wp-content/uploads/2016/06/specials.jpg"
            width="100%"
            height="500px"
            alt="Slide 2"
          />
        </div>

        <div className={`mySlides ${slideIndex === 2 ? 'active' : ''}`}>
          <div className="text-overlay">
            <p>
              <i>
                Bringing Comfort,  <br />
                One Degree at a <br />
                Time.
              </i>
            </p>
          </div>
          <img
            src="https://th.bing.com/th/id/R.82e6c1f15cf388268662de8e766a3d6b?rik=JKnBZ%2bXBf4Q9Qg&riu=http%3a%2f%2fimg.zhuangxiutp.com%2fupload%2fnews%2f2019%2f0802%2fphotos%2fmiddle%2f20190802131211_8qt_5g2bavbo.jpg&ehk=0Lji%2bh24pKiLBzU5%2fsY2AuJr6ffM7Ye4MeZAc0HCFQc%3d&risl=&pid=ImgRaw&r=0"
            width="100%"
            height="500px"
            alt="Slide 3"
          />
        </div>
{/* dots */}
        <div className="dot-container">
          <span className={`dot ${slideIndex === 0 ? 'active' : ''}`}></span>
          <span className={`dot ${slideIndex === 1 ? 'active' : ''}`}></span>
          <span className={`dot ${slideIndex === 2 ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* footer */}
      <div className="tab-labels">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Homes;
