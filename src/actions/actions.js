import * as types from "./types";

export const addNewDictionary = name => {
  ({
    type: types.ADD_NEW_DICTIONARY_NAME,
    name: name
  });
};

export const deleteDictionary = name => {
  return {
    type: types.DELETE_DICTIONARY,
    name: name
  };
};

export const changeViewDictionary = viewDictionary => {
  return {
    type: types.CHANGE_VIEW_ITEM,
    viewDictionary: viewDictionary
  };
};

export const deleteRow = obj => {
  return {
    type: types.DELETE_ROW,
    content: obj
  };
};

export const editRow = obj => {
  return {
    type: types.EDIT_ROW,
    content: obj
  };
};

export const testDuplicateRows = obj => {
  return {
    type: types.TEST_DUPLICATE_ROWS,
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const testDuplicateDomains = obj => {
  return {
    type: types.TEST_DUPLICATE_DOMAINS,
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const testCycles = obj => {
  return {
    type: types.TEST_CYCLES,
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const testChain = obj => {
  return {
    type: types.TEST_CHAIN,
    dictionary: obj.dictionary,
    test: obj.test
  };
};

export const deleteErrorAuto = obj => {
  return {
    type: types.DELETE_ERROR_AUTO,
    testType: obj.testType,
    dictionary: obj.dictionary
  };
};
