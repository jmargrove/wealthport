import React, { Component } from "react";
import styled from "styled-components";
import ValidationComponent from "./../components/ValidationComponents.js";

//description: displays the validation pannel and tests on right pannel

const TestsHeader = styled.div`
  height: 60px;
  width: 260px;
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

const TestsConsoleContainer = styled.div`
  width: 260px;
  height: 268px;
  margin: 20px;
  background-color: grey;
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const ValidationHeaderContainer = styled.div`
  width: 256px;
  height: 50px;
  margin: 2px;
  background-color: #ababab;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 0 grey;
`;

const ValidationTestsContainer = styled.div`
  width: 256px;
  height: 300px;
  margin: 2px;
  margin-top: 0;
  background-color: lightgrey;
`;

class Tests extends Component {
  render () {
    return (
      <div style={{ width: "300px" }}>
        <TestsHeader>
          <div> Tests Console</div>
        </TestsHeader>
        <TestsConsoleContainer>
          <ValidationHeaderContainer>
            <h3>V a l i d a t i o n</h3>
          </ValidationHeaderContainer>
          <ValidationTestsContainer>
            <ValidationComponent />
          </ValidationTestsContainer>
        </TestsConsoleContainer>
      </div>
    );
  }
}

export default Tests;
