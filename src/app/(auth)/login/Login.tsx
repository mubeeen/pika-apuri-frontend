"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { loginAsync } from "../../../redux/slices";
import { useRouter } from "next/navigation";

const Login: React.FC = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { error, notification } = useAppSelector((state) => state.toast);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAsync({ email, password }));
  };

  const nagivateToForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <div>
      <p>Errro: {error}</p>
      <p>notification: {notification}</p>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
        <br />
      </form>
      <button onClick={nagivateToForgotPassword}>Forgot Password</button>
    </div>
  );
};

export default Login;
