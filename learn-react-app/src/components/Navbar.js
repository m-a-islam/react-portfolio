import React from 'react';
import reactLogo from "../images/react-logo.png";

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt="react-logo" />
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course- Project-1</h4>
            </nav>
        </header>
    )
}