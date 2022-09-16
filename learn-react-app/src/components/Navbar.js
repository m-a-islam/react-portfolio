import React from 'react';
import airbnbLogo from "../images/airbnblogo.png";

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={airbnbLogo} className="nav-logo" alt="react-logo" />
            </nav>
        </header>
    )
}