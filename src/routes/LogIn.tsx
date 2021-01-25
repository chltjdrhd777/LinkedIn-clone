import { auth } from "../firebase";
import React from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import LoginLogo from "../img/loginImg.png";
import { useDispatch } from "react-redux";
import { login } from "redux/userSlices";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const userDataForm = (userAuth: any) => {
    return {
      email: userAuth!.user.email,
      uid: userAuth!.user?.uid,
      displayName: userAuth!.user.displayName,
      photoURL: userAuth!.user.photoURL,
    };
  };

  const registerFunc = () => {
    if (!name) {
      return alert("Please enter your full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          ?.updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(login(userDataForm(userAuth)));
          });
      })
      .catch((err) => alert(err));
  };

  const loginFunc = (e?: any) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(login(userDataForm(userAuth)));
      })
      .catch((err) => alert(err));
  };

  return (
    <LogInMain>
      <img src={LoginLogo} alt="" />

      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          required
          onChange={(e: any) => {
            setName(e.target.value);
          }}
        />

        <label className="input-file-bar" htmlFor="input-file">
          {profilePic ? profilePic : "file choose"}
        </label>
        <input
          type="file"
          accept="image/*,text"
          multiple
          placeholder="Profile pic(optional)"
          onChange={(e: any) => setProfilePic(e.target.files[0].name)}
          id="input-file"
          style={{ display: "none" }}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          required
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          required
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
    & .input-file-bar {
      display: flex;
      align-items: center;
      color: gray;
      width: 15rem;
      height: 2rem;
      font-size: 0.8rem;
      padding-left: 10px;
      margin-bottom: 5px;
      border-radius: 5px;
      border: 2px solid black;
    }

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
