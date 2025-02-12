import type { Metadata } from "next";
import ResetPassword from "./ResetPassword";

export const metadata: Metadata = {
  title: "Reset Password - Pika Apuri",
};

const page = () => {
  return <ResetPassword />;
};

export default page;
