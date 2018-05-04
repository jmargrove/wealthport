import React, { Component } from "react";
import styled from "styled-components";
import TableComponent from "./../components/TableComponent.js";

const ViewContentContainer = styled.div`
  width: 100%;
  height: 750px;
  background-color: LightCoral;
`;

const AddDictionaryContainer = styled.div`
  height: 60px;
  width: 480px;
  margin: 20px;
  margin-bottom: 0;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  &:hover {
    background-color: turquoise;
  }
`;

const TableContainer = styled.div`
  min-height: 600px;
  width: 480px;
  background-color: white;
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
