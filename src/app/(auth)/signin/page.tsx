import type { Metadata } from "next";
import Signin from "./Signin";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SignIn - Pika Apuri",
};

const Page = () => {
  return (
    <>
      <div>
        <h1 className="text-center lg:text-start">Sign-in</h1>
        <p className="text-center text-gray-300 lg:text-start">Sign in to your PIKA PURI account below.</p>
      </div>
      <Signin />
      <div className="text-center">
        <p className="text-sm-manrope mx-auto text-gray-300">
          Don&#39;t have an account?&nbsp;&nbsp;
          <Link className="text-green-300 transition-colors duration-200 hover:text-green-100" href="/signup">
            Sign Up
          </Link>
        </p>
        <p className="text-sm-manrope mx-auto text-gray-300">
          Forgot password?&nbsp;&nbsp;
          <Link className="text-green-300 transition-colors duration-200 hover:text-green-100" href="/forgot-password">
            Reset
          </Link>
        </p>
      </div>
    </>
  );
};

export default Page;
