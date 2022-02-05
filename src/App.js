import React, { Component } from "react";

import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  apiKey = process.env.REACT_APP_NEWS_API;

  setProgress = (progress) => {
    console.log(
      "process.env.REACT_APP_NEWS_API",
      process.env.REACT_APP_NEWS_API
    );
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Switch>
            <Route path='/' exact>
              <NewsComponent
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key='general'
                pageSize={6}
                country='in'
                category='general'
              ></NewsComponent>
            </Route>
            <Route path='/business' exact>
              <NewsComponent
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key='business'
                pageSize={6}
                country='in'
                category='business'
              ></NewsComponent>
            </Route>
            <Route path='/entertainment' exact>
              <NewsComponent
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key='entertainment'
                pageSize={6}
                country='in'
                category='entertainment'
              ></NewsComponent>
            </Route>
            <Route path='/health' exact>
              <NewsComponent
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key='health'
                pageSize={5}
                country='in'
                category='health'
              ></NewsComponent>
            </Route>
            <Route path='/science' exact>
              <NewsComponent
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key='science'
                pageSize={5}
                country='in'
                category='science'
              ></NewsComponent>
            </Route>
            <Route path='/sports' exact>
              <NewsComponent
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key='sports'
                pageSize={5}
                country='in'
                category='sports'
              ></NewsComponent>
            </Route>
            <Route path='/technology' exact>
              <NewsComponent
                setProgress={this.setProgress}
                apiKey={this.apiKey}
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
