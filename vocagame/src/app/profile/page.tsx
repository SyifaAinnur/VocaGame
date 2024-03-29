
import { Navbar } from "@/component/atoms/navbar";
import { EditProfile } from "@/component/molecules/EditProfile";
import { Footer } from "@/component/molecules/Footer";
import { Header } from "@/component/molecules/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const cookieLogin = cookies().get("login");

    if (!cookieLogin?.value) {
        redirect("/auth/login");
    }
    return (
        <>
            <Navbar />
            <Header />
            <main className="w-full h-full flex flex-col justify-between items-center gap-8 bg-white pt-8">
                <div className="w-full sm:px-28 lg:px-48 flex flex-col gap-4">
                    <div className="bg-[#131167] dark:bg-[#D38122] w-full h-auto py-4 rounded-md flex flex-col items-center justify-center gap-2">
                        <div className="text-white text-center">
                            <h2 className="font-extrabold  sm:text-5xl text-3xl">LOREM</h2>
                            <p className="text-center text-sm sm:text-base">
                                <q>
                                    Neque porro quisquam est qui dolorem ipsum quia dolor
                                    <br />
                                    sit amet, consectetur, adipisci velit...
                                </q>
                                <br />
                                <q className="hidden sm:flex transition-all">
                                    There is no one who loves pain itself, who seeks after it
                                    <br />
                                    and wants to have it, simply because it is pain...
                                </q>
                            </p>
                        </div>
                    </div>
                    <div>
                        <EditProfile />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
