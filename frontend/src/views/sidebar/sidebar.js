/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link, Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../controllers/redux/authSlice";
import "./sidebar.css";

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  function SignOut() {
    dispatch(signOut());
  }
  return (
    <div className="sidebar">
      <Link className="navLink" to="/">
        <h1 className="brand">Bug Tracker</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" className="navLink">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/viewbugs" className="navLink">
            View Bugs
          </Link>
        </li>
        {auth.admin && (
          <li>
            <Link to="/createbug" className="navLink">
              Create Bug
            </Link>
          </li>
        )}
      </ul>
      <button className="navLink logout" onClick={SignOut}>
        Log Out
      </button>
    </div>
  );
};
