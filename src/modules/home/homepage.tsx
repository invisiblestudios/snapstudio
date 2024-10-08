import React from "react";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const images = [
  { src: "/assets/images/home/person-1.png", alt: "Person 1" },
  { src: "/assets/images/home/person-2.png", alt: "Person 2" },
  { src: "/assets/images/home/person-3.png", alt: "Person 3" },
];

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
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
          Welcome to {APP_NAME}
        </h2>

        <p className="text-gray-500 text-center text-sm mb-6">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>

        <div className="flex items-center justify-center gap-3 md:gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              className="object-cover w-full h-80 rounded-xl"
            />
          ))}
        </div>

        <Button className="mt-6 w-full bg-[#0BAB7C] items-center text-sm justify-center rounded-3xl py-2  text-white/80">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Home;
