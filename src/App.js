import React, { Component } from "react";
import Header from "./presentational/Header.js";
import styled from "styled-components";
import Dictionaries from "./presentational/Dictionaries.js";
import Tables from "./presentational/Tables.js";
import "./App.css";

const Body = styled.div`
  width: 100vw;
  height: 750px;
  background-color: purple;
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body>
          <Dictionaries />
          <Tables />
        </Body>
      </div>
    );
  }
}

export default App;
