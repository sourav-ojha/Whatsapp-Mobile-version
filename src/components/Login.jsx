import { Button } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../helpers/reducer";
import { useStateValue } from "../helpers/StateProvider";
import { auth, provider } from "../services/firebase";
import "./css/Login.css";
function Login() {
  const [{}, dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.ibb.co/5jrBjHh/whatsapp-icon.jpg"
          alt="whatsapp-icon"
          border="0"
        />
        <div className="login_text">
          <h1>Sign in to Chat App</h1>
        </div>
        <Button onClick={signin}>sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
