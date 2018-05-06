import React, { Component } from "react";
import styled from "styled-components";
import TableComponent from "./../components/TableComponent.js";

const ViewContentContainer = styled.div`
  width: 100%;
  height: 750px;
  background-color: red;
`;

const AddDictionaryContainer = styled.div`
  height: 60px;
  width: 500px;
  margin: 20px;
  margin-bottom: 0;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:hover {
    background-color: white;
  }
`;

const TableContainer = styled.div`
  display: flex;
  min-height: 600px;
  width: 500px;
  background-color: orange;
  margin: 20px;
`;

class Tables extends Component {
  render() {
    return (
      <ViewContentContainer>
        <AddDictionaryContainer />
        <TableContainer>
          <TableComponent />
        </TableContainer>
      </ViewContentContainer>
    );
  }
}

export default Tables;
