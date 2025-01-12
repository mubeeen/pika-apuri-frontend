// import type { Metadata } from "next";

"use client";
import { Provider } from "react-redux";
import ResetPassword from "./ResetPassword";
import { store } from "@/redux/store";

// export const metadata: Metadata = {
//   title: "Reset Password - Pika Apuri",
// };

const Page = () => {
  return (
    <Provider store={store}>
      <ResetPassword />
    </Provider>
  );
};

export default Page;
