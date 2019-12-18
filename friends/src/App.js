import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Friends - Friends</h1>
      </header>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
