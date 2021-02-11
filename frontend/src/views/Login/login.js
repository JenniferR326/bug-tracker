/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../controllers/redux/authSlice'

import './login.css'

export default () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: "",
    password: ""
  })

  function inputChanged(evt) {
    setFormInput({
      ...formInput, 
      [evt.target.name]: evt.target.value
    })
  }

  function submit(evt) {
    dispatch(signIn(formInput));
    evt.preventDefault()
  }

  return (
    <div className="loginBG">
      <form className="loginPanel">
        <h1>Login</h1>
        <input name="name" placeholder="name" onChange={inputChanged} value={formInput.name}/>
        <input name="password" type="password" placeholder="password" onChange={inputChanged} value={formInput.password}/>
        <button type="submit" onClick={submit}>Login</button>

      </form>
    </div>
  )
}