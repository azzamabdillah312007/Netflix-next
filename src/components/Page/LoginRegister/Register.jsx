"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoHeader from "/public/__images/netflix.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import HomeIcon from "@mui/icons-material/Home";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { SignUp, GetSignUpErrorMessage } from "../../../../services/firebase";
import CircularProgress from "@mui/material/CircularProgress";
import withUnProtected from "../../../../hoc/withUnProtected";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Register = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = async (values) => {
    setIsLoading(true);
    const { email, password } = values;
    try {
      await SignUp(email, password);
    } catch (error) {
      setIsLoading(false);
      const message = GetSignUpErrorMessage(error.code);
      setSnackbar({open:true , message:message})
    }
  };

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
                Beranda
              </Link>
            </Button>
          </nav>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" md:w-[40%] w-full mx-auto my-0 text-white bg-black opacity-85 px-10 py-16 rounded-md font-sans"
          >
            <h1 className="z-10 text-4xl mb-5 font-semibold">Daftar</h1>
            <div className="">
              <div className="my-4">
                <Input
                  type="email"
                  className="  py-6 border-none bg-gray-600 text-white placeholder:text-white"
                  placeholder="Masukan email kamu"
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
                  placeholder="Masukan password"
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

              <div className=" my-4">
                <Input
                  type="password"
                  className=" py-6 border-none bg-gray-600 text-white placeholder:text-white"
                  placeholder="Konfirmasi password kamu"
                  {...register("confirm_password", {
                    required: "konfirmasi password anda",
                    minLength: {
                      value: 8,
                      message: "tidak boleh kurang dari 8 karakter ",
                    },
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "konfirmasi password harus sama dengan password";
                      }
                    },
                  })}
                />
                {errors.confirm_password && (
                  <>
                    <span className=" text-sm text-red-600">
                      {errors.confirm_password.message}
                    </span>
                  </>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 mb-6 py-6"
              >
                {isLoading ? (
                  <CircularProgress className="w-11 text-white" />
                ) : (
                  "Daftar"
                )}
              </Button>

              <div className=" flex gap-4 items-center mb-6  md:text-base text-sm">
                <Checkbox />
                menyetujui syarat dan ketentuan
              </div>
              <div className="">
                <h3 className=" mb-3  md:text-base text-sm">
                  apakah kamu sudah login
                  <Link href={"/login"} className=" text-blue-800 ml-1">
                    login sekarang
                  </Link>
                </h3>
                <h4 className=" md:text-base text-sm">
                  Halaman ini dilindungi oleh Google reCAPTCHA untuk memastikan
                  Anda bukan bot.
                </h4>
              </div>
            </div>
          </form>

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
};

export default withUnProtected(Register);
