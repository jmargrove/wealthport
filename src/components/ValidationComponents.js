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
import { ClickBox, DelBox } from "./../presentational/Containers.js";

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
  box-shadow: 2px 2px 5px 0 grey;
`;

class ValidationComponent extends Component {
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

  render() {
    const testTypeArray = [
      "Duplicate Rows",
      "Duplicate Domains",
      "Cycles",
      "Chain"
    ];
    return testTypeArray.map((el, i) => {
      return (
        <TestContainer key={i + el}>
          <p style={{ marginLeft: "5px" }}>{el}</p>
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
                <DeleteForeverIcon
                  onClick={() =>
                    this.props.deleteErrorAuto({
                      dictionary: this.props.dictionary,
                      testType: el
                    })}
                />
              </DelBox>
            ) : null}

            <ClickBox
              style={{
                marginLeft: "5px"
              }}
              onClick={() =>
                this.whichTestToDispatch(el, this.props.dictionary)}
            >
              {this.iconSelection(el)}
            </ClickBox>
          </div>
        </TestContainer>
      );
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ValidationComponent
);
