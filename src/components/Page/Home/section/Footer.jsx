import React from "react";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <section className=" bg-black text-white">
      <div className="py-20 md:w-[60%] w-full mx-auto my-0 items-center">
        <h3 className=" text-lg text-gray-400 md:mb-14 mb-10 md:text-left text-center">
          Questions? Call +62 7803 3218 275
        </h3>
        <div className=" grid md:grid-cols-4 grid-cols-2 gap-5 mb-6">
          <div className=" col-span-1 leading-9 md:text-left text-center">
            <Link href={""} className=" block text-gray-400">
              FAQ
            </Link>
            <Link href={""} className=" block text-gray-400">
              Investor Relations
            </Link>
            <Link href={""} className=" block text-gray-400">
              Ways to Watch
            </Link>
            <Link href={""} className=" block text-gray-400">
              Corporate Information
            </Link>
          </div>
          <div className=" col-span-1 leading-9 md:text-left text-center">
            <Link href={""} className=" block text-gray-400">
              Help Center
            </Link>
            <Link href={""} className=" block text-gray-400">
              Jobs
            </Link>
            <Link href={""} className=" block text-gray-400">
              Terms of Use
            </Link>
            <Link href={""} className=" block text-gray-400">
              Contact Us
            </Link>
          </div>
          <div className=" col-span-1 leading-9 md:text-left text-center">
            <Link href={""} className=" block text-gray-400">
              Account
            </Link>
            <Link href={""} className=" block text-gray-400">
              Redeem Gift Cards
            </Link>
            <Link href={""} className=" block text-gray-400">
              Privacy
            </Link>
            <Link href={""} className=" block text-gray-400">
              Speed Test
            </Link>
          </div>
          <div className=" col-span-1 leading-9 md:text-left text-center">
            <Link href={""} className=" block text-gray-400">
              Media Center
            </Link>
            <Link href={""} className=" block text-gray-400">
              Buy Gift Cards
            </Link>
            <Link href={""} className=" block text-gray-400">
              Cookie Preferences
            </Link>
            <Link href={""} className=" block text-gray-400">
              Legal Notices
            </Link>
          </div>
        </div>
        <div className=" md:px-0 px-6">
          <Select
            className=" md:w-max w-full"
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
        </div>
      </div>
    </section>
  );
}
