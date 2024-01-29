import '../Style/NewJob.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NormalHeaderBar from '../Components/NormalHeaderBar';
import CommonButton from '../Components/CommonButton';
import AutoGenerateNumbers from '../Components/AutoGenerativeNumbers';
import Tabs from '../Components/Tabs';

const AnewjobWireframe24 = () => {
  const buttonData = [
    { label: 'Item Issue', icon: 'https://cdn-icons-png.flaticon.com/128/159/159469.png' },
    { label: 'Customer Details', icon: 'https://cdn-icons-png.flaticon.com/128/1144/1144760.png' },
    { label: 'Employee Details', icon: 'https://cdn-icons-png.flaticon.com/128/1144/1144760.png' },
    { label: 'Location', icon: 'https://cdn-icons-png.flaticon.com/128/535/535239.png' },
    { label: 'Item', icon: 'https://cdn-icons-png.flaticon.com/128/2652/2652218.png' },
  ];

  return (
    <div>
      {/* Header */}
      <NormalHeaderBar />
      
      <div className="title">
        A New Job
      </div>

      {/* Dropdown */}
      <div className="dropdown">
        <CommonButton buttonText="Job ID" />
        <div className="dropdown-content">
          <AutoGenerateNumbers />
        </div>
      </div>

      {/* Tabs */}
      <Tabs buttonData={buttonData} />

      {/* Buttons */}
      <div className="column1">
        <Link to="/ja">
          <CommonButton to="/ja" buttonText="Allocate Job" />
        </Link>
      </div>

      <div className="column2">
        <CommonButton to="/nj" buttonText="Cancel" />
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

export default AnewjobWireframe24;
