import React from 'react';
import { Link } from 'react-router-dom';
import "./IndustrySec.css";

const IndustrySec = () => {

  const datas = [
    {
      "id": 1,
      "title": "Medical"
    },
    {
      "id": 2,
      "title": "Technology"
    },
    {
      "id": 3,
      "title": "Government"
    },
    {
      "id": 4,
      "title": "Development"
    },
    {
      "id": 5,
      "title": "Designer"
    },
    {
      "id": 6,
      "title": "Writer"
    }
  ]

  return (
    <div className='main_indus'>
      <div>
        <h2 className='title2'>All working categories</h2>
        <div className='indus_sec'>
          {
            datas.map(data =>
              <div className='sec_div' key={data.id}>
                <p className='title4'>{data.title}</p>
              </div>
            )
          }
        </div>
        <Link className='button1'>See all the category</Link>
      </div>
    </div>
  );
};

export default IndustrySec;