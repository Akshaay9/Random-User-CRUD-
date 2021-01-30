import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompleteIds from "./CompleteIds";
import IncompleteIds from "./IncompleteIds";
import "./app.scss";
import NavBarTop from "./NavTopBar";
function App() {
  return (
    <Router>
      <NavBarTop />
      <Route exact path="/incompleteids" component={IncompleteIds} />
      <Route exact path="/" component={CompleteIds} />
    </Router>
  );
}

export default App;
