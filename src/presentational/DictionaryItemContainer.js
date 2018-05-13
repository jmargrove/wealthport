import React, { Component } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  background-color: white;
  border: solid;
  border-color: black;
  border-radius: 3px;
  cursor: pointer;
  border-width: thin;
  box-shadow: 1px 1px 5px 0 grey;
  transition: height 200ms 0ms, width 200ms 0ms;
  &:hover {
    background-color: #8bbf9f;
    box-shadow: 2px 2px 10px 0 grey;
  }
`;

class DictionaryItemContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      width: "200px",
      height: "80px"
    };
  }

  render () {
    const el = this.props.el;
    const viewingDictionary = el === this.props.viewDictionary;
    return (
      <ItemContainer
        onMouseOut={() => this.setState({ width: "200px", height: "80px" })}
        onMouseOver={() => this.setState({ width: "205px", height: "85px" })}
        style={{
          width: this.state.width,
          height: this.state.height,
          backgroundColor: viewingDictionary ? "#40a065" : null
        }}
      >
        {this.props.children}
      </ItemContainer>
    );
  }
}

export default DictionaryItemContainer;
