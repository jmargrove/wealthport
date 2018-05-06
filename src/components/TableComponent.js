import React, { Component } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import "react-table/react-table.css";
import { addDomRag } from "./../actions.js";
import styled from "styled-components";
import ArrowRightThick from "mdi-react/ArrowRightThickIcon";
import ArrowLeftThick from "mdi-react/ArrowLeftThickIcon";
import AddEditCell from "./AddEditCell.js";
import TableElement from "./TableElement.js";
import { deleteRow } from "../actions.js";

const mapStateToProps = state => ({
  data: state.dictionaries,
  viewItem: state.viewItem
});

const mapDispatchToProps = dispatch => ({
  deleteRow: obj => dispatch(deleteRow(obj))
});

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewItem: null,
      dataFrame: [{ domain: "", range: "" }],
      toggleDelete: false,
      itemToDelete: null
    };
  }

  handleDataChange = () => {
    this.setState({
      dataFrame: this.props.data[this.props.viewItem]
    });
  };

  handleDeletePopUp = content => {
    console.log(content);
    this.setState({ itemToDelete: content });
    this.setState({ toggleDelete: true });
  };

  render() {
    console.log(this.state);
    const data = this.props.data[this.props.viewItem];
    console.log("data//////", data);
    return (
      <TableBounds>
        {this.state.toggleDelete ? (
          <DeletePopUp>
            <ConfirmDelete>
              <div>Are you sure delete</div>
              <div
                onClick={() => {
                  this.unEdit;
                  this.setState({ toggleDelete: false });
                  this.props.deleteRow(this.state.itemToDelete);
                }}
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "black"
                }}
              />
            </ConfirmDelete>
          </DeletePopUp>
        ) : null}
        <table>
          <tr>
            <TableHeader>D o m a i n</TableHeader>
            <TableHeader>R a n g e</TableHeader>
          </tr>
          {[0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
            return (
              <TableElement
                toggleDelete={this.handleDeletePopUp}
                key={i}
                dictionary={this.props.viewItem}
                i={i}
                domain={data[i] ? data[i].domain : ""}
                range={data[i] ? data[i].range : ""}
              />
            );
          })}
        </table>
        <div
          style={{
            marginLeft: "2px",
            width: "492px",
            height: "80px",
            backgroundColor: "purple",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "2px",
            paddingRight: "2px"
          }}
        >
          <NavigateTable>
            <ArrowLeftThick />
          </NavigateTable>
          <div>pages: 1</div>
          <NavigateTable>
            <ArrowRightThick />
          </NavigateTable>
        </div>
      </TableBounds>
    );
  }
}
//
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

const DeletePopUp = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ConfirmDelete = styled.div`
  width: 200px;
  height: 100px;
  background-color: white;
`;

const TableBounds = styled.div`
  width: 500px;
  height: 500px;
  background-color: lightgrey;
  font-weight: bold;
`;

const TableHeader = styled.th`
  width: 250px;
  height: 30px;
  background-color: #ababab;
`;

const NavigateTable = styled.div`
  width: 120px;
  height: 76px;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
  }
`;

const ChangeCellValue = styled.input`
  margin: 1px;
  width: 250px;
  height: 30px;
  background-color: white;
  cursor: text;
  &:hover {
    background-color: pink;
  }
`;
