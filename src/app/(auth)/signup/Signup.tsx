"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { signupAsync } from "../../../redux/slices";
import { useRouter } from "next/navigation";
import Toast from "@/app/_components/Toast";

const Signup: React.FC = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signupAsync({ email, password, firstname, lastname, role }));
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Sign Up</h2>
        <Toast />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your last name"
            />
          </div>

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

          <div className="flex items-center space-x-4 mt-4">
            <div className="relative flex items-center">
              <input type="radio" id="buyer" name="role" value="buyer" checked={role === "buyer"} onChange={() => setRole("buyer")} className="mr-2" />
              <label htmlFor="buyer" className="text-sm">
                Buyer
              </label>

              {/* Tooltip for "Buyer" role */}
              <div className="absolute top-0 left-12 hidden group-hover:block bg-indigo-600 text-white text-xs rounded p-1">A buyer is someone who purchases products or services.</div>
            </div>

            <div className="relative flex items-center">
              <input type="radio" id="seller" name="role" value="seller" checked={role === "seller"} onChange={() => setRole("seller")} className="mr-2" />
              <label htmlFor="seller" className="text-sm">
                Seller
              </label>

              {/* Tooltip for "Seller" role */}
              <div className="absolute top-0 left-12 hidden group-hover:block bg-indigo-600 text-white text-xs rounded p-1">A seller is someone who offers products or services for sale.</div>
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200">
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center flex items-center justify-center">
          <p className="text-sm">Already have an account?</p>
          <button onClick={navigateToLogin} className="text-sm text-indigo-600 hover:text-indigo-800 ml-1">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
