import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const ExperiencedJobs = () => {

  const [jobs, setJobs] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jobend-backend.vercel.app/jobs/experts")
      .then(res => res.json())
      .then(data => {
        setJobs(data.data)
      })
  }, [])

  return (
    <div className='jobs_portal'>
      <p className='title2'>Experienced Jobs</p><br /><br />
      <div className='portals_job'>
        <div>
          {
            jobs.slice(0, 3).map(job =>
              <div className='job_section' key={job._id}>
                <Link to="" onClick={() => setData(job)} className='link_Deco'>
                  <p className='para_bold1'>{job.Position}</p>
                  <p className='para1'>{job.jobLocation}</p>
                  <p className='para2'>{job.CompanyName}</p><br />
                  <p className='para3'><b>Requirements:</b></p>
                  <p className='para3'>{job.Requirements.slice(0, 150)}...<Link className='text_link'>Click to view Details</Link></p>
                </Link>
              </div>
            )
          }
          <br />
          <br />
          <Link className='button1'>See More Jobs</Link>
          <br />
          <br />
          <br />
          <br />
        </div>
        <JobDetails data={data}></JobDetails>
      </div>
    </div>
  );
};

export default ExperiencedJobs;