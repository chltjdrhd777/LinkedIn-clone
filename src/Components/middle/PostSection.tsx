import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";
import InputIcon from "@material-ui/icons/Input";
import FeedInputOptions from "./FeedInputOptions";
import { useSelector } from "react-redux";
import { selectUser } from "redux/mainReducer";

interface Props3 {
  name?: string;
  description?: string;
  message?: string;
  photoURL?: string;
}

function PostSection({ name, description, message, photoURL }: Props3) {
  const posts = useSelector(selectUser).postInfo;
  const user = useSelector(selectUser).userInfo;

  return (
    <>
      {posts?.map((post) => {
        const { data } = post;

        return (
          <Post key={post.id}>
            <div className="post_header">
              <Avatar>{user.displayName[0]}</Avatar>
              <div className="post_info">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
              </div>
            </div>

            <div className="post_body">
              <p>{data.message}</p>
            </div>

            <div className="post_buttons">
              {FeedInputOptions([
                { Icon: InputIcon, title: "hi", color: "gray" },
                { Icon: InputIcon, title: "hello", color: "gray" },
                { Icon: InputIcon, title: "how are you", color: "gray" },
                { Icon: InputIcon, title: "your welcome", color: "gray" },
              ])}
            </div>
          </Post>
        );
      })}
    </>
  );
}

const Post = styled.section`
  background-color: white;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 10px;

  & .post_header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    & .post_info {
      margin-left: 0.3rem;
      & p {
        font-size: small;
        color: gray;
      }
    }
  }
`;

export default PostSection;
