import '../Style/Jobdetails1.css';
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom';
import Search from '../Components/Search';
import Jobdetails1_dropdownmenu from '../Components/Jobdetails1_dropdownmenu';
import Tabs from '../Components/Tabs';
import NormalHeaderBar from '../Components/NormalHeaderBar';
import CommonButton from '../Components/CommonButton';
import { Link } from 'react-router-dom';

const JobDetails1 = () => {
  const buttonData = [
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
    { label: 'lorem ipsum' },
  ];

  return (
    <div>
      {/* Header */}
      <NormalHeaderBar />

      <div className="title">
        Job List
      </div>

      {/* Search bar */}
      <div className="column2down">
        <Search />
      </div>

      {/* Dropdown menu */}
      <div className="column01">
        <Jobdetails1_dropdownmenu />
      </div>

      {/* Tabs */}
      {/* Here, job ids should be displayed. Those ids must come from the database. So, after connecting the database, write the relevant code. */}
      <Tabs buttonData={buttonData} />

      <div className="column01">
        <Link to="/nj">
          <CommonButton to="/nj" buttonText="Add A New Job" />
        </Link>
      </div>
      <div className="column2down">
        <Link to="/ja">
          <CommonButton to="/ja" buttonText="Allocate Job" />
        </Link>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails1;
