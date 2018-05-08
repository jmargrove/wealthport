import React, { Component } from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import styled from "styled-components";
import ArrowRightThick from "mdi-react/ArrowRightThickIcon";
import ArrowLeftThick from "mdi-react/ArrowLeftThickIcon";
import TableElementComponent from "./TableElementComponent.js";
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
      toggleDelete: false
    };
  }

  handleDataChange = () => {
    this.setState({
      dataFrame: this.props.data[this.props.viewItem]
    });
  };

  render() {
    const data = this.props.data[this.props.viewItem];
    const emptyArray = Array.apply(null, { length: 14 });

    return (
      <TableBounds>
        <table>
          <tbody>
            <tr>
              <TableHeader>D o m a i n</TableHeader>
              <TableHeader>R a n g e</TableHeader>
            </tr>
          </tbody>
          {emptyArray.map((el, i) => {
            return (
              <TableElementComponent
                toggleDelete={this.handleDeletePopUp}
                key={i}
                dictionary={this.props.viewItem}
                i={i}
                domain={data[i] ? data[i].domain : ""}
                range={data[i] ? data[i].range : ""}
                testResult={data[i] ? data[i].testResult : ""}
              />
            );
          })}
        </table>
        {/* <div
          style={{
            marginLeft: "2px",
            width: "492px",
            height: "80px",
            backgroundColor: "white",
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
        </div> */}
      </TableBounds>
    );
  }
}
//
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

const TableBounds = styled.div`
  width: 500px;
  height: 482px;
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
