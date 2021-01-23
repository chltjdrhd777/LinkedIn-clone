import React from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import LoginLogo from "../img/loginImg.png";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const registerFunc = () => {};
  const loginFunc = (e?: any) => {
    e.preventDefault();
  };

  return (
    <LogInMain>
      <img src={LoginLogo} alt="" />

      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e: any) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Profile pic(optional)"
          value={profilePic}
          onChange={(e: any) => setProfilePic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={loginFunc}>Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login_register" onClick={registerFunc}>
          Register Now
        </span>
      </p>
    </LogInMain>
  );
}

const LogInMain = styled.main`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10rem 0;
  height: 30vh;

  & img {
    height: 5rem;
    object-fit: contain;
    margin: 1rem 0;
  }

  & form {
    display: flex;
    flex-direction: column;

    & input {
      width: 15rem;
      height: 2rem;
      font-size: 0.7rem;
      padding-left: 10px;
      margin-bottom: 5px;
      border-radius: 5px;
    }

    & button {
      height: 2rem;
      font-size: large;
      color: white;
      background-color: #0074b1;
      border-radius: 5px;
    }
  }

  & p {
    font-size: 0.8rem;
    margin-top: 0.5rem;

    & .login_register {
      color: #0177b7;
      cursor: pointer;
    }
  }
`;

export default LogIn;
