import React, { Component } from "react";
import styled from "styled-components";

export const ClickBox = styled.div`
  width: 20px;
  height: 20px;
  border: solid;
  border-color: black;
  border-width: thin;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
  box-shadow: 0.5px 0.5px 2px 0 #427baa;
  &:hover {
    background-color: #8bbf9f;
  }
`;

const Box = ClickBox.extend`
  margin: 5px;
  z-index: 99;
  border: solid;
  border-width: thin;
  &:hover {
    background-color: #db5461;
  }
`;

export const DelBox = ClickBox.extend`
  &:hover {
    background-color: #db5461;
  }
`;
