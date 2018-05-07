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
      console.log("DELETE_DICTIONARY", action);
      delete state.dictionaries[action.name];
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries
        },
        viewItem:
          action.name === state.viewItem
            ? Object.getOwnPropertyNames(state.dictionaries)[0]
            : state.viewItem
      };
    }
    case "CHANGE_VIEW_ITEM": {
      return {
        ...state,
        viewItem: action.viewItem
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
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedDuplicateDomains]
        }
      };
    }
    case "TEST_DUPLICATE_ROWS": {
      const testDuplicateRows = [...state.dictionaries[action.dictionary]];
      const testedDuplicateRows = testingDuplicateRows(testDuplicateRows);
      console.log("test the duplicate rows", testedDuplicateRows);
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedDuplicateRows]
        }
      };
    }
    case "TEST_CYCLES": {
      const testDuplicateRows = [...state.dictionaries[action.dictionary]];
      const testedDuplicateRows = testingCycles(testDuplicateRows);
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedDuplicateRows]
        }
      };
    }
    case "TEST_CHAIN": {
      const testDuplicateRows = [...state.dictionaries[action.dictionary]];
      const testedDuplicateRows = testingChain(testDuplicateRows);
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [...testedDuplicateRows]
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
