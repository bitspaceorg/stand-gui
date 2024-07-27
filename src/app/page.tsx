"use client";

import Login from "@/components/Login";
import Main from "@/components/Main";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return <>{isLoggedIn ? <Main /> : <Login onLogin={handleLogin} />}</>;
}
