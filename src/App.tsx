import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import SidebarSection from "./Components/Sidebar/SidebarSection";
import styled from "styled-components/macro";
import FeedSection from "./Components/middle/FeedSection";
import PostSection from "Components/middle/PostSection";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/mainReducer";
import LogIn from "routes/LogIn";
import { auth } from "./firebase";
import { login, logout } from "redux/userSlices";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth!.email,
            uid: userAuth!.uid,
            displayName: userAuth!.displayName,
            photoURL: userAuth!.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        background: "#f3f2ef",
        width: "100%",
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
