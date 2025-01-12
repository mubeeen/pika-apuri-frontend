"use client";
import { Provider } from "react-redux";
// import type { Metadata } from "next";
import ForgotPassword from "./ForgotPassword";
import { store } from "@/redux/store";

// export const metadata: Metadata = {
//   title: "Forgot Password - Pika Apuri",
// };

const Page = () => {
  return (
    <Provider store={store}>
      <ForgotPassword />
    </Provider>
  );
};

export default Page;
