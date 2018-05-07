export const addNewDictionary = (name: string) => {
  return {
    type: "ADD_NEW_DICTIONARY_NAME",
    name: name
  };
};

export const changeViewItem = viewItem => {
  return {
    type: "CHANGE_VIEW_ITEM",
    viewItem: viewItem
  };
};

export const deleteRow = obj => {
  return {
    type: "DELETE_ROW",
    content: obj
  };
};

export const EditRow = obj => {
  console.log(obj, "djhbkhdasbkjvcshbfhbv");
  return {
    type: "EDIT_ROW",
    content: obj
  };
};

//"Duplicate Rows", "Duplicate Domains", "Cycles", "Chain";

export const testDuplicateRows = dic => {
  console.log("action fired rows");
  return {
    type: "TEST_DUPLICATE_ROWS",
    dictionary: dic
  };
};

export const testDuplicateDomains = dic => {
  console.log("action fired domains");
  return {
    type: "TEST_DUPLICATE_DOMAINS",
    dictionary: dic
  };
};

export const testCycles = dic => {
  console.log("action fired cycles");
  return {
    type: "TEST_CYCLES",
    dictionary: dic
  };
};

export const testChain = dic => {
  console.log("action fired chain");
  return {
    type: "TEST_CHAIN",
    dictionary: dic
  };
};
