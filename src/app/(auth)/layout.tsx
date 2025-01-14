import type { ReactNode } from "react";
import Image from "next/image";
import { Logo } from "@/components/SVGIcons";
import Link from "next/link";
import loginImage from "@/assets/images/login.jpg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 flex h-[55px] items-center justify-center bg-white shadow-card">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main className="flex min-h-dvh flex-col p-0 pt-[55px]">
        <div className="z-[5] flex size-full flex-1 items-center justify-center bg-gray-200/30 lg:w-[55%] lg:bg-gray-100">
          <div className="m-5 flex w-full max-w-[500px] flex-col gap-4 rounded-lg bg-white p-5 shadow-card sm:m-10 sm:gap-5 sm:p-10">{children}</div>
        </div>
        <div className="fixed inset-x-0 bottom-0 top-[55px] lg:left-[55%]">
          <div className="size-full">
            <Image src={loginImage} alt="login-img" width={400} height={200} className="size-full object-cover" priority />
          </div>
        </div>
      </main>
    </>
  );
}
