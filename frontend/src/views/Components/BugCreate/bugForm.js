/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import BugModel from "../../../models/bugModel";
import "./bugForm.css";

export default (props) => {
  const [bugObject, setBugObject] = useState(new BugModel(props.bug));

  function inputChanged(evt) {
    setBugObject({
      ...bugObject,
      [evt.target.name]: evt.target.value,
    });
  }
  return (
    <div className="bugCreate">
      {props.title === "Edit Bug" &&<button className="closeBtn" onClick={props.close}>Close</button>}
      <h1>{props.title}</h1>
      <form>
        <label>Name:</label>
        <input
          name="name"
          placeholder="Bug Name"
          required
          onChange={inputChanged}
          value={bugObject.name || ""} 
        ></input>
        <label>Details</label>
        <textarea
          name="details"
          placeholder="Detailed Description of Bug"
          required
          onChange={inputChanged}
          value={bugObject.details}
        ></textarea>
        <label>Steps:</label>
        <textarea
          name="steps"
          placeholder="Steps to Recreate the Bug"
          required
          onChange={inputChanged}
          value={bugObject.steps}
        ></textarea>
        <label>Priority:</label>
        <select
          name="priority"
          required
          onChange={inputChanged}
          value={bugObject.priority}
        >
          <option value="1">High</option>
          <option value="2">Mid</option>
          <option value="3">Low</option>
        </select>
        <label>Assigned:</label>
        <select name="assigned" onChange={inputChanged} value={bugObject.assigned}>
          <option>Keisha Rosenblatt</option>
          <option>Bill Ryans</option>
          <option>Ramanjit O'Reily</option>


        </select>
        <label>Application Version</label>
        <input
          name="version"
          placeholder="Application Version"
          onChange={inputChanged}
          value={bugObject.version || ""}
        ></input>
        <button type="submit">{props.title}</button>
      </form>
    </div>
  );
};
