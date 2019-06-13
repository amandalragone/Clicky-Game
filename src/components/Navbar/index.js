import React from "react";

function Navbar() {

  var currentScore = 0;
  var topScore = 0;

    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        <a className="navbar-brand" href="#">
          Clicky Game
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <span className="nav-link">
              Click an Image to begin!
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
              Score: {currentScore}
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
              Top Score: {topScore}
              </span>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    
    );
  }
  
  export default Navbar;
  