"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoHeader from "/public/__images/netflix.svg";

// shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// material icons
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import HomeIcon from "@mui/icons-material/Home";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// library
import { useForm } from "react-hook-form";
import { SignIn, GetSignInErrorMessage } from "../../../../services/firebase";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const router = useRouter();

  // login function
  const onSubmit = async (values) => {
    // ketika di klik maka loading nya akan aktif
    setIsLoading(true);
    const { email, password } = values;
    try {
      await SignIn(email, password);
      router.push("/dashboard");
    } catch (error) {
      const message = GetSignInErrorMessage(error.code);
      setSnackbar({ open: true, message: message });

      // jika gagal sign in maka isloading nya akan kembali false
      setIsLoading(false);
    }

    // routing ini tidak akan berfungsi kalo belum login
  };

  // close snackbar function
  const onSnackbarClose = (event, reason) => {
    console.log({ reason });
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ open: false, message: "" });
  };

  return (
    <>
      <section className="relative bg-cover bg-center h-max">
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
          <nav className=" flex justify-between items-center md:mb-16 mb-16 font-sans">
            <Image
              src={LogoHeader}
              width={160}
              height={160}
              alt="netflix image"
              className="z-10 md:w-[160px] w-[100px]"
            />
            <Button className="bg-red-600">
              <Link
                href={"/"}
                className=" flex items-center justify-center gap-1 font-semibold"
              >
                <HomeIcon />
                Back Home
              </Link>
            </Button>
          </nav>
          <form
            className=" md:w-[40%] w-full mx-auto my-0 text-white bg-black opacity-85 px-10 py-16 rounded-md font-sans"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="z-10 text-4xl mb-5 font-semibold">Login</h1>
            <div className="">
              <div className="my-4">
                <Input
                  type="email"
                  className="  py-6 border-none bg-gray-600 text-white placeholder:text-white"
                  placeholder="Masukan e-mail kamu"
                  {...register("email", {
                    required: "email harus di isi",
                    validate: (value) => {
                      if (!value.includes("@")) {
                        return "email harus memakai tanda @";
                      }
                    },
                  })}
                />
                {errors.email && (
                  <span className=" text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className=" my-4">
                <Input
                  type="password"
                  className=" py-6 border-none bg-gray-600 text-white placeholder:text-white"
                  placeholder="Masukan password kamu"
                  {...register("password", {
                    required: "password harus di isi",
                    minLength: {
                      value: 8,
                      message: "tidak boleh kurang dari 8 character",
                    },
                  })}
                />
                {errors.password && (
                  <span className=" text-sm text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 mb-6 py-6"
              >
                {isLoading ? (
                  <CircularProgress className=" w-11 text-white" />
                ) : (
                  "Masuk"
                )}
              </Button>

              <div className=" flex gap-4 items-center mb-6 md:text-base text-sm">
                <Checkbox />
                menyetujui syarat dan ketentuan
              </div>
              <div className="">
                <h3 className=" mb-3 md:text-base text-sm">
                  Apakah kamu sudah mendaftar?
                  <Link href={"/register"} className=" text-blue-800 ml-1">
                    daftar sekarang.
                  </Link>
                </h3>
                <h4 className=" md:text-base text-sm">
                  Halaman ini dilindungi oleh Google reCAPTCHA untuk memastikan
                  Anda bukan bot.
                </h4>
              </div>
            </div>
          </form>

          {/* snackbar saat login */}
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={onSnackbarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={onSnackbarClose}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
          
        </div>

        <footer className=" bg-black opacity-85 text-white">
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
        </footer>
      </section>
    </>
  );
}
