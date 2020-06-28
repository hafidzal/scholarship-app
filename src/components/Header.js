import React from 'react';
import seaLogo from '../images/Sea-Undergraduate-Logo.png'

const Header = () =>{
    return(
        <div className="header">
            <a href="/" className="sea-logo" id="links">
                <img src={seaLogo} className="sea-logo" alt="sea-logo" />
            </a>
            <div className="header-right">
                <a className="active" href="/" id="links">Home</a>
                <a href="#program" id="links">Program</a>
                <a href="#apply" id="links">Apply Here</a>
                <a href="#FAQ" id="links">FAQ</a>
            </div>
        </div>
    );
}

export default Header;