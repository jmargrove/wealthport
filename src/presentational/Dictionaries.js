import React, { Component } from "react";
import styled from "styled-components";
import DictionaryComponent from "../components/DictionaryComponent.js";

const DictionaryContainer = styled.div`
  width: 300px;
  height: 750px;
  background-color: blue;
  display: flex;
`;

const DictionaryList = styled.div`
  flex: 1;
  margin: 30px;
  background-color: red;
`;

class Dictionaries extends Component {
  render() {
    return (
      <DictionaryContainer>
        <DictionaryList>
          <DictionaryComponent />
        </DictionaryList>
      </DictionaryContainer>
    );
  }
}

export default Dictionaries;
