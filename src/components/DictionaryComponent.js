import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeViewItem } from "../actions.js";
import { deleteDictionary } from "../actions.js";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { DelBox } from "./../presentational/Containers.js";

const ItemContainer = styled.div`
  padding-top: 5px;
  display: flex;
  margin: 20px;
  height: 75px;
  max-width: 260px;
  background-color: white;
  border: solid;
  border-color: black;
  border-radius: 3px;
  cursor: pointer;
  border-width: thin;
  box-shadow: 1px 1px 5px 0 grey;
  &:hover {
    background-color: #8bbf9f;
    box-shadow: 2px 2px 10px 0 grey;
  }
`;

const ItemName = styled.p`
  z-index: 99;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

const mapStateToProps = state => ({
  dictionaries: state.dictionaries
});

const mapDispatchToProps = dispatch => ({
  changeViewItem: item => dispatch(changeViewItem(item)),
  deleteDictionary: name => dispatch(deleteDictionary(name))
});

class DictionaryComponent extends Component {
  DictionaryItems = () => {
    const array = Object.getOwnPropertyNames(this.props.dictionaries);
    return array.map((el, i) => {
      return (
        <ItemContainer key={i}>
          <div
            style={{
              flex: 1
            }}
          >
            <DelBox onClick={() => this.props.deleteDictionary(el)}>
              <DeleteForeverIcon />
            </DelBox>
          </div>
          <div
            onClick={() => this.props.changeViewItem(el)}
            style={{
              flex: 6,
              display: "Flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ItemName>{el}</ItemName>
          </div>
        </ItemContainer>
      );
    });
  };

  render() {
    const dictionaries = this.props.dictionaries;
    return <div>{this.DictionaryItems()}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DictionaryComponent
);
