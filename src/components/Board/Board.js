import React from 'react';
import Image from '../Image/Image';
import './Board.css'



class Board extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            images:this.props.init,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        // e.stopPropagation();
        const index = e.target.getAttribute("id");
        const clicked = e.target.getAttribute("isclicked");
        this.props.onImageClick(index,clicked);
        
    }

    render(){
        return(
            <div className="container" onClick={this.handleClick}>
                <div className="row">
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='0' clicked={this.state.images[0].clicked} src={this.state.images[0].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='1' clicked={this.state.images[1].clicked} src={this.state.images[1].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='2' clicked={this.state.images[2].clicked} src={this.state.images[2].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='3' clicked={this.state.images[3].clicked} src={this.state.images[3].src}/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-3">
                        <a className="thumbnail">
                            <Image id='4' clicked={this.state.images[4].clicked} src={this.state.images[4].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='5' clicked={this.state.images[5].clicked} src={this.state.images[5].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6  col-sm-6 col-md-3">
                        <a className="thumbnail">
                            <Image id='6' clicked={this.state.images[6].clicked} src={this.state.images[6].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='7' clicked={this.state.images[7].clicked} src={this.state.images[7].src}/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='8' clicked={this.state.images[8].clicked} src={this.state.images[8].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='9' clicked={this.state.images[9].clicked} src={this.state.images[9].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='10' clicked={this.state.images[10].clicked} src={this.state.images[10].src}/>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-6  col-md-3">
                        <a className="thumbnail">
                            <Image id='11' clicked={this.state.images[11].clicked} src={this.state.images[11].src}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Board;