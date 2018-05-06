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
    case "ADD_NEW_DOMAIN_RANGE": {
      return {
        ...state,
        dictionaries: {
          ...state.dictionaries,
          [action.dictionary]: [
            ...state.dictionaries[action.dictionary],
            { domain: action.domain, range: action.range }
          ]
        }
      };
    }
    case "CHANGE_VIEW_ITEM": {
      console.log("action.......dksl", action.viewItem);

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
    default:
      return state;
  }
};

export default reducer;
