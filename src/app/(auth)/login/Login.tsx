"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { loginAsync } from "../../../redux/slices";
import { useRouter } from "next/navigation";
import Toast from "@/app/_components/Toast";

const Login: React.FC = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, accountType } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      if (accountType === "buyer") {
        router.push("/buyer-profile");
      } else if (accountType === "seller") {
        router.push("/seller-profile");
      }
    }
  }, [isAuthenticated, accountType, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAsync({ email, password }));
  };

  const navigateToForgotPassword = () => {
    router.push("/forgot-password");
  };

  const navigateToSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login</h2>
        <Toast />
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200">
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={navigateToForgotPassword} className="text-sm text-indigo-600 hover:text-indigo-800">
            Forgot your password?
          </button>
        </div>
        <div className="mt-6 text-center flex items-center justify-center">
          <p className="text-sm">Want to become a member?</p>
          <button onClick={navigateToSignup} className="text-sm text-indigo-600 hover:text-indigo-800 ml-1">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
