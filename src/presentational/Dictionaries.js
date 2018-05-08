import React, { Component } from "react";
import styled from "styled-components";
import DictionaryComponent from "../components/DictionaryComponent.js";
import AddDictionaryComponent from "../components/AddDictionaryComponent.js";

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
  background: linear-gradient(#5299d3, #4683b5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid;
  border-top: solid;
  border-width: thin;
  border-color: black;
`;

class Dictionaries extends Component {
  render() {
    return (
      <DictionaryContainer>
        <DictionaryTitle>Avalible Dictionaries </DictionaryTitle>
        <DictionaryList>
          <DictionaryComponent />
        </DictionaryList>
        <AddDictionaryComponent />
      </DictionaryContainer>
    );
  }
}

export default Dictionaries;
