import React from "react";
import Image from "next/image";
import Tv from "/public/__images/tv.png";
import Mobile from "/public/__images/mobile.jpg";
import Devices from "/public/__images/devices.png";
import Kids from "/public/__images/kids.png";
// import TvVideos from "/public/__videos/devices.m4v";
// import DevicesVideos from "/public/__videos/tv.m4v";

export default function Features() {
  return (
    <>
      {/* section 1 */}
      <section className=" bg-black  border-gray-700 border-b-4">
        <div className=" grid md:grid-cols-2 grid-cols-1 py-20 md:w-[70%] w-full mx-auto my-0 items-center">
          <div className=" col-span-1 text-white">
            <h2 className="md:text-start text-center text-4xl font-medium mb-3">
              Enjoy on your TV.
            </h2>
            <h5 className=" md:text-start text-center">
              Watch on Smart TVs , playstation , Xbox , Chromecast , Apple TV ,
              Blue-ray Players, and more.
            </h5>
          </div>
          <div className=" col-span-1 mx-auto my-0 relative">
            <div className="relative z-10">
              <Image src={Tv} alt="devices" width={400} height={400} />
            </div>
            <div className="absolute w-full h-full max-w-[75%] max-h-[54%] top-[48%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <video
                src="/__videos/tv.m4v"
                className="h-full w-full"
                autoPlay
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className=" bg-black  border-gray-700 border-b-4">
        <div className=" grid md:grid-cols-2 grid-cols-1 py-20 md:w-[70%] w-full mx-auto my-0 items-center">
          <div className=" col-span-1 md:order-1 order-2">
            <Image src={Mobile} alt="devices" width={400} height={400} />
          </div>
          <div className=" col-span-1 md:order-2 order-1 text-white">
            <h2 className="md:text-start text-center text-4xl font-medium mb-3">
              Donlowad your shows to watch offline.
            </h2>
            <h5 className=" md:text-start text-center">
              Save your favorites easily and always have something to watch.
            </h5>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className=" bg-black  border-gray-700 border-b-4">
        <div className=" grid md:grid-cols-2 grid-cols-1 py-20 md:w-[70%] w-full mx-auto my-0 items-center">
          <div className=" col-span-1 text-white">
            <h2 className="md:text-start text-center text-4xl font-medium mb-3">
              Watch everywhare
            </h2>
            <h5 className=" md:text-start text-center">
              Stream unlimited and TV shows on your phone,tablet,laptop,and TV.
            </h5>
          </div>
          {/* <div className=" col-span-1 mx-auto my-0">
            <Image src={Devices} alt="devices" width={400} height={400} />
          </div> */}
          <div className=" col-span-1 mx-auto my-0 relative">
            <div className="relative z-10">
              <Image src={Devices} alt="devices" width={400} height={400} />
            </div>
            <div className="absolute w-full h-full max-w-[65%] max-h-[65%] top-[38%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <video
                src="/__videos/devices.m4v"
                className="h-full w-full"
                autoPlay
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className=" bg-black  border-gray-700 border-b-4">
        <div className=" grid md:grid-cols-2 grid-cols-1 py-20 md:w-[70%] w-full mx-auto my-0 items-center">
          <div className=" col-span-1 md:order-1 order-2">
            <Image src={Kids} alt="devices" width={400} height={400} />
          </div>
          <div className=" col-span-1 md:order-2 order-1 text-white">
            <h2 className="md:text-start text-center text-4xl font-medium mb-3">
              Create profiles for kids.
            </h2>
            <h5 className=" md:text-start text-center">
              Seen kids on advantures with their favorites characters in a space
              made just for them-free with your membership
            </h5>
          </div>
        </div>
      </section>
    </>
  );
}
