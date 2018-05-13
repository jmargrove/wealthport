import React, { Component } from "react";
import ContentDuplicateIcon from "mdi-react/ContentDuplicateIcon";
import SyncIcon from "mdi-react/SyncIcon";
import AtomIcon from "mdi-react/AtomIcon";

//description: renders 1 of 4 icons depending on which tests is passed, used in
// validation component

class IconSelect extends Component {
  render () {
    switch (this.props.whichTest) {
    case "duplicate row": {
      return <ContentDuplicateIcon />;
    }
    case "duplicate domain": {
      return <div>D2</div>;
    }
    case "cycle": {
      return <SyncIcon />;
    }
    case "chain": {
      return <AtomIcon />;
    }
    default:
      return null;
    }
  }
}

export default IconSelect;
