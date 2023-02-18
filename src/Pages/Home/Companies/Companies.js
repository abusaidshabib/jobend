import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Companies.css";

const Companies = () => {
  const [popularCompanies, setPopularCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/companies")
    .then(res => res.json())
    .then(data => setPopularCompanies(data.data));
  }, [])



  return (
    <div className='main_companies_div'>
      <p className='title2'>Top Companies</p>
      <div className='companies_div'>
        {
          popularCompanies.map(com =>
            <div className='align_center_com' key={com._id}>
              <div>
                <div className="com_section">
                  <img src={com.icons} alt="" />
                  <span>
                    <p className='title4'>{com.title}</p>
                    <p className='para4'>{com.numberOfRev} <b>Reviews</b></p>
                  </span>
                </div>
                <div className='align_center_com'>
                  <Link className='button1'>Company Details</Link>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Companies;