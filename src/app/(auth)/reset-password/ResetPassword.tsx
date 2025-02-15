"use client";

import { useAppDispatch } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { resetPasswordAsync } from "@/redux/slices";
import Toast from "@/app/_components/Toast";
import { useRouter } from "next/navigation";

const ResetPassword: React.FC = ({}) => {
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState<string>("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (typeof token === "string") {
      setToken(token);
    }
  }, [searchParams]);

  const onResetPress = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetPasswordAsync({ newPassword, token }));
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Reset Your Password</h2>
        <Toast />
        <form onSubmit={onResetPress} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your new password"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
