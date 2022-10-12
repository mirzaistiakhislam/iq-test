import React from 'react';
import logo from '../../images/iq-cover.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className="img-fluid" alt="..."></img> <br />
            <h2>Explore Your Knowledge</h2>

        </div>
    );
};

export default Header;