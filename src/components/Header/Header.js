import React from 'react';
import './Header.css';

const Header = (props) => (
<nav className="navbar navbar-fixed-top">
    <p className=" item reset" onClick={props.onReset} >Clicky Game</p>
    <p className=" item">{`${props.message ? props.message : "Click an image to begin"} `}</p>
    <p className="item">Score: {props.score} | Top Score: {props.topScore}</p>
</nav>
    
);

export default Header;