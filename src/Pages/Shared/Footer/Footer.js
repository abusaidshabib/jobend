import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer_div'>
      <div>
        <Link className='logo_nav' to="/">JOBEND<b>.</b></Link>
        <p className='text_follow'>Follow Us</p>
        <ul className='icons_div'>
          <li><FaFacebookF className='footer_icons' /></li>
          <li><FaInstagram className='footer_icons' /></li>
          <li><FaTwitter className='footer_icons' /></li>
          <li><FaTiktok className='footer_icons' /></li>
        </ul>
      </div>
      <ul className='footer_list'>
        <li className='menu_text'>Menu Items</li>
        <li>
          <Link className='menu_text' to="/home">Home</Link>
        </li>
        <li>
          <Link className='menu_text' to="/about">About us</Link>
        </li>
        <li>
          <Link className='menu_text' to="/contact">Contact us</Link>
        </li>
        <li>
          <Link className='menu_text' to="/faq">FAQ</Link>
        </li>
      </ul>
      <div>
        <div className='sub_div'>
          <input className='footer_input' placeholder='Enter Your Email' type="email" name="email" id="" />
          <Link className='button1'>Subscribe</Link>
        </div>
        <div className='sub_div'>
          <input className='footer_check' type="checkbox" name="" id="subscribe" value="" />
          <label htmlFor="subscribe">Get notifications about top blogs and offers</label>
        </div>
      </div>
    </div>
  );
};

export default Footer;