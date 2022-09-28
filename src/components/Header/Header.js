import React from 'react';

import logo from '../Calculation/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1>Active Fitness Center</h1>
                {/* <img src={logo} alt="" /> */}
            </nav>
        </div>
    );
};

export default Header;