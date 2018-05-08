export const addNewDictionary = name => {
  return {
    type: "ADD_NEW_DICTIONARY_NAME",
    name: name
  };
};

export const deleteDictionary = name => {
  return {
    type: "DELETE_DICTIONARY",
    name: name
  };
};

export const changeViewDictionary = viewDictionary => {
  return {
    type: "CHANGE_VIEW_ITEM",
    viewDictionary: viewDictionary
  };
};

export const deleteRow = obj => {
  return {
    type: "DELETE_ROW",
    content: obj
  };
};

export const EditRow = obj => {
  console.log("actions", obj);
  return {
    type: "EDIT_ROW",
    content: obj
  };
};

export const testDuplicateRows = dic => {
  return {
    type: "TEST_DUPLICATE_ROWS",
    dictionary: dic
  };
};

export const testDuplicateDomains = dic => {
  return {
    type: "TEST_DUPLICATE_DOMAINS",
    dictionary: dic
  };
};

export const testCycles = dic => {
  return {
    type: "TEST_CYCLES",
    dictionary: dic
  };
};

export const testChain = dic => {
  return {
    type: "TEST_CHAIN",
    dictionary: dic
  };
};

export const deleteErrorAuto = obj => {
  return {
    type: "DELETE_ERROR_AUTO",
    testType: obj.testType,
    dictionary: obj.dictionary
  };
};
