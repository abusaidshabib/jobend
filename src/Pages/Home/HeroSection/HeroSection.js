import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./HeroSection.css";
import { motion } from "framer-motion"

const HeroSection = () => {

  const [active, setActive] = useState();

  const [searchToggle, setSearchToggle] = useState(false);
  console.log(searchToggle);

  return (
    <div className='hero_div'>
      <div>
        <div>
          <h1 className='title1'>Find great places to work</h1>
          <p className='para1'>Get access to millions of company reviews</p>
        </div>

        <p className='para_bold1'>find depending your needs</p>
        <div>
          <Link className='button1' onClick={() => setSearchToggle(false)}>For Jobs</Link>
          <Link className='button1' onClick={() => setSearchToggle(true)}>For candidate</Link>
          <br /><br /><br /><br /><br /><br />
        </div>
        {
          searchToggle ?
            <motion.div animate={{x:[400,0]}}
              transition={{ duration: 1 }}>
              <b className='para1'>Search candidate</b>
              <form className='form_div'>
                <input className='search_field' type="text" name="" id="" placeholder='What are you looking for?' />
                <select id="cars" className='search_field'>
                  <option value="Select Area">Select Area</option>
                  <option value="volvo">Dhaka</option>
                  <option value="volvo">Rajshahi</option>
                  <option value="volvo">Barishal</option>
                  <option value="volvo">Dinajpur</option>
                  <option value="volvo">Sylhet</option>
                  <option value="volvo">Comilla</option>
                </select>
                <select id="cars" className='search_field'>
                  <option value="Select Area">All Category</option>
                  <option value="volvo">Medical</option>
                  <option value="volvo">Technology</option>
                  <option value="volvo">Government</option>
                  <option value="volvo">Development</option>
                  <option value="volvo">Designer</option>
                  <option value="volvo">Writer</option>
                </select>
                <input className='input_btn' type="submit" value="search" />
              </form>
            </motion.div>
            :
            <motion.div animate={{x:[-400, 0]}}
              transition={{ duration: 0.8 }}>
              <b className='para1'>Search jobs</b>
              <form className='form_div'>
                <input className='search_field' type="text" name="" id="" placeholder='What are you looking for?' />
                <select id="cars" className='search_field'>
                  <option value="Select Area">Select Area</option>
                  <option value="volvo">Dhaka</option>
                  <option value="volvo">Rajshahi</option>
                  <option value="volvo">Barishal</option>
                  <option value="volvo">Dinajpur</option>
                  <option value="volvo">Sylhet</option>
                  <option value="volvo">Comilla</option>
                </select>
                <select id="cars" className='search_field'>
                  <option value="Select Area">All Category</option>
                  <option value="volvo">Medical</option>
                  <option value="volvo">Technology</option>
                  <option value="volvo">Government</option>
                  <option value="volvo">Development</option>
                  <option value="volvo">Designer</option>
                  <option value="volvo">Writer</option>
                </select>
                <input className='input_btn' type="submit" value="search" />
              </form>
            </motion.div>
        }
      </div>
    </div>
  );
};

export default HeroSection;