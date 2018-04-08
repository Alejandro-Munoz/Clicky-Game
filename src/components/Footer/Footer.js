import React from 'react';
import logo from '../../logo.svg';
import './Footer.css';


const Footer = () => (
    <div>
        <div className="panel panel-inverse">
            <div className="panel-footer">
                Clicky Game
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    </div>

)

export default Footer;