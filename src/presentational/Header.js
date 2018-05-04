import React, { Component } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: lightblue;
  width: 100%;
  height: 45px;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  color: darkblue;
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
