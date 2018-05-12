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

export const DelBox = ClickBox.extend`
  &:hover {
    background-color: #db5461;
  }
`;

export const AddDictionaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 240px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 grey;
  background-color: lightgrey;
  cursor: pointer;
  &:hover {
    background-color: #8bbf9f;
  }
`;

export const InputDictionaryContainer = AddDictionaryContainer.extend`
  background-color: #5299d3;
  box-shadow: 1px 1px 5px 0 #427baa;
  cursor: default;
  &:hover {
    background-color: #5299d3;
  }
`;
