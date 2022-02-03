import React, { Component } from "react";

import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  name = "ravikiran";
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>

          <Switch>
            <Route path='/' exact>
              <NewsComponent
                key='general'
                pageSize={5}
                country='in'
                category='general'
              ></NewsComponent>
            </Route>
            <Route path='/business' exact>
              <NewsComponent
                key='business'
                pageSize={5}
                country='in'
                category='business'
              ></NewsComponent>
            </Route>
            <Route path='/entertainment' exact>
              <NewsComponent
                key='entertainment'
                pageSize={5}
                country='in'
                category='entertainment'
              ></NewsComponent>
            </Route>
            <Route path='/health' exact>
              <NewsComponent
                key='health'
                pageSize={5}
                country='in'
                category='health'
              ></NewsComponent>
            </Route>
            <Route path='/science' exact>
              <NewsComponent
                key='science'
                pageSize={5}
                country='in'
                category='science'
              ></NewsComponent>
            </Route>
            <Route path='/sports' exact>
              <NewsComponent
                key='sports'
                pageSize={5}
                country='in'
                category='sports'
              ></NewsComponent>
            </Route>
            <Route path='/technology' exact>
              <NewsComponent
                key='technology'
                pageSize={5}
                country='in'
                category='technology'
              ></NewsComponent>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
