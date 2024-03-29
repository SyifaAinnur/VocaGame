"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import "@/component/molecules/style/custom-style-swipper.css";


export default function SwiperComponent() {
    const slidesData = [
        {
            title: "Track Pembelianmu!",
            image: "https://ik.imagekit.io/siff/swiper1.png?updatedAt=1711595763636",
            subTitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "Membership Area",
            image: "https://ik.imagekit.io/siff/swiper2.png?updatedAt=1711595763911",
            subTitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            title: "Gabung jadi Reseller",
            image: "https://ik.imagekit.io/siff/swiper3.png?updatedAt=1711595764048",
            subTitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];

    const swiperSlides = slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
            <div>
                <Image
                    src={slide.image}
                    alt={slide.title}
                    height={400}
                    width={400}
                    className="m-auto"
                />
                <h4 className="text-2xl text-center font-bold text-white mt-2 mb-4">
                    {slide.title}
                </h4>
                <p className="text-center text-white px-4 line-clamp-5 max-w-96 m-auto mb-12">
                    {slide.subTitle}
                </p>
            </div>
        </SwiperSlide>
    ));

    return (

        <Swiper
            slidesPerView={1}
            pagination={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 5000,
            }}
            className="w-full max-w-full"
        >
            {swiperSlides}
        </Swiper>
    );
}