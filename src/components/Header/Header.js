import React from 'react';

// import logo from '../Calculation/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1 className='title'>Active Fitness Center</h1>
                {/* <img  src={logo} alt="" /> */}
                <div >
                    <a href="/order">Order</a>
                    <a href="/order review">Order Review</a>
                    <a href="/manager inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;