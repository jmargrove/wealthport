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

export const editRow = obj => {
  return {
    type: "EDIT_ROW",
    content: obj
  };
};

export const testDuplicateRows = obj => {
  return {
    type: "TEST_DUPLICATE_ROWS",
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const testDuplicateDomains = obj => {
  return {
    type: "TEST_DUPLICATE_DOMAINS",
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const testCycles = obj => {
  return {
    type: "TEST_CYCLES",
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const testChain = obj => {
  return {
    type: "TEST_CHAIN",
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const deleteErrorAuto = obj => {
  return {
    type: "DELETE_ERROR_AUTO",
    testType: obj.testType,
    dictionary: obj.dictionary
  };
};
