import { testingChain } from "./../src/functions/functions.js";
import {
  testArray1,
  testArray2,
  testArray3,
  testArray4,
  testArray5,
  testArray6
} from "./testObjects/ChainObjects.js";

describe(">>>testingChain +++", () => {
  it("+++Chain tests >>> no chains", () => {
    const res = testingChain(testArray1);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
  });

  it("+++Chain tests +++ has a chain", () => {
    const res = testingChain(testArray2);
    expect(res[0].testResult).toBe("chain");
    expect(res[1].testResult).toBe("chain");
  });

  it("+++Chain tests +++ one chain and a element not a chain at the start", () => {
    const res = testingChain(testArray3);
    expect(res[0].testResult).toBe("chain");
    expect(res[1].testResult).toBe("chain");
    expect(res[2].testResult).toBe("");
  });

  it("+++Chain tests +++ no duplicates with duplicate domains, and ranges", () => {
    const res = testingChain(testArray4);
    expect(res[0].testResult).toBe("chain");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("");
    expect(res[3].testResult).toBe("");
    expect(res[4].testResult).toBe("");
    expect(res[5].testResult).toBe("chain");
  });

  it("+++Chain tests +++ with a Cycle", () => {
    const res = testingChain(testArray5);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("");
    expect(res[3].testResult).toBe("");
    expect(res[4].testResult).toBe("");
  });

  it("+++Chain tests +++ Last two chains", () => {
    const res = testingChain(testArray6);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("");
    expect(res[3].testResult).toBe("");
    expect(res[4].testResult).toBe("");
    expect(res[5].testResult).toBe("chain");
    expect(res[5].testResult).toBe("chain");
  });
});

describe("Array returned should be the same size as one passed", () => {
  it("Is the array the same length", () => {
    const res1 = testingChain(testArray1);
    const res2 = testingChain(testArray2);
    const res3 = testingChain(testArray3);
    const res4 = testingChain(testArray4);
    const res5 = testingChain(testArray5);
    const res6 = testingChain(testArray6);
    expect(res1.length).toBe(2);
    expect(res2.length).toBe(2);
    expect(res3.length).toBe(3);
    expect(res4.length).toBe(6);
    expect(res5.length).toBe(6);
    expect(res6.length).toBe(7);
  });
});
