/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import "./bugViewSection.css"

export default (props) => {
  return (
    <div className="viewSection">
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  )
}