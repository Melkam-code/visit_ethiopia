import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">TourEthiopia</a>
                <ul className="right">
                    <li><Link to='/'>Ethiopia</Link></li>
                    <li><Link to='/tour'>Tour With Us</Link></li>
                    <li><Link to='/attraction'>Attraction Sites</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;