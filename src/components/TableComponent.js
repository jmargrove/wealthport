import React, { Component } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import "react-table/react-table.css";

const mapStateToProps = (state: object) => ({
  data: state.dictionaries
});

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewItem: "colors"
    };
  }

  handleData = (data: array) => {
    const filterData = data.filter(el => {
      return Object.getOwnPropertyNames(el)[0] === this.state.viewItem;
    });
    return filterData[0][this.state.viewItem].domain.map((dom, i) => {
      return {
        domain: dom,
        range: filterData[0][this.state.viewItem].range[i]
      };
    });
  };

  render() {
    const data = this.handleData(this.props.data);
    console.log(data);
    return (
      <div>
        <ReactTable
          contentEditable
          data={data}
          columns={[
            {
              Header: "Domain",
              accessor: "domain"
            },
            {
              Header: "Range",
              accessor: "range"
            }
          ]}
          defaultPageSize={14}
        />
        <br />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(TableComponent);
