import { Navbar } from "@/component/atoms/navbar";
import { FormRegister } from "@/component/molecules/RegisterForm";
import Image from "next/image";
import React from "react";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <Navbar />
      <main className="flex justify-center gap-6">
        <div className="flex-none hidden lg:flex">
          <Image
            src="https://ik.imagekit.io/siff/logo.png?updatedAt=1711595763053"
            alt="logo"
            width={370}
            height={233}
            className="w-full lg:w-[370px] h-[233px]"
            />
        </div>
        <div className="flex-1 lg:max-w-[550px] py-20">
          <FormRegister />
        </div>
      </main>
    </>
  );
}
