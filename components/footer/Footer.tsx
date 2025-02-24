import React from "react";
import Image from "next/image";
import Wave from "react-wavify";
import TwitterIcon from "@/components/icons/Twitter";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import GitHubIcon from "../icons/GitHub";

const Footer = () => {
  return (
    <section className="pt-10 bg-gray-50 dark:bg-black sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="flex flex-row gap-4 items-center">
              <Image
                alt=""
                src="/logo (2).png"
                className="h-18 w-20"
                width={450}
                height={450}
              />
              <h1 className="font-bold text-xl dark:text-white">AgriTechAI</h1>
            </div>
            <p className="text-base leading-relaxed text-gray-600 mt-7  dark:text-slate-300">
              Your one stop destination to buy, advanced agriculatural products
              from seeds, fertilisers to heavy machines. Get custom support with
              the help of our chat bot and plat disease detection.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <TwitterIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FacebookIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <InstagramIcon />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all  dark:text-white duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-white  transition-all duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  Features{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all  dark:text-white duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all  dark:text-white duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all  dark:text-white  duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all  dark:text-white duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all  dark:text-white  duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all  dark:text-white duration-200 hover:text-blue-600 focus:text-blue-600 w-fit
                  relative after:bg-[#84cc16] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8 flex flex-col">
            <h1 className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Download
            </h1>
            <p className="mt-6">
              Shining new app made just for you! <br></br> It&apos;s Free, Easy &
              Smart!
            </p>
            <div className="flex flex-col md:flex-row justify-evenly">
              <a
                href="https://agritech-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/GooglePlayBadge.png"
                  alt="google play store"
                  className="h-32 w-32"
                  width={450}
                  height={450}
                />
              </a>
              <a
                href="https://agritech-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/AppStoreBadge.png"
                  alt="apple app store"
                  className="h-32 w-32"
                  width={450}
                  height={450}
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center">
          © Copyright 2024, All Rights Reserved by AgriTechAI
        </p>
        <div className=" mt-10 mb-10 text-sm w-full h-8 text-center text-black"></div>
      </div>
      <div className="relative w-full">
        <Wave
          fill="#84cc16"
          paused={false}
          className="absolute bottom-0"
          opacity="0.3"
          options={{
            height: 20,
            amplitude: 10,
            speed: 0.2,
            points: 3,
          }}
        ></Wave>
        <Wave
          fill="#84cc16"
          paused={false}
          className="absolute bottom-0"
          opacity="0.80"
          options={{
            height: 75,
            amplitude: 20,
            speed: 0.3,
            points: 2,
          }}
        ></Wave>
        <Wave
          fill="#84cc16"
          paused={false}
          className="absolute bottom-0"
          opacity="0.5"
          options={{
            height: 45,
            amplitude: 30,
            speed: 0.1,
            points: 4,
          }}
        ></Wave>
      </div>
    </section>
  );
};
export default Footer;
