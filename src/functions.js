const errorHandler = array => {
  return array
    .map(el => {
      if (el) {
        el.testResult = "";
        return el;
      }
    })
    .filter(el => {
      return !!el;
    })
    .filter(el => {
      return el.domain !== "" || el.range !== "";
    });
};

exports.testingDuplicateRows = arr => {
  const array = errorHandler(arr);
  let j = 1;
  function recur() {
    for (let i = 0; i < array.length; i++) {
      if (j > array.length - 1) {
        return array;
      }

      if (
        array[i].domain !== "" &&
        array[i].domain === array[j].domain &&
        array[i].range === array[j].range
      ) {
        if (i === j) {
          return array;
        } else {
          array[i].testResult = "duplicate row";
          array[j].testResult = "duplicate row";
          return array;
        }
      }
      j++;
      recur();
      j--;
    }
    return array;
  }
  return recur();
};

exports.testingDuplicateDomains = arr => {
  const array = errorHandler(arr);
  let j = 1;
  function recur() {
    for (let i = 0; i < array.length; i++) {
      if (j > array.length - 1) {
        return array;
      }

      if (array[i].domain !== "" && array[i].domain === array[j].domain) {
        if (i === j) {
          return array;
        } else {
          array[i].testResult = "duplicate domain";
          array[j].testResult = "duplicate domain";
          return array;
        }
      }
      j++;
      recur();
      j--;
    }
    return array;
  }
  return recur();
};

exports.testingCycles = arr => {
  // reset values
  const array = errorHandler(arr);
  // find the cycle ones
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i].domain !== "" &&
        // i !== j &&
        array[i].domain === array[j].range &&
        array[j].domain === array[i].range
      ) {
        array[i].testResult = "Cycle";
        array[j].testResult = "Cycle";
      }
    }
  }
  return array;
};

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
        array[i].testResult = "Chain";
        array[j].testResult = "Chain";
      }
    }
  }
  return array;
};

exports.deleteErrorAuto = (array, testType) => {
  let res = [];
  if (testType === "Duplicate Rows") {
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
