// This is for handling the errors in the table, where, if user selects a row
// with empty rows in between, these undefined areas will be removed, and the
// new rows will be pushed to the top
const errorHandler = array => {
  const resetArray = array.map(el => {
    if (el) {
      el.testResult = "";
      return el;
    } else {
      return el;
    }
  });

  return resetArray
    .filter(el => {
      return !!el;
    })
    .filter(el => {
      return el.domain !== "" || el.range !== "";
    });
};

// Test for duplicate rows
exports.testingDuplicateRows = arr => {
  const array = errorHandler(arr);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i] &&
        array[i].domain !== "" &&
        i !== j &&
        array[i].domain === array[j].domain &&
        array[i].range === array[j].range
      ) {
        array[i].testResult = "duplicate row";
        array[j].testResult = "duplicate row";
      }
    }
  }
  return array;
};

// Testing for duplicate domains
exports.testingDuplicateDomains = arr => {
  const array = errorHandler(arr);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i] &&
        array[i].domain !== "" &&
        i !== j &&
        array[i].domain === array[j].domain
      ) {
        array[i].testResult = "duplicate domain";
        array[j].testResult = "duplicate domain";
      }
    }
  }
  return array;
};

// Testing for cycles
exports.testingCycles = arr => {
  // reset values
  const array = errorHandler(arr);
  // find the cycle ones
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i].domain !== "" &&
        array[i].domain === array[j].range &&
        array[j].domain === array[i].range
      ) {
        array[i].testResult = "cycle";
        array[j].testResult = "cycle";
      }
    }
  }
  return array;
};

// Testing for Chains
exports.testingChain = arr => {
  const array = errorHandler(arr);
  // find the chains
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i].domain !== "" &&
        i !== j &&
        array[i].domain === array[j].range &&
        array[j].domain !== array[i].range
      ) {
        array[i].testResult = "chain";
        array[j].testResult = "chain";
      }
    }
  }
  return array;
};

exports.deleteErrorAuto = (array, testType) => {
  let res = [];
  if (testType === "duplicate row") {
    const histArray = [];
    res = array.filter(el => {
      if (
        el.testResult === "" ||
        histArray.indexOf(el.domain + el.range) === -1
      ) {
        histArray.push(el.domain + el.range);
        return true;
      } else {
        return false;
      }
    });
    return res.map(el => {
      el.testResult = "";
      return el;
    });
  } else {
    return array;
  }
};

exports.runningTests = (state, action, fun) => {
  const testArray = [...state.dictionaries[action.dictionary]];
  const testedArray = fun(testArray);
  const bool = testedArray.filter(el => {
    return el.testResult !== "";
  })[0];

  return {
    ...state,
    testType: !bool ? "" : action.test,
    dictionaries: {
      ...state.dictionaries,
      [action.dictionary]: [...testedArray]
    }
  };
};
