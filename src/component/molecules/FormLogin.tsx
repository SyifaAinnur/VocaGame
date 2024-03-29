"use client";

import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { UserLogin, UserRegister } from "@/types/schemma";
import { zodResolver } from "@hookform/resolvers/zod";
import { decrypt, setEncryptedCookie } from "@/utils/session";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { loginSchemma } from "@/types/validation";
import { addUserRegis } from "@/lib/redux/features/auth/registerSlice";
import { addUserLogin } from "@/lib/redux/features/auth/loginSlice";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";

export function FormLogin() {
  const [dataRegister, setDataRegister] = useState<UserRegister>();
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserLogin>({
    resolver: zodResolver(loginSchemma),
  });

  useEffect(() => {
    const register = Cookies.get("register");
    if (register) {
      const data = decrypt(register);
      setDataRegister(data);
    }
  }, []);

  const onSubmit = (data: UserLogin) => {
    if (
      data.username === dataRegister?.name &&
      data.password === dataRegister.password
    ) {
      const expirationTime = new Date(new Date().getTime() + 1 * 60 * 1000);
      setEncryptedCookie("login", data, expirationTime);
      dispatch(addUserRegis(dataRegister));
      dispatch(addUserLogin(data));
      router.replace("/profile");
    } else {
      setError("username", {
        message: "Invalid username or password in cookies",
      });
      setError("password", {
        message: "Invalid username or password in cookies",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center items-start gap-4"
    >
      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <>
            <label htmlFor="username" className="text-[#666]">
              Username
            </label>
            <Input
              colorEye="text-[#131167]"
              id="username"
              type="text"
              placeholder="Username anda.."
              className="placeholder-[#666] rounded-full border border-[#666] dark:border-[#666] p-6 bg-transparent text-[#494949]"
              {...field}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <>
            <label htmlFor="password" className="text-[#666]">
              Password
            </label>
            <Input
              colorEye="text-[#131167] dark:text-orange-500"
              id="password"
              type="password"
              placeholder="Masukkan password anda"
              className="placeholder-[#666] rounded-full border border-[#666] dark:border-[#666] p-6 bg-transparent text-[#494949]"
              {...field}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </>
        )}
      />

      <div className="w-full h-auto mt-8">
        <Button
          type="submit"
          className="w-full rounded-full bg-[#E5E7FD] dark:bg-[#D38122] dark:bg-opacity-5 text-black dark:text-[#D38122] font-bold hover:bg-slate-300 dark:hover:bg-orange-100 p-6"
        >
          Masuk Sekarang
        </Button>
      </div>
    </form>
  );
}
