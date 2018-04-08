import React from 'react';
import './Jumbotron.css';
import bImage from './rocket.jpg';


const Jumbotron = () => (
    // <div className="jumbo" style={ { backgroundImage: `url(${bImage})` } }>
        <div className="container-jumbo" style={ { backgroundImage: `url(${bImage})` } }>
            <h1 className="item">Clicky Game!</h1>
            <h2 className="item">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    // </div>
);

export default Jumbotron;