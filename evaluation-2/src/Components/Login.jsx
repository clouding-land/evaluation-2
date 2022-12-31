import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import Products from "./Products";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    loginReqRes({ email, password });
  };

  const loginReqRes = async (data) => {
    try {
      const res = await axios.post("https://reqres.in/api/login", data);

      if (res.data.token) {
        loginUser(res.data.token);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          margin: "auto",
          gap: "25px",
          marginTop: "25px"
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input onChange={<Products />} type="submit" />
      </form>
    </>
  );
}
