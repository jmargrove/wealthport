const defaultState = {
  viewItem: "colors",
  dictionaries: {
    colors: [
      { domain: "Stonegrey", range: "Dark grey" },
      { domain: "Midnight Black", range: "Black" },
      { domain: "Mystic Silver", range: "Silver" }
    ],
    size: [
      { domain: "Massive", range: "Large" },
      { domain: "Middle Sized", range: "Medium" }
    ],
    product: [
      { domain: "Massive", range: "Large" },
      { domain: "Middle Sized", range: "Medium" },
      { domain: "Tiny", range: "Small" }
    ]
  }
};

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
              range: ""
            }
          ]
        }
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
            : action.content.range
      };
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries,
          [action.content.dictionary]: [...editedDR]
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
