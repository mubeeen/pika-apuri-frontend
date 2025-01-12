"use client";

// import type { Metadata } from "next";

import Login from "./Login";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// export const metadata: Metadata = {
//   title: "SignIn - Pika Apuri",
// };

const Page = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default Page;
