import React, { Component } from "react";
import Header from "./presentational/Header.js";
import styled from "styled-components";
import Dictionaries from "./presentational/Dictionaries.js";
import "./App.css";

const Body = styled.div`
  width: 100vw;
  height: 750px;
  background-color: orange;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body>
          <Dictionaries />
        </Body>
      </div>
    );
  }
}

export default App;
