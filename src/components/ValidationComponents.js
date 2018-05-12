import React, { Component } from "react";
import styled from "styled-components";
import ContentDuplicateIcon from "mdi-react/ContentDuplicateIcon";
import SyncIcon from "mdi-react/SyncIcon";
import AtomIcon from "mdi-react/AtomIcon";
import { connect } from "react-redux";
import { testDuplicateRows } from "./../actions/actions.js";
import { testDuplicateDomains } from "./../actions/actions.js";
import { testCycles } from "./../actions/actions.js";
import { testChain } from "./../actions/actions.js";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { deleteErrorAuto } from "./../actions/actions.js";
import { ClickBox, DelBox } from "./../presentational/Containers.js";

const mapDispatchToProps = dispatch => ({
  testDuplicateRows: testObj => dispatch(testDuplicateRows(testObj)),
  testDuplicateDomains: testObj => dispatch(testDuplicateDomains(testObj)),
  testCycles: testObj => dispatch(testCycles(testObj)),
  testChain: testObj => dispatch(testChain(testObj)),
  deleteErrorAuto: obj => dispatch(deleteErrorAuto(obj))
});

const mapStateToProps = state => ({
  dictionary: state.reducer.viewDictionary,
  testType: state.reducer.testType
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
  // select the correct icon to display for each test
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

  // dispatching the correct test
  whichTestToDispatch = (whichTestDispatch, dictionary) => {
    const dispatchObj = { dictionary: dictionary, test: whichTestDispatch };
    switch (whichTestDispatch) {
    case "Duplicate Rows": {
      this.props.testDuplicateRows(dispatchObj);
      break;
    }
    case "Duplicate Domains": {
      this.props.testDuplicateDomains(dispatchObj);
      break;
    }
    case "Cycles": {
      this.props.testCycles(dispatchObj);
      break;
    }
    case "Chain": {
      this.props.testChain(dispatchObj);
      break;
    }
    default:
      return null;
    }
  };

  // returns the correct color: orange week problme, red big problem
  whichColorForTest = testType => {
    if (testType === "") {
      return null;
    } else if (
      testType === "Duplicate Rows" ||
      testType === "Duplicate Domains"
    ) {
      return "#EC9A29";
    } else if (testType === "Cycles" || testType === "Chain") {
      return "#DF2935";
    }
  };

  render () {
    // the test types
    const testTypeArray = [
      "Duplicate Rows",
      "Duplicate Domains",
      "Cycles",
      "Chain"
    ];
    const testType = this.props.testType;
    const backColor = this.whichColorForTest(testType);
    return testTypeArray.map((el, i) => {
      return (
        <TestContainer
          key={i + el}
          style={{
            backgroundColor: testType === el ? backColor : "white"
          }}
        >
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
