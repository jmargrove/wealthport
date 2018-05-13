import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeViewDictionary } from "./../actions/actions.js";
import { deleteDictionary } from "./../actions/actions.js";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { DelBox } from "./../presentational/Containers.js";
import DictionaryItemContainer from "./../presentational/DictionaryItemContainer.js";
//description: list items of dictionaries, with delete icon.

const ElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  margin-left: 10px;
  height: 90px;
  width: 220px;
`;

const ItemName = styled.p`
  z-index: 99;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

const mapStateToProps = state => ({
  dictionaries: state.reducer.dictionaries,
  viewDictionary: state.reducer.viewDictionary
});

const mapDispatchToProps = dispatch => ({
  changeViewDictionary: item => dispatch(changeViewDictionary(item)),
  deleteDictionary: name => dispatch(deleteDictionary(name))
});

class DictionaryComponent extends Component {
  DictionaryItems = () => {
    const array = Object.getOwnPropertyNames(this.props.dictionaries);
    return array.reverse().map((el, i) => {
      return (
        <ElementContainer key={i + el}>
          <DictionaryItemContainer
            el={el}
            viewDictionary={this.props.viewDictionary}
          >
            <div
              style={{
                flex: 1
              }}
            >
              <DelBox
                style={{ margin: "5px" }}
                onClick={() => this.props.deleteDictionary(el)}
              >
                <DeleteForeverIcon />
              </DelBox>
            </div>
            <div
              onClick={() => this.props.changeViewDictionary(el)}
              style={{
                flex: 6,
                display: "Flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ItemName>{el}</ItemName>
            </div>
          </DictionaryItemContainer>
        </ElementContainer>
      );
    });
  };

  render () {
    return <div>{this.DictionaryItems()}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  DictionaryComponent
);
