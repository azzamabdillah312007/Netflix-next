"use client"

// firebase menggunakan project yang nxt auth

import LandingPage from "@/components/Page/Home/LandingPage";
import withUnProtected from "../../hoc/withUnProtected";

const Home = () => {
  return (
    <main>
      <LandingPage />
    </main>
  );
};

export default withUnProtected(Home); 
