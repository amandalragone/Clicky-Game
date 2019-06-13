import React, { Component } from 'react';
import ImageCard from './components/ImageCards';
import './App.css';
import images from './images.json';


class App extends Component {

  state = {
    images
  };

  render() {
    return (
      
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
      

    );
  
}

};

export default App;
