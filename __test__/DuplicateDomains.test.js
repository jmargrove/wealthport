import { testingDuplicateDomains } from "./../src/functions/functions.js";
import {
  testArray1,
  testArray2,
  testArray3,
  testArray4,
  testArray5,
  testArray6
} from "./testObjects/DuplicateDomainObjects.js";

describe(">>>testingDuplicateDomains +++", () => {
  it("+++duplicate Domains", () => {
    const res = testingDuplicateDomains(testArray1);
    expect(res[0].testResult).toBe("duplicate domain");
    expect(res[1].testResult).toBe("duplicate domain");
  });

  it("+++duplicate Domains +++ apposed to duplicate rows", () => {
    const res = testingDuplicateDomains(testArray2);
    expect(res[0].testResult).toBe("duplicate domain");
    expect(res[1].testResult).toBe("duplicate domain");
  });

  it("+++duplicate Domains +++ as apposed to duplicate rows", () => {
    const res = testingDuplicateDomains(testArray3);
    expect(res[0].testResult).toBe("duplicate domain");
    expect(res[1].testResult).toBe("duplicate domain");
    expect(res[2].testResult).toBe("duplicate domain");
  });

  it("+++duplicate Domains +++ no duplicates with duplicate domains, and ranges", () => {
    const res = testingDuplicateDomains(testArray4);
    expect(res[0].testResult).toBe("duplicate domain");
    expect(res[1].testResult).toBe("duplicate domain");
    expect(res[2].testResult).toBe("");
  });

  it("+++duplicate Domains +++ no duplicate domains", () => {
    const res = testingDuplicateDomains(testArray5);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("");
    expect(res[3].testResult).toBe("");
    expect(res[4].testResult).toBe("");
  });

  it("+++duplicate Domains +++ no duplicates with duplicate domains, and ranges", () => {
    const res = testingDuplicateDomains(testArray6);
    expect(res[0].testResult).toBe("");
    expect(res[1].testResult).toBe("");
    expect(res[2].testResult).toBe("duplicate domain");
    expect(res[3].testResult).toBe("duplicate domain");
    expect(res[4].testResult).toBe("");
    expect(res[5].testResult).toBe("");
  });
});

describe("Array returned should be the same size as one passed", () => {
  it("Is the array the same length", () => {
    const res1 = testingDuplicateDomains(testArray1);
    const res2 = testingDuplicateDomains(testArray2);
    const res3 = testingDuplicateDomains(testArray3);
    const res4 = testingDuplicateDomains(testArray4);
    expect(res1.length).toBe(2);
    expect(res2.length).toBe(2);
    expect(res3.length).toBe(3);
    expect(res4.length).toBe(3);
  });
});
