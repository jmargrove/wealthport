import React, { Component } from "react";
import { connect } from "react-redux";
import { ClickBox } from "./../presentational/Containers.js";
import IconSelect from "./../presentational/IconSelect.js";
import {
  testDuplicateRows,
  testDuplicateDomains,
  testCycles,
  testChain
} from "./../actions/actions.js";

//description: Validation element, shows test, and button to execute test

const mapDispatchToProps = dispatch => ({
  testDuplicateRows: testObj => dispatch(testDuplicateRows(testObj)),
  testDuplicateDomains: testObj => dispatch(testDuplicateDomains(testObj)),
  testCycles: testObj => dispatch(testCycles(testObj)),
  testChain: testObj => dispatch(testChain(testObj))
});

class ValidationElementComponent extends Component {
  whichTestToDispatch = (whichTestDispatch, dictionary) => {
    const dispatchObj = { dictionary: dictionary, test: whichTestDispatch };
    switch (whichTestDispatch) {
    case "duplicate row": {
      this.props.testDuplicateRows(dispatchObj);
      break;
    }
    case "duplicate domain": {
      this.props.testDuplicateDomains(dispatchObj);
      break;
    }
    case "cycle": {
      this.props.testCycles(dispatchObj);
      break;
    }
    case "chain": {
      this.props.testChain(dispatchObj);
      break;
    }
    default:
      return null;
    }
  };
  render () {
    return (
      <ClickBox
        style={{
          marginLeft: "5px"
        }}
        onClick={() =>
          this.whichTestToDispatch(this.props.el, this.props.dictionary)}
      >
        <IconSelect whichTest={this.props.el} />
      </ClickBox>
    );
  }
}

export default connect(null, mapDispatchToProps)(ValidationElementComponent);
