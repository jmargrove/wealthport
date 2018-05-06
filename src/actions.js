export const addNewDictionary = (name: string) => {
  console.log("action name", name);
  return {
    type: "ADD_NEW_DICTIONARY_NAME",
    name: name
  };
};

export const addDomRag = (obj: object) => {
  //console.log("actions obj", obj);
  return {
    type: "ADD_NEW_DOMAIN_RANGE",
    domain: obj.domain,
    range: obj.range,
    dictionary: obj.dictionary
  };
};

export const changeViewItem = viewItem => {
  console.log("action change item", viewItem);
  return {
    type: "CHANGE_VIEW_ITEM",
    viewItem: viewItem
  };
};

export const deleteRow = obj => {
  console.log("the actions for deleting a row", obj);
  return {
    type: "DELETE_ROW",
    content: obj
  };
};

export const EditRow = obj => {
  console.log(obj);
  return {
    type: "EDIT_ROW",
    content: obj
  };
};
