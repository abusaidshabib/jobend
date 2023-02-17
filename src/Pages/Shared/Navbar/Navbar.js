import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import "./Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

  const { logOut, user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);


  return (
    <div className='nav_main_div'>
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
          {
            user?.uid ?
              <>
                <li>
                  <Link onClick={logOut} className='button1'>LogOut</Link>
                </li>
              </>
              :
              <>
                <li>
                  <Link to="/login" className='button1'>Sign In</Link>
                </li>
                <li>
                  <Link to="/signup" className='button1'>Registration</Link>
                </li>
              </>
          }
        </ul>
        {
          toggle ? <Link className='toggleMenu' onClick={() => setToggle(!toggle)}><AiOutlineMenu /></Link>
            :
            <Link className='toggleMenu' onClick={() => setToggle(!toggle)}><AiOutlineClose /></Link>
        }
      </div>
      {
        toggle ?
          <></>
          :
          <ul className='mobile_menu_div'>
            <li>
              <Link className='menu_text' to="/home">Home</Link>
            </li>
            <li>
              <Link className='menu_text' to="/about">About Us</Link>
            </li>
            <li>
              <Link className='menu_text' to="/contact">Contact Us</Link>
            </li>
            {
              user?.uid ?
                <>
                  <li>
                    <Link onClick={logOut} className='button1'>LogOut</Link>
                  </li>
                </>
                :
                <>
                  <li>
                    <Link to="/login" className='button1'>Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup" className='button1'>Registration</Link>
                  </li>
                </>
            }
          </ul>
      }
    </div>
  );
};

export default Navbar;