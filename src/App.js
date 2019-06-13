import React, { Component } from 'react';
import ImageCard from './components/ImageCards';
import './App.css';
import images from './images.json';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <Wrapper>
      <Navbar></Navbar>
      <Header></Header>
      <div className="container">
        <div className="row">
          {this.state.images.map(image => (
            <ImageCard
              id={image.id}
              name={image.name}
              image={image.image}
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
