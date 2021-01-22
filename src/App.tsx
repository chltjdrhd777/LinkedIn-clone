import React from "react";
import Header from "./Components/Header/Header";
import SidebarSection from "./Components/Sidebar/SidebarSection";
import styled from "styled-components/macro";
import FeedSection from "./Components/middle/FeedSection";
import PostSection from "Components/middle/PostSection";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "#f3f2ef",
        width: "100%",
      }}
    >
      <Header />

      <AppMain>
        <SidebarSection />
        <div className="middleSection">
          <FeedSection />
          <PostSection />
        </div>
      </AppMain>
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
