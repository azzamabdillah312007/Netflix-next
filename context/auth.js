"use client";

import { use, useEffect, useState } from "react";
import CircularProgres from "@mui/material/CircularProgress";
import { Authentication } from "../services/firebase";
import { useUser, initialUserState } from "./user";

// fungsi untuk check sudah loigin atau belum dan fungsi ini digunakan saat pertama aplikasi di buka
const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { SetUser } = user;

  const initiateStateChange = () => {
    // .onAuthstateChange adalah method untuk mengecek apakah sudah login atau belum menggunakan parametter user
    // jika sudah ada parametter usernnya berarti sudah login
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        // jika dia ter authentikasi maka set SetUSer nya menjadi ini
        SetUser({ email: user.email, uid: user.uid });
        console.log("user is authantication");
      } else {
        // jika tidak ubah dia ke nilai initialuSerState yang ada di context atau dengan kata lain akan di set ke nilai default
        // yaitu null
        console.log("user is not authanticated");
        SetUser(initialUserState);
      }

      // nah disini kita tidak mengacu pada pengkondisian di atas , jadi mau dia login atau tidak login maka state isloading ini akan
      // berubah menjadi false

      setIsLoading(false);
    });
  };

  useEffect(() => {
    initiateStateChange();
  }, []);

  // jika masih loading maka tampilkan CircularProgres dari material UI
  if (isLoading) {
    return (
        <CircularProgres />
    );
  }

  // jika sudah tidak loading tampilkan children nya saja , maksud children adalah , children yang di bungkus di layout.js
  return children;
};

export default AuthStateChangeProvider;
