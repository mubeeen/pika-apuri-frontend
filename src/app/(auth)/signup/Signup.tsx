"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { signupAsync } from "../../../redux/slices";

const Signup: React.FC = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");

  const dispatch = useAppDispatch();
  const { error, notification } = useAppSelector((state) => state.toast);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signupAsync({ email, password, firstname, lastname }));
  };

  return (
    <div>
      <p>Errro: {error}</p>
      <p>notification: {notification}</p>
      <form onSubmit={handleSubmit}>
        <label>Firstname: </label>
        <input
          type="firstname"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)} // Use setState to update firstname
        />
        <label>Lastname: </label>
        <input
          type="lastname"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)} // Use setState to update lastname
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Use setState to update email
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Use setState to update password
        />
        <button type="submit">Submit</button>
        <br />
      </form>
    </div>
  );
};

export default Signup;
