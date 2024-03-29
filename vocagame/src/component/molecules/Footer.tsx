import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full h-[238px] md:h-[338px] bg-[#131167] dark:bg-[#D38122] px-4 sm:px-28 lg:px-48  flex items-center justify-start">
      <Image
        src="https://ik.imagekit.io/siff/logo.png?updatedAt=1711595763053"
        alt="logo"
        width={100}
        height={100}
        className="cursor-pointer"
        />
    </div>
  );
}
