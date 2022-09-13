import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper'>
          <Link
            to='/'
            className='brand-logo right'
            style={{ color: "darkgray" }}
          >
            PAK_ShOES
          </Link>
          <ul id='nav-mobile' className='left'>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='others'>Others</Link>
            </li>
            <li>
              <Link to='about'>ABOUT</Link>
            </li>
            <li>
              <Link to='contact'>CONTACT</Link>
            </li>
            <li>
              <i className='material-icons'>add_shopping_cart</i>
            </li>
            <li>
              <Link to='/' className='collection-items'>
                <span className='new badge'>4</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
