/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Priority from "../../../controllers/priorityController"


import './card.css'

export default (props) => {
  const {level, color} = Priority(props.priority)
  return (
    <div className="dashboardCard" onClick={props.clicked} style={{color: color}}>
      <h2>Total: {level}</h2>
      <p>{props.count}</p>
    </div>
  )
}