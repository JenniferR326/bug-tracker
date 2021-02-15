/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import Card from "../../Components/dashboard/card";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import { retrieveBugs } from "../../../controllers/redux/bugSlice";

export default () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);
  const browserHistory = useHistory();
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;
  if (bugs !== undefined) {
    highCount = filterBugs(1);
    midCount = filterBugs(2)
    lowCount = filterBugs(3)
  }

  function redirect(filter) {
    browserHistory.push(`/viewbugs/${filter}`)
  }

  function filterBugs(priority) {
    return bugs.filter((bug) => {
      return bug && (bug.priority === priority);
    });
  }

  useEffect(() => {
    dispatch(retrieveBugs());
  }, [bugs == undefined]);
  return (
    <div className="pageContainer">
      <Card priority="1" count={highCount.length} clicked={()=>redirect("high")}/>
      <Card priority="2" count={midCount.length} clicked={()=>redirect("mid")}/>
      <Card priority="3" count={lowCount.length} clicked={()=>redirect("low")}/>
    </div>
  );
};
