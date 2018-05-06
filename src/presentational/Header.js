import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 45px;
  border-color: black;
  border-bottom: solid;
  border-width: thin;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  color: black;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderTitle> wealthport </HeaderTitle>
      </HeaderContainer>
    );
  }
}

export default Header;
