import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostData from './posts';

const Information = () => {
  return( 
    <div className="information">
    {PostData.map((PostDetail) => {
        return <div> <h6>{PostDetail.javascript}</h6> </div>
     })}
    </div>
  );
}

export default Information;
