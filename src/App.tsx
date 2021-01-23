import React from "react";
import Header from "./Components/Header/Header";
import SidebarSection from "./Components/Sidebar/SidebarSection";
import styled from "styled-components/macro";
import FeedSection from "./Components/middle/FeedSection";
import PostSection from "Components/middle/PostSection";
import { useSelector } from "react-redux";
import { selectUser } from "redux/mainReducer";
import LogIn from "routes/LogIn";

function App() {
  const user = useSelector(selectUser);

  return (
    <div
      className="App"
      style={{
        background: "#f3f2ef",
        width: "100%",
        height: "100%",
      }}
    >
      <Header />
      {!user.userInfo ? (
        <LogIn />
      ) : (
        <>
          <AppMain>
            <SidebarSection />
            <div className="middleSection">
              <FeedSection />
              <PostSection />
            </div>
          </AppMain>
        </>
      )}
    </div>
  );
}

const AppMain = styled.main`
  display: flex;
  & .middleSection {
    margin: 0 1rem;
  }
`;

export default App;
