import React from "react";
import styled from "styled-components/macro";
import CreateIcon from "@material-ui/icons/Create";
import FeedInputOptions from "./FeedInputOptions";
import $ from "jquery";

function FeedSection() {
  return (
    <Feed>
      <article className="feed_inputCont">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="typing what you want"
              className="inputFocus_check"
            />
            <button type="submit">Send</button>
          </form>
        </div>

        {FeedInputOptions()}
      </article>
    </Feed>
  );
}

const Feed = styled.section`
  flex: 0.6;
  margin: 0 1rem;

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
