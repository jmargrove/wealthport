import React, { Component } from "react";
import styled from "styled-components";
import ValidationComponents from "./../components/ValidationComponents.js";
const TestsContainer = styled.div`width: 300px;`;

const TestsHeader = styled.div`
  height: 60px;
  width: 260px;
  margin: 20px;
  margin-bottom: 0;
  background-color: #5299d3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestsConsoleContainer = styled.div`
  width: 260px;
  height: 368px;
  margin: 20px;
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
`;

const ValidationTestsContainer = styled.div`
  width: 256px;
  height: 300px;
  margin: 2px;
  margin-top: 0;
  background-color: lightgrey;
`;

const FilterContainer = styled.div`
  width: 256px;
  height: 162px;
  margin: 2px;
  margin-top: 0;
  background-color: white;
`;

class Tests extends Component {
  render() {
    return (
      <TestsContainer>
        <TestsHeader>
          <div> Tests Console</div>
        </TestsHeader>
        <TestsConsoleContainer>
          <ValidationHeaderContainer>
            <h3>V a l i d a t i o n</h3>
          </ValidationHeaderContainer>
          <ValidationTestsContainer>
            <ValidationComponents />
          </ValidationTestsContainer>
          <FilterContainer />
        </TestsConsoleContainer>
      </TestsContainer>
    );
  }
}

export default Tests;
