import React, { Component } from 'react';
import ImageCard from './components/ImageCards';
import './App.css';
import images from './images.json';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      images,
      currentScore: 0,
      topScore: 0,
      clickedImages: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {

    if (this.state.clickedImages.includes(id)) {
      alert("Oh oh... You lost. You clicked the same image twice. Try again!");

      this.setState(prevState => {
        
        let topScore = prevState.topScore;
        const score = prevState.currentScore;

        if (topScore < score) {
          topScore = score;
        }

        return {
          currentScore: 0,
          topScore: topScore,
          clickedImages: []
        }
      
    })
    } else {
      
      this.setState(prevState => {
        const newImage = [id];
        const allImages = [...prevState.clickedImages, ...newImage];
        const score = prevState.currentScore + 1;
        const newImageOrder = prevState.images.sort(() => Math.random() - 0.5);

        return {
          images: newImageOrder,
          currentScore: score,
          clickedImages: allImages
        }
        
      })
    }
    
  
  };

  render() {
    return (
      <Wrapper>
      <Navbar currentScore={this.state.currentScore} topScore={this.state.topScore}></Navbar>
      <Header></Header>
      <div className="container">
        <div className="row">
          {this.state.images.map(image => (
            <ImageCard
              key={image.id}
              id={image.id}
              name={image.name}
              image={image.image}
              handleClick = {this.handleClick}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
      </Wrapper>

    );
  
}

};

export default App;
