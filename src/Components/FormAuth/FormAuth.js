import React, { useState } from "react";
import "./FormAuth.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";


function FormAuth() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Please check your credentials again");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          navigate("/register");
          //  window.scrollTo({
          //    top: document.body.scrollHeight,
          //    left: 0,
          //    behavior: "smooth",
          //  });
        } else {
          alert(e.message);
        }
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Log In to facebook</h3>

        <form action="">
          <center>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Електронна адреса або номер телефону"
            />
          </center>
          <center>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
            />
          </center>
          <center>
            <button onClick={login} type="submit" className="login__login">
              Увійти
            </button>
          </center>

          <center>
            <h6>Забули пароль?</h6>
          </center>
          <center>
            <hr />
          </center>
          <center>
            <Link to="/register">
              <button className="login__createNewAccount">
                Створити обліковий запис
              </button>
            </Link>
          </center>
        </form>
      </div>
    </div>
  );
}

export default FormAuth;
