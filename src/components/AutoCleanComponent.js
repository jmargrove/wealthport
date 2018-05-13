import React, { Component } from "react";
import { connect } from "react-redux";
import { DelBox } from "./../presentational/Containers.js";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import { deleteErrorAuto } from "./../actions/actions.js";

//description: component icon for triggering the autoclean for duplicate rows

const mapDispatchToProps = dispatch => ({
  deleteErrorAuto: obj => dispatch(deleteErrorAuto(obj))
});

class AutoCleanComponent extends Component {
  render () {
    return (
      <DelBox>
        <DeleteForeverIcon
          onClick={() =>
            this.props.deleteErrorAuto({
              dictionary: this.props.dictionary,
              testType: this.props.el
            })}
        />
      </DelBox>
    );
  }
}

export default connect(null, mapDispatchToProps)(AutoCleanComponent);
