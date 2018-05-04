const defaultState = {
  dictionaries: [
    {
      colors: {
        domain: ["Stonegrey", "Midnight Black", "Mystic Silver"],
        range: ["Dark grey", "Black", "Silver"]
      }
    },
    {
      size: {
        domain: ["Massive", "Middle Sized", "Tiny"],
        range: ["Large", "Medium", "Small"]
      }
    },
    {
      product: {
        domain: ["Massive", "Middle Sized", "Tiny"],
        range: ["Large", "Medium", "Small"]
      }
    }
  ]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_DICTIONARY_NAME": {
      return {
        ...state,
        dictionaries: [
          ...state.dictionaries,
          {
            [action.name]: {
              domain: [],
              range: []
            }
          }
        ]
      };
    }
    default:
      return state;
  }
};

export default reducer;
