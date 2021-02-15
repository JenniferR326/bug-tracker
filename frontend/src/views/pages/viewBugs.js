/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBugs } from "../../controllers/redux/bugSlice";
import BugCard from "../BugCard/bugCard";
import BugView from "../Components/BugView/bugView"


export default (props) => {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: "",
    isDisplayed: false
  })
  const dispatch = useDispatch();
  let { bugs } = useSelector((state) => state);
  const filter = window.location.pathname.split('/')[2]

  //only run if there are bugs, otherwise don't run
  useEffect(() => {
    dispatch(retrieveBugs());
  }, [bugs.length < 1]);

  function bugClicked(name) {
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isDisplayed,
      name: name
    })
  }
  if (filter === "high") bugs = bugs.filter((bug)=> bug.priority === 1)
  else if (filter === "mid") bugs = bugs.filter((bug) => bug.priority === 2)
  else if (filter === "low") bugs = bugs.filter((bug) => bug.priority === 3)
  return (
    <div className="pageContainer">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={bugClicked} />
      ))}
      {DISPLAY_BUG.isDisplayed && <BugView clicked={bugClicked} bug={bugs.filter((bug)=> bug.name === DISPLAY_BUG.name)[0]}/>}
    </div>
  );
};
