"use client";
import React from "react";
import Image from "next/image";
import LogoHeader from "/public/__images/netflix.svg";
import { Button } from "@/components/ui/button";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative bg-cover bg-center h-screen border-gray-700 border-b-4">
      {/* untuk backround image */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 "
        style={{
          backgroundImage: "url(/__images/backdrop.jpg)",
          filter: "brightness(25%)",
          zIndex: 0,
        }}
      ></div>

      <div className="relative md:px-12 px-5 py-6 z-10">
        <nav className=" flex justify-between items-center md:mb-28 mb-20">
          <Image
            src={LogoHeader}
            width={160}
            height={160}
            alt="netflix image"
            className="z-10 md:w-[160px] w-[100px]"
          />
          <div className=" flex gap-3">
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="En"
              sx={{
                color: "white",
                borderWidth: "2px",
                borderColor: "white",
                "& .MuiSelect-icon": {
                  color: "common.white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="En">English</MenuItem>
              <MenuItem value="In">Indonesian</MenuItem>
            </Select>
            <Button className="bg-red-600 px-6">
              <Link href={"/login"}>SIgn in</Link>
            </Button>
          </div>
        </nav>
        <div className=" md:w-[50%] w-full mx-auto my-0 md:mb-16 mb-5">
          <h1 className=" text-center md:text-[60px] text-[37px] text-white font-extrabold mb-4 ">
            Unlimited movies, TV hows, and more
          </h1>
          <h3 className=" md:text-2xl text-base font-semibold text-white text-center md:mb-0 mb-5">
            Starts at IDR 54,000. Cancel anytime.
          </h3>
          <h5 className=" md:text-lg text-sm  text-white text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
        </div>
        <div className=" md:w-[50%] w-full mx-auto my-0 md:flex items-center block gap-2 ">
          <Input
            className=" h-14 bg-gray-900 opacity-80 text-white border-none active:border-none md:mb-0 mb-4"
            placeholder="E-mail address"
          />
          <Button className=" h-14 bg-red-600 md:w-max w-full">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
