import type { Metadata } from "next";

import Login from "./Login";

export const metadata: Metadata = {
  title: "SignIn - Pika Apuri",
};

const page = () => {
  return <Login />;
};

export default page;
