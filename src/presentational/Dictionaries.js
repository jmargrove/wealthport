import React, { Component } from "react";
import styled from "styled-components";
import DictionaryComponent from "../components/DictionaryComponent.js";
import AddDictionaryComponent from "../components/AddDictionaryComponent.js";

const DictionaryContainer = styled.div`
  width: 300px;
  height: 750px;
  background-color: blue;
  display: flex;
  flex-direction: column;
`;

const DictionaryList = styled.div`
  min-height: 600px;
  width: 240px;
  background-colorwhite;
  margin: 20px;
`;

class Dictionaries extends Component {
  render() {
    return (
      <DictionaryContainer>
        <AddDictionaryComponent />
        <DictionaryList>
          <DictionaryComponent />
        </DictionaryList>
      </DictionaryContainer>
    );
  }
}

export default Dictionaries;
