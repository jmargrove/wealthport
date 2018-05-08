import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = state => ({
  viewDictionary: state.viewDictionary
});

const ViewDictionary = styled.p`
  font-size: 25px;
  background-color: #5299d3;
`;

class DictionaryNameComponent extends Component {
  render() {
    return (
      <ViewDictionary>{this.props.viewDictionary.toUpperCase()}</ViewDictionary>
    );
  }
}

export default connect(mapStateToProps, null)(DictionaryNameComponent);
