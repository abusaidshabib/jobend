import React from 'react';
import { Link } from 'react-router-dom';
import "./Companies.css";

const Companies = () => {

  const popularCompanies =
    [
      {
        "id": 1,
        "title": "DataSoft",
        "reviews": 3,
        "numberOfRev": 13712,
        "icons": "http://datasoft-bd.com/wp-content/themes/DataSoft/img/DS-logo_mobile.png"
      },
      {
        "id": 2,
        "title": "BanglaPuzzle",
        "reviews": 4,
        "numberOfRev": 22327,
        "icons": "https://brainstation-23.com/wp-content/uploads/2019/02/BS-Logo-Blue_Hr.svg"
      },
      {
        "id": 3,
        "title": "LargeIt",
        "reviews": 4,
        "numberOfRev": 36753,
        "icons": "https://large-it.com/wp-content/uploads/2018/05/Large-it-logo-ff.png"
      }
    ]


  return (
    <div className='main_companies_div'>
      <p className='title2'>Top Companies</p>
      <div className='companies_div'>
        {
          popularCompanies.map(com =>
            <div className='align_center_com'>
              <div>
                <div key={com.id} className="com_section">
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