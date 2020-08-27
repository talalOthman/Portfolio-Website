import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
            <footer className="footer">
                
                <div className="footer__iconsContainer">
                <a href="https://www.facebook.com/talal.othman.31"><i><FaFacebook/></i></a>
                <a href="https://www.instagram.com/talal2820/"><i><FaInstagram /></i></a>
                <a href="https://github.com/talalOthman"><i><FaGithub /></i></a>
                </div>
                <p>Talal Othman @ 2020</p>
            </footer>
        
    )
}

export default Footer
