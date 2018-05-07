const colors = [
  { domain: "Stonegrey", range: "Dark grey", testResult: "" },
  { domain: "Midnight Black", range: "Black", testResult: "d" },
  { domain: "Mystic Silver", range: "Silver", testResult: "c" },
  { domain: "Mystic Silver", range: "Silver", testResult: "c" },
  { domain: "Mystic Silver", range: "Silver", testResult: "c" },
  { domain: "Mystic Silver", range: "blue", testResult: "sdac" },
  { domain: "Midnight Black", range: "Black", testResult: "d" },
  { domain: "Mystic Silver", range: "Silver", testResult: "j" },
  { domain: "Midnight", range: "Hot", testResult: "" },
  { domain: "Mystic Silver", range: "Silver", testResult: "c" }
];

function deleteErrorAuto(array, testType) {
  const histArray = [];

  return array.filter(el => {
    if (el.testResult == "" || histArray.indexOf(el.domain + el.range) === -1) {
      histArray.push(el.domain + el.range);
      return true;
    } else {
      return false;
    }
  });
}

console.log(deleteErrorAuto(colors));
