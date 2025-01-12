"use client";
import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { forgotPasswordAsync } from "../../../redux/slices";

const ForgotPassword: React.FC = ({}) => {
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();

  const onResetPress = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(forgotPasswordAsync({ email }));
  };

  return (
    <div>
      <form onSubmit={onResetPress}>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Forgot Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
