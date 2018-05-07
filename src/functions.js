exports.testingDuplicateRows = array => {
  array = array.map(el => {
    el.testResult = "";
    return el;
  });

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

exports.testingDuplicateDomains = array => {
  array = array.map(el => {
    el.testResult = "";
    return el;
  });

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

exports.testingCycles = array => {
  // reset values
  array = array.map(el => {
    el.testResult = "";
    return el;
  });
  // find the cycle ones
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i].domain !== "" &&
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

exports.testingChain = array => {
  // reset values
  array = array.map(el => {
    el.testResult = "";
    return el;
  });
  // find the chains
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i].domain !== "" &&
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
