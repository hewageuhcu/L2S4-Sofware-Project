import '../Style/Forpassword.css';
import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

function ForPassword() {
    return (
      <div>
<div class="tab-labels">
        
</div> 
{/* box */}
<div class="box">

<div class="box-content">
  <img src="https://cdn-icons-png.flaticon.com/128/3000/3000482.png" width="60px" height="60px" align="center"></img>
  <div class="forget-password">
  <br/>
 Forgot Password
 </div>
  <div class="paragraph">
  <p>Enter you email and we'll send you a link to reset your password</p>
  <br/>
  </div>
 

<div>
  {/* form to enter email and submit it */}
  <form action="/submit_form_endpoint" method="post">
            <input type="email" id="email"  name="email" required /><br /><br />
            <input type="submit" value="Submit" />
          </form>
</div>
<br/>

{/* link the login page to this */}
<p> <Link to={"/lg"}> Back to login</Link></p>
</div>
 <div>
 </div>
 </div>
       <div class="footer">
   <div class="footer-text">
<p>© 2023 • All Rights Reserved</p>
</div>
</div>
 </div>
    );
  }


export default ForPassword;
