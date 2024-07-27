"use client";

import Login from "@/components/Login";
import Main from "@/components/Main";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <Main /> : <Login onLogin={handleLogin} />}</>;
}
