import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  // Changes
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // LOGIN
  const login = e => {
    e.preventDefault();
    setLoading(true);
    axiosWithAuth()
      .post("/login", user)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button>{loading ? "Loading" : "Log In"}</button>
    </form>
  );
};

export default Login;
