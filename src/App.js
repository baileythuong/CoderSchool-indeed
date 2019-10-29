import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import NavigationBar from './components/NavigationBar'
import Homepage from "./views/Homepage.js";
import Candidates from "./views/Candidates.js";
import Company from "./views/Company.js";
import EditCandidate from "./views/EditCandidate";
import Login from "./views/Login";
import Welcome from "./views/Welcome";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/login/welcome" exact component={Welcome}/>
        <Route path="/candidates" exact component={Candidates}/>
        <Route path="/company" exact component={Company}/>
        <Route path="/candidate/:id" exact component={EditCandidate}/>
      </Switch>
    </div>
  );
}

export default App;
