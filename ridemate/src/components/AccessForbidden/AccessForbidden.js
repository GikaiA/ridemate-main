import React from 'react'
import { Link } from 'react-router-dom'
import {thumbsdown} from "../images/thumbsdown.mp4"

function AccessForbidden() {
  return (
    <div className='accessforbidden-section'>
      <h1>Access Denied</h1>
      {/* <img src={thumbsdown}></img> */}
    <p className='accessforbidden-text'>If you want to access this page, please <Link to ="/login">Login</Link></p>
    <p className='accessforbidden-text'>If you do not have an account, please <Link to = "/register">Register</Link></p>
    </div>
  );
}

export default AccessForbidden
