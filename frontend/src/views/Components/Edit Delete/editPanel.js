/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import "./editPanel.css"


export default (props) => {
  return (
    <div className="editPanel">
    <button onClick={props.editClicked}>Edit</button>
    <button onClick={props.deleteClicked}>Delete</button>
    </div>
  )
}