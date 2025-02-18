"use client";
import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { forgotPasswordAsync } from "../../../redux/slices";
import Toast from "@/app/_components/Toast";

const ForgotPassword: React.FC = ({}) => {
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();

  const onResetPress = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(forgotPasswordAsync({ email }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Forgot Password</h2>
        <Toast />
        <form onSubmit={onResetPress} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
            onClick={onResetPress}
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
