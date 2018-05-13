import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import AutoCleanComponent from "./AutoCleanComponent.js";
import ValidationElementComponent from "./ValidationElementComponent.js";
import ValidationContainer from "./../presentational/ValidationContainer.js";

//description: displays the validation tests and which is executed

const mapStateToProps = state => ({
  dictionary: state.reducer.viewDictionary,
  testType: state.reducer.testType
});

const ButtonContainer = styled.div`
  width: 65px;
  display: flex;
  padding-right: 5px;
  justify-content: flex-end;
  flex-direction: space-between;
`;

class ValidationComponent extends Component {
  render () {
    // the test types
    const testTypeArray = [
      "duplicate row",
      "duplicate domain",
      "cycle",
      "chain"
    ];
    return testTypeArray.map((el, i) => {
      return (
        <ValidationContainer
          testType={this.props.testType}
          key={i + el}
          el={el}
        >
          <ButtonContainer>
            {i < 1 ? (
              <AutoCleanComponent el={el} dictionary={this.props.dictionary} />
            ) : null}
            <ValidationElementComponent
              el={el}
              dictionary={this.props.dictionary}
            />
          </ButtonContainer>
        </ValidationContainer>
      );
    });
  }
}

export default connect(mapStateToProps, null)(ValidationComponent);
