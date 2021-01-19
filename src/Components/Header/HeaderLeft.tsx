import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components/macro";

function HeaderLeft() {
  return (
    <>
      <HeaderLeftDiv>
        <img
          src="https://lh3.googleusercontent.com/proxy/hGvbgWkfXXw7gUbdPLFlj3ycCSmRZOGIYhgA4TS7R5Vhd81JXqFKbZRcPZqih-UGif3XAYuFBkVu3pq4tFMNZL3F6AMJQkdtr9a5tt9P_q_aSOl5uDoBpUXl8xSHzPOu5w"
          alt="Linkedin logo"
        />
        <div className="search_bar">
          <SearchIcon />
          <input type="text" />
        </div>
      </HeaderLeftDiv>
    </>
  );
}

const HeaderLeftDiv = styled.div`
  display: flex;
  align-items: center;

  & img {
    object-fit: contain;
    height: 2.5rem;
    margin-right: 0.1rem;
  }

  & .search_bar {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: gray;
    border-radius: 0.2rem;
    height: 1rem;
    background-color: #eef3fb;
    & input {
      outline: none;
      border: none;
      background: none;
    }
  }
`;

export default HeaderLeft;
