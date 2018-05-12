import React from "react";
import renderer from "react-test-renderer";
import { ClickBox, DelBox } from "./../src/presentational/Containers.js";
import "jest-styled-components";
import styled from "styled-components";

test("ClickBox styles", () => {
  const tree = renderer.create(<ClickBox />).toJSON();
  expect(tree).toHaveStyleRule("border-radius", "2px");
  expect(tree).toHaveStyleRule("width", "20px");
  expect(tree).toHaveStyleRule("height", "20px");
  expect(tree).toHaveStyleRule("display", "flex");
  expect(tree).toHaveStyleRule("justify-content", "center");
  expect(tree).toHaveStyleRule("align-items", "center");
  expect(tree).toHaveStyleRule("background-color", "#8bbf9f", {
    modifier: ":hover"
  });
});

test("DelBox styles", () => {
  const tree = renderer.create(<DelBox />).toJSON();
  expect(tree).toHaveStyleRule("border-radius", "2px");
  expect(tree).toHaveStyleRule("background-color", "#db5461", {
    modifier: ":hover"
  });
});
