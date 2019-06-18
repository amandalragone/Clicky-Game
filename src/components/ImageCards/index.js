import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="col-3">
      <div className="img-container">
        <img alt={props.name} id={props.id} src={"images/" + props.image} width="225px" height="225px" onClick={() => props.handleClick(props.id)}/>
      </div>
    </div>
  );
}

export default ImageCard;
