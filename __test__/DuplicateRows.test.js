import { testingDuplicateRows } from "./../src/functions.js";
import {
  testArray1,
  testArray2,
  testArray3,
  testArray4
} from "./testObjects/DuplicateRowObjects.js";

describe(">>>testingDuplicateRows +++", () => {
  it("+++duplicate rows", () => {
    const res = testingDuplicateRows(testArray1);
    expect(res[0].testResult).toBe("duplicate row");
    expect(res[1].testResult).toBe("duplicate row");
  });

  it("+++duplicate rows +++ not duplicate domains", () => {
    const res = testingDuplicateRows(testArray2);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
  });

  it("+++duplicate rows +++ with a non duplicate in the middle", () => {
    const res = testingDuplicateRows(testArray3);
    expect(res[0].testResult).toBe("duplicate row");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("duplicate row");
  });

  it("+++duplicate rows +++ no duplicates with duplicate domains, and ranges", () => {
    const res = testingDuplicateRows(testArray4);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("");
  });
});

describe("Array returned should be the same size as one passed", () => {
  it("Is the array the same length", () => {
    const res1 = testingDuplicateRows(testArray1);
    const res2 = testingDuplicateRows(testArray2);
    const res3 = testingDuplicateRows(testArray3);
    const res4 = testingDuplicateRows(testArray4);
    expect(res1.length).toBe(2);
    expect(res2.length).toBe(2);
    expect(res3.length).toBe(3);
    expect(res4.length).toBe(3);
  });
});
