import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
      return(
          <div className="menustyle">
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/task">Tasks</Link></li>
              <li> <Link to="/user">User</Link></li>
            </ul>
          </div>
      );
}

export default Navbar;