import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dropdown = () => {
  return(
    <>
            <div className="dropbox">
             <select>
               <option value="">Select a technology</option>
               <option value="">Angular</option>
               <option value="">React</option>
               <option value="">PHP</option>
               <option value="">Javascript</option>
             </select>
             </div>
           </>
  );
}

export default Dropdown;