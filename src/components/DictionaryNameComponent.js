import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

//description: renders the dictionary name currently being viewed

const mapStateToProps = state => ({
  viewDictionary: state.reducer.viewDictionary
});

const ViewDictionary = styled.p`font-size: 25px;`;

class DictionaryNameComponent extends Component {
  render () {
    if (this.props) {
      return (
        <ViewDictionary>
          {this.props.viewDictionary.toUpperCase()}
        </ViewDictionary>
      );
    }
  }
}

export default connect(mapStateToProps, null)(DictionaryNameComponent);
