import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../src/components/layout/main";
import Register from "../src/components/register";
import Login from "../src/components/login";
import Movie from "../src/components/movie";
import Home from "../src/components/layout/home";
const token = JSON.parse(sessionStorage.getItem("persisted_state_hook:token"));
const App = props => {
  return (
    <Router>
      <Switch>
        <Main>
          {(() => {
            if (!token) {
              return (
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                </Switch>
              );
            } else {
              return (
                <>
                  <Switch>
                    {/* <Route exact path="/register" component={Register} /> */}
                    <Route path="/movies" component={Movie} />
                  </Switch>
                </>
              );
            }
          })()}
        </Main>
      </Switch>
    </Router>
  );
};

export default App;
