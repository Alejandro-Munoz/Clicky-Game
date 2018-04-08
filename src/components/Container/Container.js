import React from 'react';
import Header from '../Header/Header';
import Jumbotrom from '../Jumbotron/Jumbotron';
import Board from '../Board/Board';
import Footer from '../Footer/Footer';

import rick from '../../Images/rick.jpg';
import fishman from '../../Images/fishman.jpg';
import jim from '../../Images/jim.jpg';
import jirafe from '../../Images/jirafe.jpg';
import king from '../../Images/king.jpg';
import linhit from '../../Images/LinHit.jpg';
import mom from '../../Images/mom.png';
import monster from '../../Images/monster.jpg';
import morty from '../../Images/morty.jpg';
// import pickle from './pickle.png';
import rickGreen from '../../Images/rickGreen.jpg';
import sister from '../../Images/sister.jpg';
import snuffles from '../../Images/snuffles.jpg';

const initImages= [
    {src:rick,clicked:false},
    {src:fishman,clicked:false},
    {src:jim,clicked:false},
    {src:jirafe,clicked:false},
    {src:king,clicked:false},
    {src:linhit,clicked:false},
    {src:mom,clicked:false},
    {src:monster,clicked:false},
    {src:morty,clicked:false},
    {src:rickGreen,clicked:false},
    {src:sister,clicked:false},
    {src:snuffles,clicked:false}
];

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score:0,
            topScore:0,
            images:initImages,
            message:'',
        }
        this.onImageClick = this.onImageClick.bind(this);
        this.onReset = this.onReset.bind(this);
        
    }

    //Utility function to shuffle array of images
    shuffleImages(array){
        var i = 0
            , j = 0
            , temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array;
    }

   ///function for resetting to false clicked property of images array
    resetImages(array){
        for(var i=0; i<array.length;i++){
            array[i].clicked=false;
        }
        return array;
    }
    ///function to reset state to initial values
    onReset(){
        const resImages = this.resetImages(this.state.images);
        this.setState({
            score:0,
            topScore:0,
            images:resImages,
            message:'',
        })
    }
    ///Handles logic for clicking on an image
    onImageClick(idx,clicked){
        const newScore = this.state.score;
        let newTopScore = this.state.topScore;
        let newImages = this.state.images;
        let shuffled =[];
        let newMessage = "";

        if(clicked === "false"){
            
            newImages[idx].clicked = true;
            shuffled = this.shuffleImages(newImages);
            newMessage = "You guessed correctly";
            if(this.state.score >= this.state.topScore){
                newTopScore +=1;
            }

            this.setState({
                score:newScore + 1,
                topScore:newTopScore,
                images:shuffled,
                message: newMessage,
            })
        }
        else if(clicked === "true"){
            newImages = this.resetImages(initImages);
            shuffled = this.shuffleImages(newImages);
            newMessage = "You guessed incorrectly!!!";
            this.setState({
                score:0,
                message: newMessage,
                images:shuffled,
            })
        }
    }

    render(){
        return(
            <div>
                <Header onReset={this.onReset} score={this.state.score} message={this.state.message} topScore={this.state.topScore}/>
                <Jumbotrom />
                <Board init={this.state.images} onImageClick={this.onImageClick}/>  
                <Footer />
            </div>
        );
    }
}

export default Container;