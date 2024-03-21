"use client"

import { createContext, useContext, useState } from "react";

// semua ini akan di gunakan di dalam semua halaman jadi nnnti kita taruh di layout.js

export const initialUserState = {
  email: null,
  uid: null,
};

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

// yang kita import ke layout.js adalah yang ini UserProvider nya 
export const UserProvider = (props) => {
  const [userState, setUserState] = useState(initialUserState);

//   console.log(userState)

  const SetUser = (userCridential) => {
    setUserState({ ...userCridential });
  };

  const ResetUser = () => {
    setUserState(initialUserState)
  }

//   kita set value context nya di sini / agar semua halaman bisa mengakses fungsi fumgsi di atas 
  const value = {...userState , SetUser , ResetUser}
  return <UserContext.Provider value={value} {...props} />
};
