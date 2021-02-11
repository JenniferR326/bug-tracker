/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./bugCard.css";
import priorityController from "../../controllers/priorityController";

export default (props) => {
  const { name, priority, version } = props.bug;
  const {level, color} = priorityController(priority)

  function clicked() {
    props.clicked(name);
  }

  return (
    <div className="bugCard" onClick={clicked} style={{color: color}}>
      <h2 className="name">{name}</h2>
      <h4 className="priority">{level}</h4>
      <h5 className="version">{version}</h5>
    </div>
  );
};
