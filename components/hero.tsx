import React from "react";
import SwiperComponent from "./SwiperComponent";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-full w-full pt-44 bg-green-100">
      <SwiperComponent />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around py-20 items-center flex-col md:flex-row ">
          <div className="text-center md:text-left max-w-2xl order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
              Empower Your Farm with AI
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Discover AI-driven insights tailored for farmers to optimize crop
              yields, reduce costs, and access the best agricultural products.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="#shop-now"
                className="px-6 py-3 bg-green-600 text-background rounded-md hover:bg-green-700 transition"
              >
                Shop Now
              </a>
              <a
                href="#learn-more"
                className="px-6 py-3 bg-background text-green-600 dark:text-green-200 border border-green-600 rounded-md hover:bg-green-50 dark:hover:bg-green-950 transition"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex flex-col w-80 order-1 md:order-2 py-6">
            <Image
              src="/img/hero.webp"
              alt="AI Agriculture"
              width={1000}
              height={1000}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="flex justify-center p-4 bg-background rounded-full shadow-md">
              <p className="text-xs font-semibold text-green-800 dark:text-green-400">
                AI-Powered Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-green-400 to-green-200 dark:to-green-950 dark:from-green-700 opacity-30 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
