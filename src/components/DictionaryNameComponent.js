import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = state => ({
  viewItem: state.viewItem
});

const ViewItem = styled.p`
  font-size: 25px;
  background-color: #5299d3;
`;

class DictionaryNameComponent extends Component {
  render() {
    return <ViewItem>{this.props.viewItem.toUpperCase()}</ViewItem>;
  }
}

export default connect(mapStateToProps, null)(DictionaryNameComponent);
