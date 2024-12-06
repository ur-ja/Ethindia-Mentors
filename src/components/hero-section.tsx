import React from "react";
import EthIndiaLogo from "../../public/ethindialogo.svg";
import Image from "next/image";
import { Anek_Devanagari } from "next/font/google";

const anek_devanagari = Anek_Devanagari({ subsets: ["devanagari"] });

const HeroSection = () => {
  return (
    <div className={anek_devanagari.className}>
      <div className="flex justify-center items-center flex-col w-full">
        <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center text-center space-y-8">
          <Image src={EthIndiaLogo} alt="ETHIndia" className="w-40 mb-5" />

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold max-w-4xl tracking-[-1.28px] leading-[80px] font-stretch-[125%]">
            Meet Our Mentors
          </h1>

          <p className="text-white text-xl md:text-2xl ">
            Mentors listed here are currently available on-site, ready to
            provide expert guidance for your project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
