import React, { useEffect, useState } from 'react';
import "./JobDetails.css";

const JobDetails = ({ data }) => {

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
          <p className='para3'>{data?.Requirements.slice(0, 150)}...</p>
        </div>
      }
    </div>
  );
};

export default JobDetails;