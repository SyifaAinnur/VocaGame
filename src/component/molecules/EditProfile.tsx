"use client";

import React from "react";
import { PencilIcon, UserCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { RootStater } from "@/lib/store";
import { Sidebar } from "../atoms/Sidebar";
import { FormEdit } from "./FormEdit";

export function EditProfile() {
    const users = useSelector((state: RootStater) => state.register);

    return (
        <div className="text-black flex flex-col gap-8">
            <div className="flex justify-between items-center px-2 sm:px-0">
                <div className="flex justify-center items-center gap-4">
                    <UserCircle className="text-[#6f6f6f] transition-all h-8 sm:h-12 w-8 sm:w-12" />
                    <p className="font-extrabold text-md sm:text-xl transition-all">
                        {users[0]?.name ?? "Loading.."}
                    </p>
                </div>
                <div className="flex rounded-full bg-orange-100 text-[#131167] px-4 py-2 sm:px-8 sm:py-4  dark:hover:bg-orange-200">
                    <PencilIcon className="-rotate-90 mr-2 text-orange-600 h-4 sm:h-6" />
                    <p className="text-sm sm:text-base dark:text-[#D38122]">
                        Edit Profile
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-start items-start gap-6 px-6 sm:px-0">
                <Sidebar />
                <FormEdit />
            </div>
        </div>
    );
}
