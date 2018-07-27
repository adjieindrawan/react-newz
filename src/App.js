import React, { Component } from "react";
import { Container } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import CardNews from "./components/CardNews";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
          <CardNews />
        </Container>
      </div>
    );
  }
}

export default App;
