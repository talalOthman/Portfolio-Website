import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <div>
            <nav id="navbar">
                <li><a href="#" id="home"><span id="sHome">Home</span></a></li>
                <li><a href="#" id="gallery"><span id="sGallery">Gallery</span></a></li>
            </nav>
        </div>
    )
}

export default Navbar
