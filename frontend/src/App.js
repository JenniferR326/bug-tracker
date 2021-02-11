import React from "react";
import { useSelector } from "react-redux";
import Login from "./views/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./views/sidebar/sidebar";
import ViewBugPage from "./views/pages/viewBugs";
import CreateBug from "./views/Components/BugCreate/bugForm"
import Dashboard from "./views/pages/dashboard/dashboard"

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.LoggedIn ? 
        <Login />
       : 
        <>
          <Sidebar />
          <Switch>
            <Route exact path="/">
            <Dashboard /> 
            </Route>
            <Route path="/viewbugs">
              <ViewBugPage />
            </Route>
            <Route path="/createbug">
              <div className="pageContainer">
              <CreateBug title="Create Bug" />
              </div>
              </Route>
          </Switch>
        </>
      }
    </Router>
  );
}

export default App;
