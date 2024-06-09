import React from 'react';
import '../Style/Joballocation.css';
import { Link } from 'react-router-dom';
import CommonButton from '../Components/CommonButton';
import Tabs from '../Components/Tabs';

const JobAllocation = () => {
  const buttonData = [
    { label: 'Job ID' },
    { label: 'User group id' },
    { label: 'location' },
    { label: 'vehicle number' },
    { label: 'Job Details' },
  ];

  return (
    <div>
      {/* header */}
      <div className="tab-labels"></div>
      <div className="title">
        Job Allocation
      </div>

      {/* tabs */}
     
        <Tabs buttonData={buttonData} />


      {/* button */}
      <div className="button">
        <Link to="/ja">
          <CommonButton to="/ja" buttonText="Allocate Job" />
        </Link>
      </div>

      {/* footer */}
      <footer className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default JobAllocation;
