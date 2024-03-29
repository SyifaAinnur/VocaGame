import React from "react";
import Image from "next/image";
import { UserCircle } from "lucide-react";

export function Header() {
  return (
    <>
      <div className="w-full h-auto flex justify-between items-center px-2 sm:px-28 lg:px-48 bg-[#131167] dark:bg-[#D38122]">
        <Image
            src="https://ik.imagekit.io/siff/logo.png?updatedAt=1711595763053"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"

        />
        <UserCircle  className="text-[#6f6f6f] transition-all h-[42px] sm:h-[62px] w-[42px] sm:w-[67px]" />
      </div>
      <div className="w-full bg-[#131167] dark:bg-[#D38122] border-t-[1px] border-gray-100 h-[25px]"></div>
    </>
  );
}
