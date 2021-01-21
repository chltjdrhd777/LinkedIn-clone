import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components/macro";
import logoImg from "../../img/linkedin.png";

function HeaderLeft() {
  return (
    <>
      <HeaderLeftDiv>
        <img src={logoImg} alt="Linkedin logo" />
        <form className="search_bar">
          <SearchIcon />
          <input type="text" />
        </form>
      </HeaderLeftDiv>
    </>
  );
}

const HeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;

  & img {
    height: 2.5rem;
    margin-right: 0.1rem;
  }

  & .search_bar {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: gray;
    border-radius: 0.2rem;
    height: 0.5rem;

    background-color: #eef3fb;
    & input {
      outline: none;
      border: none;
      background: none;
    }
  }
`;

export default HeaderLeft;
