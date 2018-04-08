import React from 'react';
import './Image.css';

class Image extends React.Component{

    render(){
        return (
            <img src={this.props.src} id={this.props.id} isclicked={`${this.props.clicked}`} alt='' className="img-responsive img-rounded" style={{width:'240px',height:'180px'}} />
        );
    }
}

export default Image;