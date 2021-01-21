import React from "react";
import Header from "./Components/Header/Header";
import SidebarSection from "./Components/Sidebar/SidebarSection";
import styled from "styled-components/macro";
import FeedSection from "./Components/middle/FeedSection";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "#f3f2ef",
      }}
    >
      <Header />

      <AppMain>
        <SidebarSection />
        <FeedSection />
      </AppMain>
    </div>
  );
}

const AppMain = styled.main`
  display: flex;
`;

export default App;
