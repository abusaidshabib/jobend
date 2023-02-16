import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav_div'>
      <Link className='logo_nav' to="/">JOB<span>END</span><b>.</b></Link>
      <ul className='menu_nav'>
        <li>
          <Link className='menu_text' to="/home">Home</Link>
        </li>
        <li>
          <Link className='menu_text' to="/about">About Us</Link>
        </li>
        <li>
          <Link className='menu_text' to="/contact">Contact Us</Link>
        </li>
      </ul>

      <ul className='menu_nav'>
        <li>
          <Link to="/login" className='button1'>Sign In</Link>
        </li>
        <li>
          <Link to="/signup" className='button1'>Registration</Link>
        </li>
        {/* <li>
          <Link className='button1'>Sign Out</Link>
        </li>
        <li>
          <Link className='button1'>Sign Out</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;