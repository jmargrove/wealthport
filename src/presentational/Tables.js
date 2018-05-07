import React, { Component } from "react";
import styled from "styled-components";
import TableComponent from "./../components/TableComponent.js";
import DictionaryNameComponent from "./../components/DictionaryNameComponent";

const ViewContentContainer = styled.div`
  width: 540px;
  height: 750px;
  background-color: purple;
`;

const AddDictionaryContainer = styled.div`
  height: 60px;
  width: 500px;
  margin: 20px;
  margin-bottom: 0;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:hover {
    background-color: grey;
  }
`;

const TableContainer = styled.div`
  display: flex;
  min-height: 600px;
  width: 500px;
  background-color: white;
  margin: 20px;
`;

class Tables extends Component {
  render() {
    return (
      <ViewContentContainer>
        <AddDictionaryContainer>
          <DictionaryNameComponent />
        </AddDictionaryContainer>
        <TableContainer>
          <TableComponent />
        </TableContainer>
      </ViewContentContainer>
    );
  }
}

export default Tables;
