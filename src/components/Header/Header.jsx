import React from 'react'
import { Link } from 'react-router-dom';
import user from '../../images/user.png';

import './Header.scss'


const Header = () => {
  return (
    <div className='header__head'>
      <Link to="/" className='link'>
      <div className='header__head-logo'>
        <p>Movie Ratting</p>
      </div>
      </Link>
      <div className="header__head-user">
        <img src={user} alt="user img" />
      </div>

    </div>
  )
}

export default Header;