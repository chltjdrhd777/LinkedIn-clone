import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import styled from "styled-components/macro";

function Header() {
  return (
    <HeaderCont>
      <HeaderLeft />
      <HeaderRight />
    </HeaderCont>
  );
}

const HeaderCont = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.01rem solid lightgray;
  padding: 0.7rem 0;
  width: 100%;
`;

export default Header;
