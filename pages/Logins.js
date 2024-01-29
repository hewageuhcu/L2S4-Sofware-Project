import React from 'react';
import NormalHeaderBar from '../Components/NormalHeaderBar';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import Form from '../Components/Form';
import Button from '../Components/Button';
export default function Logins() {

  return (
    <div>
  <NormalHeaderBar />
 
    <div className="text">
       <center>Sign in</center> 
      </div>
  <div>
   <p><h4><center>Sign in to your account</center></h4></p>
      </div>
     
      <br />

      <div className="box">

        <div className="box-content">
        <Form/>
<Button/>
        </div> 
      </div>

      {/* create account */}
      {/* <div className="text">
        Create Account
      </div>

      <div>
        <p><h4><center>Don't have an account yet? Create one!</center></h4></p>
      </div>
     
      <br />
      <div className="box1">
        <div className="box-content1">
          <div className="form">
            <div className="form">
              <form action="/submit_form" method="POST">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="userName" required /><br /><br />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required /><br /><br />
                <label htmlFor="des">Designation:</label>
                <input type="text" id="des" name="des" required /><br /><br />
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" name="password" required /><br /><br />
                <label htmlFor="confirmPwd">Confirm Password:</label>
                <input type="password" id="confirmPwd" name="confirmPassword" required /><br /><br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* forget password */}
      <div>
        <p><h4><center>Forget Password?  <Link to={"/fp"}> Click here to Reset</Link></center></h4></p>
      {/*</div>
      <div className="box">
        <div className="box-content">
          <div className="form"></div>
          <div className="form">
            <form action="/submit_form" method="POST">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="userName" required /><br /><br />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="emaild" required /><br /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
       */}
       </div>

      {/* footer */}
      <ul className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </ul>
    </div>
  );
}

//  export default Logins;
