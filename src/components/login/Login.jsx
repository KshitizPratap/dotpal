import React, { useState } from "react";
import classes from "./login.module.css";
import useCommonStore from "../../store/useCommonStore";

const Login = () => {
  const { userCred, setUserCred } = useCommonStore();
  const [tempCred, steTempCred] = useState({ username: "", password: "" });

  const handleUserCredential = (e) => {
    steTempCred((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = () => {
    if (tempCred.username === "" || tempCred.password === "") {
      alert("Please enter username and/or password.");
      return;
    }

    setUserCred({ ...tempCred });
  };

  return (
    <div className={classes.mainContainer}>
      <input
        type="text"
        name="username"
        placeholder="Email"
        value={tempCred.username}
        onChange={handleUserCredential}
        className={classes.input}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={tempCred.password}
        onChange={handleUserCredential}
        className={classes.input}
      />

      <div className={classes.buttonContainer}>
        <button onClick={handleLogin}>Start</button>
        <button>Close</button>
      </div>
    </div>
  );
};

export default Login;
