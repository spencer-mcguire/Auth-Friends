import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Friends - Friends</h1>
      </header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
