import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { selectUser } from "redux/mainReducer";

function SidebarSection() {
  const user = useSelector(selectUser);

  const rectenItem = (topic: string) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <SideBar>
      <div className="position_sticky">
        <div className="sidebar_top">
          <img
            src="https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,f_auto,fl_progressive,h_533,q_auto,w_800/v1428564288/article/R10141_image1"
            alt=""
          />
          <Avatar className="sidebar_avatar" src={user.userInfo?.photoURL} />
          <h3>{user.userInfo.displayName}</h3>
          <h5>{user.userInfo.email}</h5>
        </div>

        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewd you</p>
            <p className="sidebar_statNumber">121212121</p>
          </div>
          <div className="sidebar_stat">
            <p>views on post</p>
            <p className="sidebar_statNumber">12155512</p>
          </div>
        </div>

        <div className="sidebar_buttons">
          <p>Recent</p>
          {rectenItem("testmenue1")}
          {rectenItem("testmenue2")}
          {rectenItem("testmenue3")}
          {rectenItem("testmenue4")}
          {rectenItem("testmenue5")}
        </div>
      </div>
    </SideBar>
  );
}

const SideBar = styled.section`
  flex: 0.2;
  text-align: center;

  & .position_sticky {
    position: sticky;
    top: 71px;
  }

  & .sidebar_top {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: white;
    border-bottom: 0;
    padding-bottom: 7px;

    & img {
      width: 100%;
      height: 50px;
      margin-bottom: -10px;
      object-fit: cover;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }

    & h2 {
      font-size: 1rem;
    }

    & h5 {
      color: gray;
      font-size: 0.57rem;
    }
  }

  & .sidebar_stats {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    & .sidebar_stat {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      & p {
        color: gray;
        font-size: 0.6rem;
        font-weight: 500;
      }

      & .sidebar_statNumber {
        font-weight: 800;
        color: #2a89e7;
      }
    }
  }

  & .sidebar_buttons {
    text-align: left;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: white;
    & > p {
      font-weight: bolder;
      font-size: 0.7rem;
      color: #9b2ae7;
    }

    & .sidebar_recentItem {
      display: flex;
      color: gray;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: whitesmoke;
        color: black;
        border-radius: 10px;
      }

      padding: 5px;
      margin-bottom: 5px;
      font-size: 1rem;
      & .sidebar_hash {
        margin-right: 10px;
      }
    }
  }
`;

export default SidebarSection;
