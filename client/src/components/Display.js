import React from "react";

const Display = props => {
  return (
    <div className="display">
      <div className="dash">
      <div className="balls">
        <h3>{props.ball}</h3>
        <button onClick={() => props.ballHandler()}>Balls</button>
      </div>
      <div className="strikes">
        <h3>{props.strike}</h3>
        <button onClick={() => props.strikeHandler()}>Strikes</button>
      </div>
      <div className="fouls">
        <h3>{props.foul}</h3>
        <button onClick={() => props.foulHandler()}>Fouls</button>
      </div>
      </div>
      <div className="hits"><button className="hit" onClick={() => props.hitHandler()}>HIT!</button></div>
      
    </div>
  );
};

export default Display;
