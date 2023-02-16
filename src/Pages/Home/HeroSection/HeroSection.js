import React from 'react';
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className='hero_div'>
      <div>
        <div>
          <h1 className='title1'>Find great places to work</h1>
          <p className='para1'>Get access to millions of company reviews</p>
        </div>

        <p className='para_bold1'>find jobs depending your needs</p>
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
      </div>
    </div>
  );
};

export default HeroSection;