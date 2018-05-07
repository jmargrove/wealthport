import React, { Component } from "react";
import styled from "styled-components";
import ContentDuplicateIcon from "mdi-react/ContentDuplicateIcon";
import SyncIcon from "mdi-react/SyncIcon";
import AtomIcon from "mdi-react/AtomIcon";

const TestContainer = styled.div`
  width: 252px;
  height: 50px;
  background-color: green;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextTestType = styled.div`margin-left: 5px;`;

const Box = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
  margin-right: 10px;
  border: solid;
  border-width: thin;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
  }
`;

class ValidationComponents extends Component {
  iconSelection = whichTest => {
    switch (whichTest) {
      case "Duplicate Rows": {
        return <ContentDuplicateIcon />;
      }
      case "Duplicate Domains": {
        return <div>D2</div>;
      }
      case "Cycles": {
        return <SyncIcon />;
      }
      case "Chain": {
        return <AtomIcon />;
      }
      default:
        return null;
    }
  };

  handleClickTest(testType) {
    console.log("this is the clicker", testType);
  }

  render() {
    return [
      "Duplicate Rows",
      "Duplicate Domains",
      "Cycles",
      "Chain"
    ].map((el, i) => {
      return (
        <TestContainer key={i + el}>
          <TextTestType>{el}</TextTestType>
          <Box onClick={() => this.handleClickTest(el)}>
            {this.iconSelection(el)}
          </Box>
        </TestContainer>
      );
    });
  }
}

export default ValidationComponents;
