export const addNewDictionary = (name: string) => {
  return {
    type: "ADD_NEW_DICTIONARY_NAME",
    name: name
  };
};

// export const addDomRag = (obj: object) => {
//   return {
//     type: "ADD_NEW_DOMAIN_RANGE",
//     domain: obj.domain,
//     range: obj.range,
//     dictionary: obj.dictionary
//   };
// };

export const changeViewItem = viewItem => {
  return {
    type: "CHANGE_VIEW_ITEM",
    viewItem: viewItem
  };
};

export const deleteRow = obj => {
  return {
    type: "DELETE_ROW",
    content: obj
  };
};

export const EditRow = obj => {
  console.log(obj, "djhbkhdasbkjvcshbfhbv");
  return {
    type: "EDIT_ROW",
    content: obj
  };
};
