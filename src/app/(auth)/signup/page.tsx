import type { Metadata } from "next";
import Signup from "./Signup";

export const metadata: Metadata = {
  title: "SignUp - Pika Apuri",
};

const page = () => {
  return <Signup />;
};

export default page;
