import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./IndustrySec.css";

const IndustrySec = () => {
  const [datas, setdatas] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data => setdatas(data.data))
  }, [])

  return (
    <div className='main_indus'>
      <div>
        <h2 className='title2'>All working categories</h2> <br/><br/>
        <div className='indus_sec'>
          {
            datas.map(data =>
              <div className='sec_div' key={data._id}>
                <p className='title4'>{data.title}</p>
              </div>
            )
          }
        </div>
        <Link to="" className='button1'>See all the category</Link>
      </div>
    </div>
  );
};

export default IndustrySec;