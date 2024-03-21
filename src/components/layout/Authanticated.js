import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import { IoIosLogOut } from "react-icons/io";
import { SignOut } from "../../../services/firebase";
import { Button } from "../ui/button";


// component ini di gunakan untuk layout page yang di bungkus menggunakan fungsi <Authanticated /> setiap halaman nya 
// intinya ini bukan di gunakan di halamaan home dan auth melainkan di halaman menu atau halaman utama dari websitenya

export default function Authanticated({ children, title }) {
  const defaultTitle = "Netflix";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-red-600 text-sm py-4 dark:bg-gray-800">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
          aria-label="Global"
        >
          <a
            className="sm:order-1 flex-none text-xl font-semibold dark:text-white text-white"
            href="#"
          >
            Netflix | Next.js
          </a>
          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              type="button"
              className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-alignment"
              aria-controls="navbar-alignment"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <Button
              onClick={SignOut}
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Sign Out
              <IoIosLogOut />
            </Button>
          </div>
        </nav>
      </header>
      <Box component="main" sx={{ pt: "64px" }}>
        <div classNameName=" max-w-[80%] mx-auto my-0">{children}</div>
      </Box>
    </>
  );
}
