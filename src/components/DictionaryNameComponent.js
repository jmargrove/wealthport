import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = state => ({
  viewItem: state.viewItem
});

const ViewItem = styled.div`font-size: 25px;`;

class DictionaryNameComponent extends Component {
  render() {
    return <ViewItem>{this.props.viewItem}</ViewItem>;
  }
}

export default connect(mapStateToProps, null)(DictionaryNameComponent);
