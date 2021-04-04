import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Login.css";

async function loginUser(credentials) {
  return fetch("https://nemesisproj.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    let inputUser = document.getElementById("usernameField").value;
    let inputPswd = document.getElementById("passwordField").value;
   
    if (
      inputUser.localeCompare("admin") != 0 ||
      inputPswd.localeCompare("admin") != 0
    ) {
      alert("Input not correct!");
    } else {
      e.preventDefault();
      const token = await loginUser({
        username,
        password,
      });

      setToken(token);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            id="usernameField"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="passwordField"
          />
        </label>
        <div id="LoginBtn">
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
