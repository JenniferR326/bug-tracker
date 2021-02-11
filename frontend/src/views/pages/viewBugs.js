/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../controllers/redux/bugSlice";
import BugCard from "../BugCard/bugCard";
import BugView from "../Components/BugView/bugView"


export default (props) => {
  const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
    name: "",
    isDisplayed: false
  })
  const dispatch = useDispatch();
  const { bugs } = useSelector((state) => state);

  //only run if there are bugs, otherwise don't run
  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  function bugClicked(name) {
    SET_DISPLAY_BUG({
      isDisplayed: !DISPLAY_BUG.isDisplayed,
      name: name
    })
  }
  return (
    <div className="pageContainer">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={bugClicked} />
      ))}
      {DISPLAY_BUG.isDisplayed && <BugView clicked={bugClicked} bug={bugs.filter((bug)=> bug.name === DISPLAY_BUG.name)[0]}/>}
    </div>
  );
};
