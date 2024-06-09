import React from 'react';
import Profiles from '../Components/Profiles'; 
import '../Style/Welcome.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tabs from '../Components/Tabs';



const Welcome = () => {
  const buttonData = [
    { label: 'Employee Details' },
    { label: 'Item Details' },
    { label: 'Unit Details' },
    { label: 'Vehicle Details' },
    { label: 'Job Details', link: '/jd1' },
    { label: 'Service Agreement' },
    { label: 'Calendar',link: '/cl' },
    { label: 'Schedule a Site Visit' },
    { label: 'Job Allocation' },
  ];

  return (
    <div>
      <Profiles />
      <div className="header-margin"></div>
      <Tabs buttonData={buttonData} />
      <div className="footer-margin"></div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
