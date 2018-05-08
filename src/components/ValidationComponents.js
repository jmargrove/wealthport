import React, { Component } from "react";
import styled from "styled-components";
import ContentDuplicateIcon from "mdi-react/ContentDuplicateIcon";
import SyncIcon from "mdi-react/SyncIcon";
import AtomIcon from "mdi-react/AtomIcon";
import { connect } from "react-redux";
import { testDuplicateRows } from "./../actions.js";
import { testDuplicateDomains } from "./../actions.js";
import { testCycles } from "./../actions.js";
import { testChain } from "./../actions.js";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { deleteErrorAuto } from "../actions.js";

const mapDispatchToProps = dispatch => ({
  testDuplicateRows: dictionary => dispatch(testDuplicateRows(dictionary)),
  testDuplicateDomains: dictionary =>
    dispatch(testDuplicateDomains(dictionary)),
  testCycles: dictionary => dispatch(testCycles(dictionary)),
  testChain: dictionary => dispatch(testChain(dictionary)),
  deleteErrorAuto: obj => dispatch(deleteErrorAuto(obj))
});

const mapStateToProps = state => ({
  dictionary: state.viewDictionary
});

const TestContainer = styled.div`
  width: 248px;
  height: 50px;
  background-color: white;
  border-color: black;
  border: solid;
  border-width: thin;
  border-radius: 3px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextTestType = styled.div`margin-left: 5px;`;

const Box = styled.div`
  width: 25px;
  height: 25px;
  border: solid;
  border-width: thin;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:hover {
    background-color: #8bbf9f;
  }
`;

const DelBox = Box.extend`
  &:hover {
    background-color: #db5461;
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

  whichTestToDispatch = (whichTestDispatch, dictionary) => {
    switch (whichTestDispatch) {
      case "Duplicate Rows": {
        this.props.testDuplicateRows(dictionary);
        break;
      }
      case "Duplicate Domains": {
        this.props.testDuplicateDomains(dictionary);
        break;
      }
      case "Cycles": {
        this.props.testCycles(dictionary);
        break;
      }
      case "Chain": {
        this.props.testChain(dictionary);
        break;
      }
      default:
        return null;
    }
  };
  buttonIsHovered = false;
  setButtonHovered = bool => {
    this.buttonIsHovered = bool;
  };

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
          <div
            style={{
              width: "65px",
              display: "flex",
              paddingRight: "5px",
              justifyContent: "flex-end",
              flexDirection: "space-between"
            }}
          >
            {i < 1 ? (
              <DelBox>
                {console.log("this is here", this)}
                <DeleteForeverIcon
                  onClick={() =>
                    this.props.deleteErrorAuto({
                      dictionary: this.props.dictionary,
                      testType: el
                    })}
                />
              </DelBox>
            ) : null}

            <Box
              style={{
                marginLeft: "5px"
              }}
              onClick={() =>
                this.whichTestToDispatch(el, this.props.dictionary)}
            >
              {this.iconSelection(el)}
            </Box>
          </div>
        </TestContainer>
      );
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ValidationComponents
);
