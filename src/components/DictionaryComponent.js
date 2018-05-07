import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeViewItem } from "../actions.js";
import { deleteDictionary } from "../actions.js";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";

const ItemContainer = styled.div`
  display: flex;
  margin: 20px;
  height: 75px;
  max-width: 260px;
  background-color: lightgrey;
  border: solid;
  border-color: black;
  border-radius: 3px;
  cursor: grab;
  border-width: thin;
  &:hover {
    background-color: #8bbf9f;
  }
`;

const ItemName = styled.div`
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

const Box = styled.div`
  height: 20px;
  width: 20px;
  margin: 5px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: thin;
  border-radius: 2px;
  cursor: grab;
  &:hover {
    background-color: #db5461;
  }
`;

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
            <Box onClick={() => this.props.deleteDictionary(el)}>
              <DeleteForeverIcon />
            </Box>
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
