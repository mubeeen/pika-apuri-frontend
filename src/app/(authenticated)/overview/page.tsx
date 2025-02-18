"use client";

// import type { Metadata } from "next";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Overview from "./Overview";

// export const metadata: Metadata = {
//   title: "SignUp - Pika Apuri",
// };

const Page = () => {
  return (
    <Provider store={store}>
      <Overview />
    </Provider>
  );
};

export default Page;
