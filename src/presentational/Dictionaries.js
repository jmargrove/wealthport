import React, { Component } from "react";
import styled from "styled-components";
import DictionaryComponent from "../components/DictionaryComponent.js";
import AddDictionary from "./AddDictionary.js";

const DictionaryContainer = styled.div`
  width: 280px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

const DictionaryList = styled.div`
  height: 400px;
  width: 240px;
  background-color: white;
  margin: 20px;
  border: solid;
  border-width: thin;
  overflow-y: auto;
`;

const DictionaryTitle = styled.div`
  height: 60px;
  width: 240px;
  margin: 20px;
  margin-bottom: 0;
  background-color: #5299d3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid;
  border-top: solid;
  border-width: thin;
  border-color: black;
`;

class Dictionaries extends Component {
  render () {
    return (
      <DictionaryContainer>
        <DictionaryTitle>Avalible Dictionaries </DictionaryTitle>
        <DictionaryList>
          <DictionaryComponent />
        </DictionaryList>
        <AddDictionary />
      </DictionaryContainer>
    );
  }
}

export default Dictionaries;
