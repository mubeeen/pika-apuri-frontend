"use client";

// import type { Metadata } from "next";
import Signup from "./Signup";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// export const metadata: Metadata = {
//   title: "SignUp - Pika Apuri",
// };

const Page = () => {
  return (
    <Provider store={store}>
      <Signup />
    </Provider>
  );
};

export default Page;
