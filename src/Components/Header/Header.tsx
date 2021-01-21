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
  padding: 0.5rem 0;
  width: 100%;
  height: 50px;
  background-color: white;

  position: sticky;
  top: 0;
  z-index: 999;
`;

export default Header;
