import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
              <img src={logo} alt="" /> &nbsp;&nbsp; <h2>Online Quiz</h2>
            </div>
            <nav className='links'>
                <Link to=''>Topic</Link>
                <Link to='' >Statistics</Link>
                <Link to=''>Blogs</Link>
            </nav>
            
        </div>
    );
};

export default Header;