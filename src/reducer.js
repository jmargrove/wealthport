import {
  testingDuplicateRows,
  testingDuplicateDomains,
  testingCycles,
  testingChain,
  deleteErrorAuto
} from "./functions";
import { defaultState } from "./defaultState.js";

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_DICTIONARY_NAME": {
      return {
        ...state,
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
    case "DELETE_DICTIONARY": {
      delete state.dictionaries[action.name];
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries
        },
        viewDictionary:
          action.name === state.viewDictionary
            ? Object.getOwnPropertyNames(state.dictionaries)[0]
            : state.viewDictionary
      };
    }
    case "CHANGE_VIEW_ITEM": {
      return {
        ...state,
        testType: "",
        viewDictionary: action.viewDictionary
      };
    }
    case "DELETE_ROW": {
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
    case "EDIT_ROW": {
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
    case "TEST_DUPLICATE_DOMAINS": {
      const testDuplicateDomains = [...state.dictionaries[action.dictionary]];
      const testedDuplicateDomains = testingDuplicateDomains(
        testDuplicateDomains
      );
      const bool = testedDuplicateDomains.filter(el => {
        return el.testResult !== "";
      })[0];
      return {
        ...state,
        testType: !bool ? "" : action.test,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedDuplicateDomains]
        }
      };
    }
    case "TEST_DUPLICATE_ROWS": {
      const testDuplicateRows = [...state.dictionaries[action.dictionary]];
      const testedDuplicateRows = testingDuplicateRows(testDuplicateRows);
      const bool = testedDuplicateRows.filter(el => {
        return el.testResult !== "";
      })[0];
      return {
        ...state,
        testType: !bool ? "" : action.test,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedDuplicateRows]
        }
      };
    }
    case "TEST_CYCLES": {
      const testCycles = [...state.dictionaries[action.dictionary]];
      const testedCycles = testingCycles(testCycles);
      const bool = testedCycles.filter(el => {
        return el.testResult !== "";
      })[0];
      return {
        ...state,
        testType: !bool ? "" : action.test,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedCycles]
        }
      };
    }
    case "TEST_CHAIN": {
      const testChain = [...state.dictionaries[action.dictionary]];
      const testedChains = testingChain(testChain);
      const bool = testedChains.filter(el => {
        return el.testResult !== "";
      })[0];
      return {
        ...state,
        testType: !bool ? "" : action.test,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedChains]
        }
      };
    }
    case "DELETE_ERROR_AUTO": {
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
