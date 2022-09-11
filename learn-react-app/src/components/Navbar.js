import React from 'react';
import reactLogo from "../images/react-logo.png";

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt="react-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>about</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}