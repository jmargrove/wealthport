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

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case types.ADD_NEW_DICTIONARY_NAME: {
    return {
      ...state,
      viewDictionary: action.name,
      dictionaries: {
        ...state.dictionaries,
        [action.name]: [
          {
            domain: "",
            range: "",
            testResult: ""
          }
        ]
      }
    };
  }
  case types.DELETE_DICTIONARY: {
    delete state.dictionaries[action.name];
    return {
      ...state,
      dictionaries: {
        ...state.dictionaries
      },
      viewDictionary:
          action.name === state.viewDictionary
            ? Object.getOwnPropertyNames(state.dictionaries)[
                Object.getOwnPropertyNames(state.dictionaries).length - 1
              ]
            : state.viewDictionary
    };
  }
  case types.CHANGE_VIEW_ITEM: {
    return {
      ...state,
      testType: "",
      viewDictionary: action.viewDictionary
    };
  }
  case types.DELETE_ROW: {
    return {
      ...state,
      dictionaries: {
        ...state.dictionaries,
        [action.content.dictionary]: [
          ...state.dictionaries[action.content.dictionary].filter(
              (el, i) => i !== action.content.rowNumber
            )
        ]
      }
    };
  }
  case types.EDIT_ROW: {
    const editedDR = [...state.dictionaries[action.content.dictionary]];
    editedDR[action.content.i] = {
      domain:
          action.content.domain === ""
            ? editedDR[action.content.i]
              ? editedDR[action.content.i].domain
              : ""
            : action.content.domain,
      range:
          action.content.range === ""
            ? editedDR[action.content.i] ? editedDR[action.content.i].range : ""
            : action.content.range,
      testResult: editedDR[action.content.i]
          ? editedDR[action.content.i].testResult
          : ""
    };
    return {
      ...state,
      dictionaries: {
        ...state.dictionaries,
        [action.content.dictionary]: [...editedDR]
      }
    };
  }
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

export default reducer;
