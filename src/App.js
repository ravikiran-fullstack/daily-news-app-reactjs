import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";

export default class App extends Component {
  name = "ravikiran";
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <NewsComponent></NewsComponent>
      </div>
    );
  }
}
