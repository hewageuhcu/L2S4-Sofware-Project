

import '../Style/JobDetails2.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';

function JobDetails2() {
    return (
      <div>


        {/* header */}
<div class="tab-labels"></div>
        
        <div class="title">
 Job Details
        </div>
        
         
{/* dropdown menu */}
<div class="column1">
<div class="dropdown">
  <button class="dropbtn">Job ID</button>
  {/* dropdown content should be come from saved data. write the relevent code after connect the database. here are dummy data. */}
  <div class="dropdown-content">
    <a href="#Customer">Customer</a>
    <a href="#Date">Date</a>
    <a href="#Team Member">Team Member</a>
    <a href="#Vehicle Number">Vehicle Number</a>
    <a href="#To Be Invoiced">To Be Invoiced</a>
    <a href="#Invoiced">Invoiced</a>

  </div>
  </div>
  </div>


  {/* tabs */}

  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/159/159469.png" width="30px" height="30px" ></img><div class="content">Item Issue</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"width="30px" height="30px"></img>  <div class="content">Customer Details</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"width="30px" height="30px"></img> <div class="content">Employee Details</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/535/535239.png"width="30px" height="30px"></img><div class="content">Location</div></div>
  <div class="tabs"><img src="https://cdn-icons-png.flaticon.com/128/2652/2652218.png"width="30px" height="30px"></img><div class="content">Item</div></div>
  




              {/* footer */}
              <footer className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </footer>
    </div>

);
  }


export default JobDetails2;