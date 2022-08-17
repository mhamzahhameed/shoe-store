import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper'>
          <a href='!' className='brand-logo right'>
            ENDURE
          </a>
          <ul id='nav-mobile' className='left'>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='about'>ABOUT</Link>
            </li>
            <li>
              <Link to='men'>Men</Link>
            </li>
            <li>
              <Link to='women'>Women</Link>
            </li>
            <li>
              <Link to='contact'>CONTACT</Link>
            </li>
            <li>
              <i className='material-icons'>add_shopping_cart</i>
            </li>
            <li>
              <a href='#!' className='collection-items'>
                <span className='new badge'>4</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
