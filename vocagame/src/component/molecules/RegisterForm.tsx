"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { setEncryptedCookie } from "@/utils/session";
import { useDispatch } from "react-redux";
import { UserRegister } from "@/types/schemma";
import { registerSchema } from "@/types/validation";
import { addUserRegis } from "@/lib/redux/features/auth/registerSlice";
import { Input } from "../atoms/input";
import { Button } from "../atoms/button";

export function FormRegister() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegister>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: UserRegister) => {
    console.log(data);
    setEncryptedCookie("register", data);
    dispatch(addUserRegis(data));
    router.replace("/auth/login");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center items-start gap-4"
    >
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <>
            <label htmlFor="name" className="text-[#fff]">
              Nama Anda
            </label>
            <Input
              colorEye="text-white"
              id="name"
              type="text"
              placeholder="Ketik nama anda disini.."
              {...field}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="noHp"
        render={({ field }) => (
          <>
            <label htmlFor="noHp" className="text-[#fff]">
              Nomor Anda
            </label>
            <Input
              colorEye="text-white"
              id="noHp"
              type="text"
              placeholder="Nomor Handphone anda"
              {...field}
            />
            {errors.noHp && (
              <span className="text-red-500">{errors.noHp.message}</span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <>
            <label htmlFor="password" className="text-[#fff]">
              Password
            </label>
            <Input
              colorEye="text-white"
              id="password"
              type="password"
              placeholder="Masukkan password anda"
              {...field}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <>
            <label htmlFor="confirmPassword" className="text-[#fff]">
              Konfirmasi Password
            </label>
            <Input
              colorEye="text-white"
              id="confirmPassword"
              type="password"
              placeholder="Masukkan kembali password anda"
              {...field}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </>
        )}
      />

      <div className="w-full h-auto mt-3">
        <Button
          type="submit"
          className="w-full rounded-full bg-white text-black hover:bg-slate-300 p-6"
        >
          Daftar Sekarang
        </Button>
      </div>
    </form>
  );
}
