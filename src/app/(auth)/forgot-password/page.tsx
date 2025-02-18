import type { Metadata } from "next";
import ForgotPassword from "./ForgotPassword";

export const metadata: Metadata = {
  title: "Forgot Password - Pika Apuri",
};

const Page = () => {
  return <ForgotPassword />;
};

export default Page;
