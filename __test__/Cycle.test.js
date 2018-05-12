import { testingCycles } from "./../src/functions.js";
import {
  testArray1,
  testArray2,
  testArray3,
  testArray4,
  testArray5,
  testArray6
} from "./testObjects/CycleObjects.js";

describe(">>>testingCycles +++", () => {
  it("+++Cycles tests >>> no Cycles array1", () => {
    const res = testingCycles(testArray1);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
  });

  it("+++Cycles tests +++ has a Cycle -- array2", () => {
    const res = testingCycles(testArray2);
    expect(res[0].testResult).toBe("Cycle");
    expect(res[1].testResult).toBe("Cycle");
  });

  it("+++Cycles tests +++ has a cycle at the begining -- array3", () => {
    const res = testingCycles(testArray3);
    expect(res[0].testResult).toBe("Cycle");
    expect(res[1].testResult).toBe("Cycle");
    expect(res[2].testResult).toBe("");
  });

  it("+++Cycles tests +++ has a cycle at either end of the array4 with two duplicate rows", () => {
    const res = testingCycles(testArray4);
    expect(res[0].testResult).toBe("Cycle");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("");
    expect(res[3].testResult).toBe("");
    expect(res[4].testResult).toBe("Cycle");
    expect(res[5].testResult).toBe("Cycle");
  });

  it("+++Cycles tests +++ with a Cycle in the middle", () => {
    const res = testingCycles(testArray5);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("Cycle");
    expect(res[3].testResult).toBe("Cycle");
    expect(res[4].testResult).toBe("");
  });

  it("+++Cycles tests +++ Last two elements are Cycles", () => {
    const res = testingCycles(testArray6);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("");
    expect(res[3].testResult).toBe("");
    expect(res[4].testResult).toBe("");
    expect(res[5].testResult).toBe("Cycle");
    expect(res[5].testResult).toBe("Cycle");
  });
});

describe("Array returned should be the same size as one passed", () => {
  it("Is the array the same length", () => {
    const res1 = testingCycles(testArray1);
    const res2 = testingCycles(testArray2);
    const res3 = testingCycles(testArray3);
    const res4 = testingCycles(testArray4);
    const res5 = testingCycles(testArray5);
    const res6 = testingCycles(testArray6);
    expect(res1.length).toBe(2);
    expect(res2.length).toBe(2);
    expect(res3.length).toBe(3);
    expect(res4.length).toBe(6);
    expect(res5.length).toBe(6);
    expect(res6.length).toBe(7);
  });
});
