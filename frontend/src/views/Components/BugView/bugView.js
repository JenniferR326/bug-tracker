/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import ViewSection from "./component/bugViewSection";
import BugModel from "../../../models/bugModel";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../controllers/redux/bugSlice";
import EditPanel from "../Edit Delete/editPanel";
import EditBug from "../BugCreate/bugForm"

import "./bugView.css";

export default (props) => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);
  const [displayEdit, setDisplayEdit] = useState(false)

  function editClicked() {    
    setDisplayEdit(!displayEdit)
}
  function deleteClicked() {}

  return (
    <>
    <div className="bugView">
      <EditPanel editClicked={editClicked} deleteCicked={deleteClicked} />
      <button className="closeBtn" onClick={props.clicked}>
        Close
      </button>
      <h1>{bug.name}</h1>
      <ViewSection title="Details" info={bug.details} />
      <ViewSection title="Steps" info={bug.steps} />
      <ViewSection title="Priority" info={bug.priority} />
      <ViewSection title="Creator" info={bug.creator} />
      <ViewSection title="App Version" info={bug.version} />
      <ViewSection title="Time Created" info={bug.time} />
      <button
        onClick={() => {
          dispatch(markComplete());
        }}
      >
        Mark Complete
      </button>
    </div>
    {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked} />}
    </>
  );
};
