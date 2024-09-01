import React from "react";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const images = [
  { src: "/assets/images/home/frame-1.png", alt: "Frame 1" },
  { src: "/assets/images/home/frame-2.png", alt: "Frame 2" },
  { src: "/assets/images/home/frame-1.png", alt: "Frame 3" },
  { src: "/assets/images/home/frame-1.png", alt: "Frame 4" },
  { src: "/assets/images/home/frame-1.png", alt: "Frame 5" },
  { src: "/assets/images/home/frame-1.png", alt: "Frame 6" },
];

const SelectStyle = () => {
  return (
    <div className="flex items-center justify-center">

   
    <section className="mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-1 mb-5">
        <Image
          src="/assets/logos/logo.svg"
          alt={APP_NAME}
          width={28}
          height={36}
          className="w-6 h-6 object-contain"
        />
        <h1 className="font-semibold text-xl md:text-3xl">{APP_NAME}</h1>
      </div>

      <div className="mx-auto md:p-8 md-6 flex flex-col max-w-3xl items-center gap-1 mb-5 rounded-3xl bg-white">
        <h2 className="font-semibold text-center text-2xl md:text-4xl mb-2">
        Select Styles
        </h2>

        <p className="text-gray-500 text-center text-sm mb-6">
        In publishing and graphic design placeholder.
        </p>

        <div className="grid grid-cols-3 items-center justify-center gap-2">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-xl"
            />
          ))}
        </div>

        <Button className="mt-6 w-full bg-[#0BAB7C] items-center text-sm justify-center rounded-3xl py-2  text-white/80">
          Get Started
        </Button>
      </div>
    </section>
    </div>
  );
};

export default SelectStyle;
