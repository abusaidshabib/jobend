import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import "./JobDetails.css";

const JobDetails = ({ data }) => {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <p className='title4'><b>Watch The details of jobs</b></p><br /><br />
      {
        data && <div className='job_section'>
          <img className='img_data_div' src={data.img} alt="" />
          <p className='para_bold1'>{data?.Position}</p>
          <p className='para1'>{data?.jobLocation}</p>
          <p className='para2'>{data?.CompanyName}</p><br />
          <p className='para3'><b>Requirements:</b></p>
          <p className='para3'>{data?.Requirements}</p>
          <br /><br /><br /><br />
          {
            user ?
              <Link to="/home" className='button1'>Apply Now</Link>
              :
              <Link className='button1' to="/signup">Apply Now</Link>
          }
        </div>
      }
    </div>
  );
};

export default JobDetails;