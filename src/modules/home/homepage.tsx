import React from "react";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

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

        <h1 className="font-black">{APP_NAME}</h1>
      </div>

      <h2 className="font-bold text-center text-xl md:text-2xl mb-2">
        Welcome back to {APP_NAME}
      </h2>

      <p className="text-gray-500 text-center mb-6">
        The best way to enhance your Photos with AI
      </p>
    </section>
  );
};

export default Home;
