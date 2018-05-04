export const addNewDictionary = (name: string) => {
  console.log("action name", name);
  return {
    type: "ADD_NEW_DICTIONARY_NAME",
    name: name
  };
};
