import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
           <div class="hey">
                <a className="brand-logo" href="/">TourEthiopia</a>
                <ul className="right">
                    <li><Link to='/' exact>Ethiopia</Link></li>
                    <li><Link to='/register'>Register</Link> </li>
                    <li><Link to='/tour'>Tour With Us</Link></li>
                    <li><Link to='/attraction'>Attraction Sites</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                </div>
        </nav>
    );
}

export default Navbar;