import {
  testingDuplicateRows,
  testingDuplicateDomains,
  testingCycles,
  testingChain,
  deleteErrorAuto,
  runningTests
} from "./../functions";
import * as types from "./../actions/types.js";

import { defaultState } from "./../defaultState.js";

const validation = (state = defaultState, action) => {
  switch (action.type) {
  case types.TEST_DUPLICATE_DOMAINS: {
    return runningTests(state, action, testingDuplicateDomains);
  }
  case types.TEST_DUPLICATE_ROWS: {
    return runningTests(state, action, testingDuplicateRows);
  }
  case types.TEST_CYCLES: {
    return runningTests(state, action, testingCycles);
  }
  case types.TEST_CHAIN: {
    return runningTests(state, action, testingChain);
  }
  case types.DELETE_ERROR_AUTO: {
    const dictionaryContents = [...state.dictionaries[action.dictionary]];
    const CleaneDictionaryContents = deleteErrorAuto(
        dictionaryContents,
        action.testType
      );
    return {
      ...state,
      testType: "",
      dictionaries: {
        ...state.dictionaries,
        [action.dictionary]: [...CleaneDictionaryContents]
      }
    };
  }
  default:
    return state;
  }
};

export default validation;
