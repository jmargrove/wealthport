import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 75px;
  max-width: 260px;
  background-color: white;
  cursor: grab;
  &:hover {
    background-color: rgba(160, 234, 222, 0.95);
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

const DictionaryItems = props => {
  return props.dictionaries.map((el, i) => {
    return (
      <ItemContainer key={i}>
        {el[Object.getOwnPropertyNames(el)[0]].domain.map(dom => {
          return <DomRanText>{dom}</DomRanText>;
        })}
        {el[Object.getOwnPropertyNames(el)[0]].range.map(ran => {
          return <DomRanText>{ran}</DomRanText>;
        })}
        <ItemName>{Object.getOwnPropertyNames(el)[0]} </ItemName>
      </ItemContainer>
    );
  });
};

class DictionaryComponent extends Component {
  render() {
    const dictionaries = this.props.dictionaries;
    return <DictionaryItems dictionaries={dictionaries} />;
  }
}

export default connect(mapStateToProps, null)(DictionaryComponent);
