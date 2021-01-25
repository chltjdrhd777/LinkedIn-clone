import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import CreateIcon from "@material-ui/icons/Create";
import FeedInputOptions from "./FeedInputOptions";
import db from "../../firebase";
import { useDispatch } from "react-redux";
import { petchPost } from "redux/userSlices";
import firebase from "firebase/app";
import { selectUser } from "redux/mainReducer";
import { useSelector } from "react-redux";

function FeedSection() {
  const [focused, setFocused] = useState("unfocused_state");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        dispatch(
          petchPost(
            snap.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          )
        );
      });
  }, [dispatch]);

  const sendPost = (e?: any) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.userInfo.displayName,
      description: user.userInfo.displayName,
      message: input,
      photoURL: user.userInfo.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <Feed>
      <div className="feed_inputCont">
        <div className="feed_input">
          <CreateIcon className={focused} />

          <form onSubmit={sendPost}>
            <input
              type="text"
              placeholder="typing what you want"
              className="inputFocus_check"
              onFocus={(e: any) => {
                setFocused("focused_state");
              }}
              onBlur={(e: any) => {
                setFocused("unfocused_state");
              }}
              value={input}
              onChange={(e: any) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>

        {FeedInputOptions()}
      </div>
    </Feed>
  );
}

const Feed = styled.section`
  flex: 0.6;

  & .feed_inputCont {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 0.5rem 0.3rem 0.5rem 0.3rem;
    border-radius: 10px;
    width: 100%;

    & .feed_input {
      display: flex;
      border: 1px solid lightgray;
      border-radius: 20px;
      padding: 10px;
      color: gray;
      & svg {
        margin-right: 10px;
      }
      & .focused_state {
        visibility: hidden;
      }

      & form {
        display: flex;
        width: 100%;

        & input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 0.87rem;
          font-weight: bold;
          &:focus::-webkit-input-placeholder {
            color: transparent;
          }
        }
      }

      & button {
        display: none;
      }
    }
  }
`;

export default FeedSection;
