import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeViewItem } from "../actions.js";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 75px;
  max-width: 260px;
  background-color: white;
  border-width: thin;
  border: solid;
  border-color: grey;
  cursor: grab;
  &:hover {
    background-color: lightgrey;
  }
`;

const ItemName = styled.div`
  position: absolute;
  z-index: 99;
  font-size: 20px;
  font-weight: bold;
`;

const DomRanText = styled.p`
  font-size: 10px;
  color: lightgrey;
  transform: rotate(-45deg);
`;

const mapStateToProps = state => ({
  dictionaries: state.dictionaries
});

const mapDispatchToProps = dispatch => ({
  changeViewItem: item => dispatch(changeViewItem(item))
});

const DictionaryItems = props => {
  console.log("props", props);
  const array = Object.getOwnPropertyNames(props.dictionaries);
  return array.map((el, i) => {
    return (
      <ItemContainer
        ref={val => (this.ref = val)}
        key={i}
        onClick={() => props.changeView(el)}
      >
        <ItemName>{el}</ItemName>
      </ItemContainer>
    );
  });
};

class DictionaryComponent extends Component {
  render() {
    console.log(this.props.dictionaries);
    const dictionaries = this.props.dictionaries;
    return (
      <DictionaryItems
        changeView={this.props.changeViewItem}
        dictionaries={dictionaries}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DictionaryComponent
);
