"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";

const Toast: React.FC = () => {
  const { error, notification } = useAppSelector((state) => state.toast);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (error || notification) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 5000); // Hide toast after 5 seconds
      return () => clearTimeout(timer); 
    }
  }, [error, notification]);

  if (!showToast) return null; 

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm p-4 rounded-md shadow-md 
        ${error ? "bg-red-500" : "bg-green-500"} text-white text-center transition-all duration-300`}
    >
      {error ? error : notification}
    </div>
  );
};

export default Toast;
